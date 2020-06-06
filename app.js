const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} =require('./pass')


mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongoose yeahh!!!!!!!!")
})
mongoose.connection.on('error',(err)=>{
    console.log(" err while connecting",err)

})

require('./models/user')
require('./models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

//app.get('/',(req,res)=>{
    //console.log("hi")
    //res.send("hello world!")
//})
app.listen(PORT ,()=>{
    console.log("srever started",PORT)
})
