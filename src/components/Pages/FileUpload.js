import {useState} from 'react'

export const FileUpload = () =>{
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Choose File')

    const onChange = (e) =>{
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }
    return(
        <>
        <form action='/upload' method="POST" encType='multipart/form-data'>

      <span className="justify-content-md-center"><img src='../../mautech1.png' alt='Mautech'/></span>
      <input className="form-control form-control-lg" name='image'  type="file"  placeholder={filename} aria-label=".form-control-lg example" onChange={onChange} />
      <button className='btn btn-primary'>Upload</button>
      </form>

      </>
        
    )
}