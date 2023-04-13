const express = require('express');
const router = express.Router();
const standupController = require('../controllers/standup.controller.js')

router.get('/GetStandupTable', standupController.getStandupTable);

module.exports = router;