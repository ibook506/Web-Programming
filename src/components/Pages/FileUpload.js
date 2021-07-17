import {useState} from 'react'
import axios from 'axios'

export const FileUpload = () =>{
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Choose File')
    const [uploadedFile, setUploadedFile] = useState({})

    const onChange = (e) =>{
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }

    const onSubmit = async (e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', file)

        try{
            const res = await axios.post(`http://localhost:4000/upload`, formData, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
                
              })  
              const {filename, filepath} = res.data

              setUploadedFile({filename, filepath})
              console.log(uploadedFile)

        }catch(err){
            if(err.response.status ===500){
                console.log('There was a problem with the server')
            }else{
                console.log(err.response.data.msg)
            }

        }
    }
    return(
        <>
        <form onSubmit={onSubmit}>

      <span className="justify-content-md-center"><img src='../../mautech1.png' alt='Mautech'/></span>
      <input className="form-control form-control-lg" name='image'  type="file"  placeholder={filename} aria-label=".form-control-lg example" onChange={onChange} />
      <button className='btn btn-primary text-center'>Upload</button>
      </form>

      </>
        
    )
}