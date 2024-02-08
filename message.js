const express = require('express');
const fs = require('fs');
const router = express.Router();

//This route handles the POST request when the login form is submitted. It renders a form to submit messages, and it retrieves the stored username from localStorage to populate a hidden input field.
router.post('/', (req,res,next)=>{
    //console.log(2);
        res.send(`<form action="/message" method="post" onsubmit="document.getElementById('uname').value=localStorage.getItem('uname')">
        <input type="hidden" id="uname" name="uname" ><br>
        <label>Message</label><input type="text" id="message" name="message"> 
        <button type="submit">Login</button> 
        </form>`)
    //})
});

//This route reads the content of 'chatAppData.txt' and displays it along with the form to submit messages. If the file read fails, it sets a default message indicating that the chat is empty.
router.get('/', (req,res,next)=>{
    console.log(3)
    fs.readFile('chatAppData.txt',(err,data)=>{
        if(err)
        { 
          console.log(err);
          data= "chat is empty";
        }
        res.send(`${data}<form action="/message" method="post" onsubmit="document.getElementById('uname').value=localStorage.getItem('uname')">
        <input type="hidden" id="uname" name="uname" ><br>
        Message:<input type="text" id="message" name="message"> 
        <button type="submit">Login</button> 
         </form>`)
    })

}); 

//This route handles the submission of messages. It reads the username and message from the request body, constructs a string, and appends it to the 'chatAppData.txt' file. After writing the message, it redirects the user back to the main chat page.
router.post('/message',(req, res) => {
    console.log(4);
    //console.log(req.body);
    const uname= req.body.uname;
    const message= req.body.message;
    const str= `${uname}: ${message} `;

    fs.writeFile('chatAppData.txt',str,{flag:'a'},(error)=>{
        if(error) 
          console.log(error);
        else
            res.redirect('/');
    })


}); 

module.exports = router;
