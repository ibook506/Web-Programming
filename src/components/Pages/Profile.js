import React, { useEffect, useState } from 'react'
import {NavLink, useRouteMatch } from 'react-router-dom'
import './Profile.css'
import {getUserProfile } from '../../api'
import { FileUpload } from './FileUpload'

 const Profile = () =>{
    const match = useRouteMatch()
    const [user, setUser] = useState()

    useEffect(()=>{
       const fetchUser = async () =>{
           const user = await getUserProfile(match.params.id)
           setUser(user)
       }
       fetchUser()

    }, [match.params.id])



    return user ? (
        <main className='container col-md-5'>
            <section className='card col-md-auto section-profile'>
            <h3 className='text-center'>Profile Detail </h3>

  <div className="row justify-content-md-center">
    <div className="col">
      {/* Image Component Here */}

      <FileUpload />
    
    <div className='detail-section'>  
    <table className="table table-striped mt-3">
                   
                    <tbody>
                      
                          <tr>
                            <td><strong>Full Name</strong>
                            </td>
                            <td>
                              {user.name}
                            </td>
                          </tr>

                          <tr>
                          <td><strong>Email</strong></td>
                            <td>
                              {user.email}
                            </td>
                          </tr>
                          <tr>
                          <td><strong>Phone No: </strong></td>
                            <td>
                              {user.phoneNo}
                            </td>
                          </tr>

                          <tr>
                          <td><strong>Address</strong></td>
                            <td>
                              {user.address}
                            </td>
                          </tr>
                    </tbody>
                  </table>          

             <div className='btn-controls'>
             <NavLink to='/' type="button" className="btn btn-secondary">Close</NavLink>
             <NavLink to={`/edit-profile/${user._id}`}  type="button"  className="btn btn-danger">Edit Profile</NavLink>
             </div>
        </div>
    </div>
    
  </div>
</section>

</main>
    ): <div>Loading...</div>
}

export default Profile