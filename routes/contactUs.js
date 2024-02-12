const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const contactUsController = require('../controllers/contactUs');


router.get('/contactUs', contactUsController.getContactUsPage);


module.exports = router;
