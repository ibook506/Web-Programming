import React from 'react'
//import './SignUpstyle.css'


 const SignUp = () =>{
    return (
        <>
        <main className='container'>
            <section>
            <div className='container edit-profile col-md-5'>
      <div className="row justify-content-md-center">
        <div >
          <form  className="card needs-validation" noValidate>
            <h3 className='text-center text-danger'>Sign Up </h3>
            
            <input className="form-control form-control-lg" name='name'   type="text" placeholder="Full Name" aria-label=".form-control-lg example" />
            <input className="form-control form-control-lg" name='email'    type="email"  placeholder="E-mail" aria-label=".form-control-lg example" />

            <input className="form-control form-control-lg" name='password'    type="password"  placeholder="Password " aria-label=".form-control-lg example" />
    
            <input className="form-control form-control-lg" name='phoneNo'    type="number" placeholder="Phone Number" max='11' aria-label=".form-control-lg example" />
    
            <input className="form-control form-control-lg" name='address'  type="address"  placeholder="Contact Address " aria-label=".form-control-lg example" />
            <div className='btn-controls'>
            <button  type="submit"  className="btn btn-danger btn-wide mb-2"> Sign Up  </button>
                 <p>Already have an account?  <a href='/login'> Login </a> </p>  
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

export default SignUp