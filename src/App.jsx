// import { useState } from 'react'

import { useState } from "react"
import Signin from "./Signin"
import Reset from "./Reset"


function App() {
  const[form,setform]=useState("sigin")

  return (
    
 <>
 <div className="App">
    <h1>Welcome</h1>
    {form==="sigin" ?<Signin/> :<Reset/>}
    <button onClick={()=>{setform(form==="sigin" ? "reset":"sigin")}}>{form==="sigin" ? "Forgot Password":"Back to login"}</button>
 </div>
 </>
  )
}

export default App
