import React, {useCallback, useEffect, useState} from "react"
import {useDispatch} from "react-redux";
import {Redirect, useParams} from 'react-router-dom'
import {useHttp} from "../../hooks/http.hooks"
import {loadData} from "../../redux/actions";
import {useAuth} from "../../hooks/auth.hook";

const AuthPage = () => {
    const {login} = useAuth()
    const dispatch = useDispatch()
    const {request} = useHttp()
    const {name, company, token, ticket} = useParams()
    const [error, setError] = useState(false)
    const [resp, setResp] = useState(false)

    const check = useCallback(async () => {
        try {
            const res = await request(`/${company}/${name}/${ticket}`, {
                headers: {'Authorization': `Token ${token}`}
            })
            console.log(res)
            if (res.bid) {
                res._info = {company, token, name, ticket}
                dispatch(loadData(res))
                const info = {company, token, name, ticket}
                login(info)
                return <Redirect to="/"/>
            } else{
                setError(res.detail)
            }
        } catch (e) {
            console.log(e)
            setError(e.name + ': ' + e.message)
        }
    }, [])

    useEffect(() => {
        check()
    }, [check])


    if (error) return (
        <>
            <h1>При авторизации произошла ошибка</h1>
            <hr/>
            {error}
        </>
    )
    return (
        <h1>Проверка авторизаци...</h1>
    )
}


export default AuthPage