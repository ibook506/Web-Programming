import React from 'react'
import { NavLink } from 'react-router-dom';
//import './Loginstyle.css'
import './Profile.css'

 const Login = () =>{

    

        
    return (
        <>        
        <main className='container'>
            
        <section>
                <div className='container edit-profile'>
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <form  className="card needs-validation" noValidate>
            <h3 className='text-center text-danger'>Login</h3>
            
            
            <input className="form-control form-control-lg" name='email'  type="email"  placeholder="E-mail" aria-label=".form-control-lg example" />
    
            <input className="form-control form-control-lg" name='password'  type="password" placeholder="Password" aria-label=".form-control-lg example" />
    
            
            <div className='btn-controls'>
              
                 <button  type="submit"  className="btn btn-danger btn-wide mb-2"> Login  </button>
                 <p>Don't have an account?  <a href='/signup'> Signup </a> </p>  
                 
                 </div>   
    </form>
    
        </div>
       
      </div>
      
    
            </div>
                

                
        </section>
            
        </main>

        </>
    )
}

export default Login