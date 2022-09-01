const express = require('express');
const app = express()
const server = require('http').createServer(app)
const cors = require('cors');


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

io.on('connection',socket=>{

    // setInterval(()=>{
    //     if(data.length>0){
    //     io.emit('receive-data',data)
    //         data=[]
    // }
    // },1000)
    console.log(`connected with`,socket.id)
})

app.post('/sendData',(req,res)=>{
    
    io.emit('receive-data',req.body)
    res.sendStatus(200)
})

server.listen(process.env.PORT,()=>console.log(`server is live ${process.env.PORT}`))

