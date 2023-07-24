const express = require("express");

const connectToDB = require("./config/db")

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
connectToDB();

const userRoutes = require("./routes/userRoutes")
app.use('/', userRoutes)



app.get('/', (req, res)=>{
    res.send("Hi this is my first server")
})

app.get('/sahil', (req, res)=>{
    res.send("This is Sahil Thakur")
})

app.get('/instagram', (req, res)=>{
    res.json({
        status:true,
        message:"Hi response from instagram in json working."
    })
})

module.exports = app;