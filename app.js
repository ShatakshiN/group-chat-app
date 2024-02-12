const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const loginRoute = require('./routes/login');
const msgRoute = require('./routes/message');
const contactRoute = require('./routes/contactUs');
const successRoute = require('./routes/success');
const pageNotFoundController = require('./controllers/404')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(loginRoute);

app.use(msgRoute);

app.use(contactRoute);

app.use(successRoute);

app.use('/',pageNotFoundController.pageNotFound)



app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})
