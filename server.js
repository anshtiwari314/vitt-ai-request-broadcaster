const express = require('express');
const app = express()
const server = require('http').createServer(app)
const cors = require('cors');
let PORT = process.env.PORT || 5000

app.use(cors({
    origin:'*'
}))
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({limit:'10mb',extended:true}))

let io = require('socket.io')(server,{
    cors:{
        origin:'*'
    }
})



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

let data = []
let users = {}

// app.post('/sendData',(req,res)=>{
//     console.log('req',req.body)

// })

// io.on('connection',(socket)=>{
    
//     socket.on('connected',(userId)=>{
//         console.log('someone connected',userId)
//     })

//     socket.on('join-room',(roomId,userId)=>{
//         users[userId].socket = socket    
//     })

//     socket.on('disconnect', () =>{
//         //delete users[userId] 
//         console.log('someone disconnect',userId,'\n\n\n')
//         //socket.broadcast.to(roomId).emit('user-disconnected', userId);
//      })
// })

app.post('/sendData',(req,res)=>{
    //to check responses coming
    let date = new Date();
    
   console.log(date.toTimeString(),date.toDateString(),req.body);
  io.emit('receive-data',req.body)
  //  data.push(req.body)
    res.sendStatus(200)
})

server.listen(PORT ,()=>console.log(`server is live ${PORT}`))

