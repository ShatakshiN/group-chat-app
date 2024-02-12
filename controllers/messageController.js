const path = require('path');
const fs = require('fs')

exports.postFirstPage = (req,res,next)=>{
    console.log(2);
    //fs.readFile('chatAppData.txt',(err,data)=>{
        /* if(err)
        { 
          console.log(err);
          data= "chat is empty";

        } */
        res.send(`<form action="/message" method="post" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="hidden" id="username" name="username" ><br>
        <label>Message</label><input type="text" id="message" name="message"> 
        <button type="submit">Login</button> 
        </form>`)
    //})
};

exports.getMessage = (req,res,next)=>{
    console.log(3)
    fs.readFile('chatAppData.txt',(err,data)=>{
        if(err)
        { 
          console.log(err);
          data= "chat is empty";
        }
        res.send(`${data}<form action="/message" method="post" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="hidden" id="username" name="username" ><br>
        Message:<input type="text" id="message" name="message"> 
        <button type="submit">Login</button> 
         </form>`)
    })

};

exports.postMessage = (req, res) => {
    console.log(4);
    //console.log(req.body);
    const uname= req.body.username;
    const message= req.body.message;
    const str= `${uname}: ${message} `;

    fs.writeFile('chatAppData.txt',str,{flag:'a'},(error)=>{
        if(error) 
          console.log(error);
        else
            res.redirect('/');
    })


};
