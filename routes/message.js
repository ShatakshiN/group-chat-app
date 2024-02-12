const express = require('express');
const fs = require('fs');
const messageController = require('../controllers/messageController')

const router = express.Router();

router.post('/', messageController.postFirstPage);


router.get('/', messageController.getMessage); 

router.post('/message', messageController.postMessage); 

module.exports = router;
