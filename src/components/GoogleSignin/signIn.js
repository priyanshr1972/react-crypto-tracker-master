import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import Home from "./Home";


function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

return (
    <div>
        {value?<Home/>:
        <span style={{backgroundColor:"black",color:"white",border:"1px solid white",padding:'7px'}} id="logbt" onClick={handleClick}>SignIn</span>
        }
    </div>
);
}
export default SignIn;