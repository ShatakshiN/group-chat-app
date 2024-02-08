const express = require('express');

const router = express.Router();

router.get("/login", (req,res,next)=>{
    console.log(1);
    res.send( `
        <form action="/" onsubmit="localStorage.setItem('uname',document.getElementById('uname').value)" method="post">
           <label>Username</label><br>
           <input type="text" id="uname" name="uname"><br>
           <button type="submit">Login</button> 
        </form>
    `)
});

module.exports = router;
