import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {getUsers} from '../../api'


 const Dashboard = () =>{
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const fetchUser = async () =>{
            const users = await getUsers()
            setUsers(users)
        }
 
        fetchUser()
 
     }, [])
 
 console.log(users)
 
    return (
        <main className='container'>
            <section>
                <h1>Dashboard Page</h1>
                
                    <table className="table table-striped mt-3">
                    <thead>
                      <tr>
                        <th>Details</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        users.map(user => (
                          <tr key={user._id}>
                            <td>
                              <Link to={`/profile/${user._id}`}>{user.name}</Link>
                            </td>
                            <td>
                              {user.email}
                            </td>
                            <td>
                              {user.address}
                            </td>
                            <td>
                              <Link to={`/edit-profile/${user._id}`}>Edit</Link>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                
            </section>
        
        </main>
    )
}

export default Dashboard