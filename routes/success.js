const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const successController = require('../controllers/success');

router.post('/success',successController.postSuccess );

module.exports = router;
