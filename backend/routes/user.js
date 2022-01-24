const express = require('express');
const router = express.Router();

// Import of the controller user to manage actions
const userCtrl = require('../controllers/user');

// /api/auth/routeActionController.
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// Allows to use user.js from the routes directory in app.js at the base of the project
module.exports = router;