import {useCallback, useState} from 'react'
import {backUrl} from '../consts'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const request = useCallback(async (url, {method = 'GET', body, headers = {}}) => {
        try {
            setLoading(true)

            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(backUrl+ '/api/uspex' + url, {method, body, headers})
            const data = await response.json()

            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            throw e
        }
    }, [])

    return {request, loading}
}