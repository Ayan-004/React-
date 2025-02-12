import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentcation = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState()
    const authStatus = useSelector(status => state.auth.status)

    useEffect(() => {
        if(authentcation && authStatus !== authentcation) {
            navigate("/login")
        } else if(!authentcation && authStatus !== authentcation) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentcation])
    return loader ? <h1>Loading...</h1> : <>{children}</>
}
