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
        <section>
                <h1>Login Page</h1>
                <div id= "wrapper">
                <div class="container"> 
<div class="box-1"> 
<div class="content-holder"> 
<h2>Hello!</h2> 
<p>Don't hava an account? </p> 
<button class="button-1" onclick="signup()"><a href="SignUp.html">Sign up</a></button>
</div>
</div> 

</div>


<div class="box-2">
<div class="login-form-container"> 
<h1>Login</h1> 
<input type="text" placeholder="Username" class="input-field" /> 
<br />
<input type="password" placeholder="Password" class="input-field" /> 
<br/>
 <input id="check" type="checkbox" class="check" checked />
 <label for="check">
<span class="icon"></span> Keep me Logged in</label> 
<br/>
<button class="login-button" type="button">Login</button>
</div>
</div>
</div>
                
        </section>
            
        </main>

        </>
    )
}

export default Login