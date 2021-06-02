const http = require('http')
const mongoose = require('mongoose')
const User = require('../backend/models/User')

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true})
mongoose.connection.once('open', ()=>{
    console.log('Mongodb connection established successfully');
}
    
)


const server = http.createServer((req, res) =>{})



const PORT = process.env.PORT || 4000

server.listen(PORT, ()=> console.log(`Server running on Port ${PORT}`))