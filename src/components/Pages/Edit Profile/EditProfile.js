import React, { useEffect, useState } from 'react'
import { useRouteMatch} from 'react-router-dom'
import './EditProfile.css'
import {getUserEditProfile} from '../../../api'
import { EditForm } from './EditForm'

const EditProfile = () =>{
  const match = useRouteMatch()
  const userId = match.params.id;

  const newUser = {
    name: '',
    email: '',
    address: '',
    phoneNo: ''
  }
  const [user, setUser] = useState(newUser);

  const handleEditUser = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
        [name]: value,
    })
    
}



  useEffect(() => {
       const fetchUser = async () => {
      const user = await getUserEditProfile(userId)
      setUser(user)
    }
    fetchUser()
  }, [userId]);

  


 
    return (
       
         <EditForm handleEditUser={handleEditUser} user={user} />
    )
    
}

export default EditProfile