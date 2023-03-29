const path = require('path');
const express = require('express');
const router = express.Router();

const successPageController = require('../controllers/success')

router.get('/successfull' , successPageController.successPage)

module.exports = router;