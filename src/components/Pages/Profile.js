import React from 'react'
import {NavLink } from 'react-router-dom'
import './Profile.css'


 const Profile = () =>{
    return (
        <main className='container col-md-7'>
            <section className='card col-md-auto section-profile'>
            <h3 className='text-center'>Profile Details of @Name </h3>

  <div className="row justify-content-md-center">
    <div className="col-auto">
    <img src='../../mautech1.png' alt='Mautech'/>
    </div>
    <div className="col">
    <div className='detail-section'>            
            <p> <strong>Full Name:</strong></p>
             <p> <strong>Contact Address:</strong> </p>
             <p> <strong>Phone No:</strong></p>
             <p> <strong>Email: </strong></p>

             <div className='btn-controls'>
             <NavLink to='/' type="button" className="btn btn-secondary">Close</NavLink>
             <NavLink to='/edit-profile'  type="button"  className="btn btn-danger">Edit Profile</NavLink>
             </div>
        </div>
    </div>
    
  </div>
  
            </section>

            
  
        </main>
    )
}

export default Profile