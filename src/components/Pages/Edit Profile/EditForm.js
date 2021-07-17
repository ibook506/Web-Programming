import {NavLink, useHistory, useRouteMatch} from 'react-router-dom'
import {updateUser} from '../../../api'


export const  EditForm = ({user, handleEditUser}) =>{
  const match = useRouteMatch()
  const history = useHistory()
  

  const onSubmit = (e) => {
    e.preventDefault()    
    updateUser(user, match.params.id)
   console.log(user)
    history.push("/dashboard")
  }


    return(
        <>
        {user ? (
                <div className='container edit-profile'>
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <form onSubmit={onSubmit} className="card needs-validation" noValidate>
            <h3 className='text-center text-danger'>Update Profile Details</h3>
            
            <input className="form-control form-control-lg" name='name'  onChange={handleEditUser} value={user.name} type="text" placeholder="Full Name" aria-label=".form-control-lg example" />
            <input className="form-control form-control-lg" name='email'  onChange={handleEditUser} value={user.email} type="email"  placeholder="E-mail" aria-label=".form-control-lg example" />
    
            <input className="form-control form-control-lg" name='phoneNo'  onChange={handleEditUser} value={user.phoneNo} type="number" placeholder="Phone Number" max='11' aria-label=".form-control-lg example" />
    
            <input className="form-control form-control-lg" name='address'  onChange={handleEditUser} value={user.address}type="address"  placeholder="Contact Address " aria-label=".form-control-lg example" />
            <div className='btn-controls'>
                 <NavLink to={`/profile/${user._id}`} type="button" className="btn btn-secondary">Close</NavLink>
                 <button  type="submit"  className="btn btn-success">Save Record </button>
                 </div>   
    </form>
    
        </div>
       
      </div>
      
    
            </div>
    
    
            
        ) : (<div> Loading... </div>)}
            
    </>
    

    )
   
}