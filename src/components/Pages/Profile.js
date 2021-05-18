import React from 'react'
import {NavLink } from 'react-router-dom'
import './Profile.css'


 const Profile = () =>{
    return (
        <main className='container'>
          <h3>Profile Details of @Name </h3>
            <section className='card col-md-8'>
             <p> <strong>Full Name:</strong></p>
             <p> <strong>Contact Address:</strong> </p>
             <p> <strong>Phone No:</strong></p>
             <p> <strong>Email: </strong></p>

             <NavLink to='/' type="button" className="btn btn-primary">Close</NavLink>
            </section>
        </main>
    )
}

export default Profile