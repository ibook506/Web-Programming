import React,{useState,useEffect} from 'react'
import {useHistory, NavLink} from 'react-router-dom'

const CreatePost = ()=>{
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    
    const [url,setUrl] = useState("")
    useEffect(()=>{
       if(url){
        fetch("/createpost",{
            method:"POST",
            headers:{
                "Accept": "application/json",
                "Content-Type":"application/json",
                
            },
            body:JSON.stringify({
                title,
                body
            })
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.error){
             console.log({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               console.log({html:"Created post Successfully",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    },[url])
  
   const onSubmit = ()=>{
       fetch("/createpost",{
           method:"post",
           body: JSON.stringify({
            title,
            body
        })
       })
       
   }
 

   return(

    <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <form onSubmit={onSubmit} className="card needs-validation" noValidate>
            <h3 className='text-center text-danger'>Post </h3>
            
            <input className="form-control form-control-lg" name='title'  onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="title" aria-label=".form-control-lg example" />
            <input className="form-control form-control-lg" name='body'  onChange={(e)=>setBody(e.target.value)}  value={body} type="text"  placeholder="post... " aria-label=".form-control-lg example" />
    
    
            <div className='btn-controls'>
                 <NavLink to={`/`} type="button" className="btn btn-secondary">Close</NavLink>
                 <button  type="submit"  className="btn btn-success">Save Record </button>
                 </div>   
    </form>
    
        </div>
       
      </div>












      
   )
}


export default CreatePost