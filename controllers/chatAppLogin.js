const path = require('path');
const rootDir = require('../util/path')

exports.getLoginPage = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','login.html'))  
}
