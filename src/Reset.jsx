import React from 'react'
import { useState } from 'react'
import UseLocalStorage from './UseLocalStorage'
// import { useEffect } from 'react'
// import { useState } from 'react'

const Reset = () => {

    // const[email,setEmail]=useState("")
    // useEffect(() => {
    // let email=  localStorage.getItem("email")
    // if(email){
    //     setEmail(email)
    // }
    // }, [])
    // useEffect(()=>{
    //     localStorage.setItem("email",email)
    // },[email])
    const{email,setEmail}=UseLocalStorage();

  return (
    <div>
        <h1>Reset your password</h1>
      <input type='email' placeholder='enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br/>
      <button type="submit">continue</button>
    </div>
  )
}

export default Reset
