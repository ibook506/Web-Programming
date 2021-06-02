const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const User = require('../backend/models/User')

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
        user.update({name,email,phoneNo,address})
          .then((user) => {  
            res.json(user);
            res.redirect(`/profile/${user.id}`)
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

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
