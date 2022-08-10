const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./route/pages')
const path = require('path')
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'Public')))
app.use('/',route);

mongoose.connect("mongodb+srv://kstubbs00:i4ymEplAgqMZQZrB@cluster0.db6mj0b.mongodb.net/portfolioDB", {useNewURLParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(process.env.PORT||3000, ()=> {
        console.log("server is running on 3000")
    })
})

//i4ymEplAgqMZQZrB  passsword auto generated