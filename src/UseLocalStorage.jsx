import React from 'react'
import { useState,useEffect } from 'react'
const UseLocalStorage = () => {
    const[email,setEmail]=useState("")
    useEffect(() => {
    let email=localStorage.getItem("email")
    if(email){
        setEmail(email)
    }
    }, [])
    useEffect(()=>{
        localStorage.setItem("email",email)
    },[email])
    return{email,setEmail}
}

export default UseLocalStorage
