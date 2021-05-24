import React from 'react'
import {NavLink} from 'react-router-dom'
import './EditProfile.css'

const EditProfile = () =>{
    return (
        <>
        <div className='container edit-profile '>
        <form className="card col-md-8 needs-validation" noValidate>
        <h3 className='text-center text-danger'>Update Profile Details</h3>
        <input className="form-control form-control-lg" type="text" placeholder="Full Name" aria-label=".form-control-lg example" />
        <input className="form-control form-control-lg" type="email" placeholder="E-mail" aria-label=".form-control-lg example" />

        <input className="form-control form-control-lg" type="number" placeholder="Phone Number" aria-label=".form-control-lg example" />

        <input className="form-control form-control-lg" type="address" placeholder="Contact Address " aria-label=".form-control-lg example" />


  
        <div className='btn-controls'>
             <NavLink to='/' type="button" className="btn btn-primary">Close</NavLink>
             <NavLink to='/edit-profile'  type="button"  className="btn btn-danger">Save Records </NavLink>
             </div>

             
</form>


        </div>



        </>
    )
}

export default EditProfile