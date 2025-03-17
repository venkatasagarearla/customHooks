import React from 'react'
import { useState,useEffect } from 'react'

const Signin = () => {
  const [email,setEmail]=useState("")
  const[password,setpassword]=useState("")

  useEffect(()=>{
    let email= localStorage.getItem("email")
    if(email){
     setEmail(email)
    }
 
   },[])
  useEffect(() => {
   localStorage.setItem("email",email);
   
  }, [email])

  
  
  return(
    <>
    <div>
        <label>Enter Email</label>
        <input type="email" value={email}  name='email'placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/>
        <br></br>
        <label>Enter password</label>
        <input type="password" value={password} placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)}/>
        <br/>
        <button type="submit">login</button>

    <br></br>
  
  
    </div>
    
    </>
  )

}

export default Signin
