const express = require('express');
const app = express()
const server = require('http').createServer(app)
const cors = require('cors');
const EventEmitter = require('events');

let PORT = process.env.PORT || 5002

let eventEmitter = new EventEmitter()

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


let data = []
let users = {}

eventEmitter.on('send-req-to-frontend',(data)=>{
    console.log('send-req-to-frontend triggers')
})

io.on('connection',(socket)=>{
    let sessionid 

    
    socket.on('connected',(sessionid)=>{
        
        console.log('someone connected with sessionid',sessionid,socket.id)

        socket.join(sessionid)
        //users[sessionid] = socket.id
    })

    // eventEmitter.on('send-req-to-frontend',(data)=>{
    //     console.log('before broadcasting',roomId,data)
    //     //broadcast to one room id
    //     socket.broadcast.to(roomId).emit('receive-data', data);
    // })
    
    
    socket.on('disconnect',()=>{
        console.log('disconnect user',socket.id)
        
    })
    console.log('new connection',socket.id)

    
    
})

// socket.on('connection',()=>{
//     // setInterval(()=>{
//     //     if(data.length>0){
//     //     io.emit('receive-data',data)
//     //         data=[]
//     // }
//     // },1000)
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
   
   let data = req.body

   console.log(date.toTimeString(),date.toDateString(),data.sessionid,users[data.sessionid]);
   io.to(data.sessionid).emit('receive-data',data)
    //io.emit('receive-data',req.body)
    //  data.push(req.body) 
   res.sendStatus(200)

})

server.listen(PORT ,()=>console.log(`server is live ${PORT}`))

