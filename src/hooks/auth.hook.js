import React, {useCallback, useEffect, useState} from "react";
import {loadData} from "../redux/actions";
import {useDispatch} from "react-redux";
import {useHttp} from "./http.hooks";

const storageGlobal = 'YSPEX'

export const useAuth = () => {
    const dispatch = useDispatch()
    const {request} = useHttp()
    const [info, setInfo] = useState('')
    const [ready, setReady] = useState(null)


    const login = useCallback((data) => {
        setInfo(data)
        localStorage.setItem(storageGlobal, JSON.stringify(data))
    }, [])

    const logout = useCallback(() => {
        setInfo(null)

        localStorage.removeItem(storageGlobal)
    }, [])

    const check = useCallback(async (data) => {
        try {
            const res = await request(`/${data.company}/${data.name}/${data.ticket}`, {
                headers: {'Authorization': `Token ${data.token}`}
            })
            dispatch(loadData(res))
            if (res.bid) {
                const info = {
                    company: data.company,
                    token: data.token,
                    name: data.name,
                    ticket: data.ticket,
                }
                login(info)
                dispatch(loadData(res))
            }
            setReady(true)
        } catch (e) {
            console.log(e)
            setInfo(null)
            setReady(true)
        }
    }, [])


    useEffect(() => {
        const tokenjson = localStorage.getItem(storageGlobal)

        const data = JSON.parse(tokenjson)

        if (data && data.token) {
            check(data)
        } else{
            setReady(true)
        }
    }, [])

    // const checkToken = useCallback(async ()=>{
    //     if (!token){return}
    //     setReady(false)
    //     const res = await request(`${state.SERVER.url}/api/auth/token`, 'POST', {token})
    //     if (res.exit){
    //         logout()
    //         setReady(true)
    //         return
    //     }
    //     setName(res.login)
    //     setRole(res.role)
    //     setReady(true)
    //     // console.log(res)
    // },[])

    // useEffect(()=>{
    //     checkToken()
    // }, [checkToken])


    return {login, logout, info, ready}
}