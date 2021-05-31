import React, { useEffect, useState } from 'react'
import {NavLink, useHistory, useRouteMatch} from 'react-router-dom'
import './EditProfile.css'
import {updateUser, getUserEditProfile} from '../../../api'

const EditProfile = () =>{
  const match = useRouteMatch()
  const [user, setUser] = useState();
  const history = useHistory()

  useEffect(() => {
    const fetchUser = async () => {
      const userId = await getUserEditProfile(match.params.id)
      setUser(userId)
    }
    fetchUser()
  }, [match.params.id]);

  const onSubmit = async (data) => {
   await updateUser(data, match.params.id)
    history.push("/")
  }

  

    return (
       user ? (
        <>
        <div className='container edit-profile'>
  <div className="row justify-content-md-center">
    <div className="col-md-auto">
      <form onSubmit={onSubmit} className="card needs-validation" noValidate>
        <h3 className='text-center text-danger'>Update Profile Details</h3>
        
        <input className="form-control form-control-lg" type="text" placeholder="Full Name" aria-label=".form-control-lg example" />
        <input className="form-control form-control-lg" type="email"  placeholder="E-mail" aria-label=".form-control-lg example" />

        <input className="form-control form-control-lg" type="number" placeholder="Phone Number" aria-label=".form-control-lg example" />

        <input className="form-control form-control-lg" type="address"  placeholder="Contact Address " aria-label=".form-control-lg example" />

        

        <div className='btn-controls'>
             <NavLink to={`/profile/${user._id}`} type="button" className="btn btn-secondary">Close</NavLink>
             <button  type="submit"  className="btn btn-success">Save Record </button>
             </div>   
</form>

    </div>
   
  </div>
  

        </div>

        </>

      ): <div>Loading</div>
        
      
    )
    
}

export default EditProfile