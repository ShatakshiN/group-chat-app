const express = require('express');
const router = express.Router();
const adminController = require('../controllers/chatAppLogin');


router.get("/login",adminController.getLoginPage);

module.exports = router;
