import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {createPost} from '../../../api'

const CreatePost = ()=>{
    const history = useHistory()
    

    const [body,setBody] = useState("")
    
   const onSubmit = (e)=>{
       e.preventDefault()
       console.log(body)
      createPost({body});
      history.push('/createpost')
       
   }
 

   return(

    <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <form onSubmit={onSubmit} className="card needs-validation" noValidate>
            <h3 className='text-center text-danger'>Post </h3>
            
            
            <input autoComplete="off" className="form-control form-control-lg" name='body'  onChange={(e)=>setBody(e.target.value)}  value={body} type="text"  placeholder="post... " aria-label=".form-control-lg example" />
    
    
            <div className='btn-controls'>
                 
                 <button  type="submit"  className="btn btn-primary">Post </button>
                 </div>   
    </form>
    
        </div>
       
      </div>












      
   )
}


export default CreatePost