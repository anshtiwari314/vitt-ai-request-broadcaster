const express = require('express');
const app = express()
const server = require('http').createServer(app)
const cors = require('cors');
let PORT = process.env.PORT || 5000

app.use(cors({
    origin:'*'
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let io = require('socket.io')(server,{
    cors:{
        origin:'*'
    }
})

let data = []

// socket.on('connection',()=>{
//     setInterval(()=>{
//         if(data.length>0){
//         io.emit('receive-data',data)
//             data=[]
//     }
//     },1000)
//     console.log(`connected with`,socket.id)
// })

// app.get('/receiveData',(req,res)=>{
//     console.log("runned")
//     if(data.length > 0){
//     res.json(data)
//     data = []
//     }
//     else
//     res.json(null)

// })
app.post('/sendData',(req,res)=>{
    //to check responses coming
   console.log(req.body);
  io.emit('receive-data',req.body)
  //  data.push(req.body)
    res.sendStatus(200)
})

server.listen(PORT ,()=>console.log(`server is live ${PORT}`))

