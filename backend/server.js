const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const User = require('../backend/models/User')
const fileupload = require('express-fileupload')

//process.config(require('./config/config.env'))
//process.config({path: './config/config.env'})

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true})
mongoose.connection.once('open', ()=>{
    console.log('Mongodb connection established successfully');
}
    
)

const PORT = process.env.PORT || 4000;

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileupload())
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) =>{
    User.find((err, users)=>{
        if(err){
            console.log(err);
        }else{
            res.json(users)
        }
    }) 

})

app.post('/create', (req, res) =>{
    const user = new User(req.body)
    user.save().then((user) =>{
        res.json(user)
    }).catch((err) =>{
        res.status(500).send(err.message)
    })
})

app.get('/profile/:id', (req, res) =>{
    const id = req.params.id;
    User.findById(id, (err, user) =>{
        if(err){
            console.log(err)
        }else{
            res.json(user)

        }
        
    })
})


app.get('/edit-profile/:id', (req, res) =>{
    const id = req.params.id;
    User.findById(id, (err, user) =>{
        if(err){
            console.log(err)
        }else{
            res.json(user)

        }
        
    })
})


app.put("/edit-profile/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id, (err, user) => {
      if (!user) {
        res.status(404).send("Todo not found");
      } else {
        const {name,email,phoneNo,address} = req.body;
        user.updateOne({name,email,phoneNo,address})
          .then((user) => {  
            res.json(user);
            res.redirect(`/profile/${user.id}`)
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

  app.post('/upload', (req, res) =>{
      if(req.files == null){
          res.status(400).json({msg: 'No file uploaded'})
      }

      const file = req.files.file;
      file.mv(`${__dirname}/public/uploads/${file.name}`, err =>{
          if(err){
              console.error(err)
              return res.status(500).send(err)
          }

          res.json({fileName: file.name, filepath: `/uploads/${file.name}`})
      })

      
  })


  app.post('/createpost', (req,res)=>{
    const {title,body} = req.body 
    if(!title || !body){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    //req.user.password = undefined
    const post = new Post({
        title,
        body,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})






  /*
  
  const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "Images")
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname + " "+ Date.now()+ "_" + file.originalname)
    }
})

const upload = multer({storage: storage})


  app.get('/upload', (req, res) =>{
      res.send('Image Upload')
  })

  app.post('/upload', upload.single('image'),  (req, res) =>{
      res.send('image Uploaded')
  })

  
*/

app.listen(PORT, ()=>{
    console.log(`Server running on mode on port ${PORT}`);
})
