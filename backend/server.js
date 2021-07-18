const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const User = require('../backend/models/User')
const Post = require('../backend/models/Post')
const fileupload = require('express-fileupload')

//process.config(require('./config/config.env'))
//process.config({path: './config/config.env'})
const url = 'mongodb://localhost:27017/'

mongoose.connect(url, {useNewUrlParser: true})
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
    try{
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
        
    }catch (err){
        console.log(err)
    }
    
  });

  app.post('/upload', (req, res) =>{
      try{
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
      }catch(err){
          console.log(err)
      }

      
  })


  app.post('/createpost', (req,res)=>{
    const {body} = req.body 
    
    //req.user.password = undefined
    const newPost = new Post({body});
    return newPost.save();
})

app.get('/posts', (req, res) =>{
    Post.find((err, post)=>{
        if(err){
            console.log(err);
        }else{
            res.json(post)
        }
    }) 
   

})






  
app.listen(PORT, ()=>{
    console.log(`Server running on mode on port ${PORT}`);
})