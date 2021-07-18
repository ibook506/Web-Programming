import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {createPost} from '../../../api'

const CreatePost = ()=>{
    const history = useHistory()
    

  const [body,setBody] = useState("")  
   const onSubmit = (e)=>{
      e.preventDefault()
      createPost({body});
      setBody("")
      history.push('/')

   }
 

   return(

    <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <form onSubmit={onSubmit} className="card needs-validation" noValidate>
            <h3 className='text-center text-danger'>Post Here </h3>
            
            
            <input className="form-control form-control-lg" name='body' required  onChange={(e)=>setBody(e.target.value)}  value={body} type="text"  placeholder="What's on your mind..." aria-label=".form-control-lg example" />
    
    
            <div className='btn-controls'>
                 
                 <button  type="submit"  className="btn btn-lg btn-secondary"> Post Now</button>
                 </div>   
    </form>
    
        </div>
       
      </div>












      
   )
}


export default CreatePost