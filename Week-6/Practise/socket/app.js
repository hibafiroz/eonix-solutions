const express = require('express')
const {Server} = require('socket.io')
const http=require('http')
const app = express()
app.set('view engine', 'ejs')
const userList=require('./utils/userList')
const server = http.createServer(app)
const io=new Server(server)

app.get('/', (req, res) => {
    res.render('studentList', {
        studentList:userList,
        currentUser:req.user
    })
})

app.get('/chat/:currentUserID/:otherUserID', (req, res) => {
    const currentUserID = parseInt(req.params.currentUserID, 10)
    const otherUserID = parseInt(req.params.otherUserID, 10)
    const currentUser = userList.find(u => u.id === currentUserID)
    const otherUser = userList.find(u => u.id === otherUserID)
    if (!currentUser || !otherUser) {
        res.status(404).send('No user found')
    }
    const roomName=[currentUserID,otherUserID].sort((a,b)=>a-b).join('-')
    res.render('client', { currentUser, otherUser, roomName })
})

io.on('connection', (socket) => {
    socket.on('joinRoom', room => {
        socket.join(room)
    })
    socket.on('message', ({ room, msg, from })=> {
        io.to(room).emit('message',{msg,from})
    })
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(3002,()=>{console.log('http://localhost:3002')})
