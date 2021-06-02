import React from 'react'
import './Loginstyle.css'


 const Login = () =>{

    function signup() { 
        document.querySelector(".login-form-container").style.cssText = "display: none;";  
        document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(56, 189, 149), rgb(28, 139, 106));"; 
        document.querySelector(".button-1").style.cssText = "display: none";
        }

        
    return (
        <>
        <main className='container'>
            
        </main>

        </>
    )
}

export default Login