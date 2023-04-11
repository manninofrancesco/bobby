const express = require('express');
const router = express.Router();
const standupController = require('../controllers/standup.controller')

router.get('/GetStandupTable', standupController.getStandupTable);

module.exports = router;