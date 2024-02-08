const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const loginRoute = require('./login');
const msgRoute = require('./message');

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoute);

app.use(msgRoute);

app.use('/',(req,res)=>{
    console.log('this always runs');
    res.send(`404 NOT FOUND`);
})


app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})
