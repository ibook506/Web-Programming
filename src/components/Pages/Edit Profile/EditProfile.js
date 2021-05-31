import React, { useEffect, useState } from 'react'
import { useRouteMatch} from 'react-router-dom'
import './EditProfile.css'
import {getUserEditProfile} from '../../../api'
import { EditForm } from './EditForm'

const EditProfile = () =>{
  const match = useRouteMatch()

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
      const userId = await getUserEditProfile(match.params.id)
      setUser(userId)
    }
    fetchUser()
  }, [match.params.id]);

  


 
    return (
       
         <EditForm handleEditUser={handleEditUser} user={user} />
    )
    
}

export default EditProfile