const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');



// Middleware that manages permissions on our app.
const multer = require('../middleware/multer-config');

// Import of the controller to make the link with the route call.
const sauceCtrl = require('../controllers/sauce');


//* const modifySauceCtrl = require("../controllers/modifySauce");

// /api/sauces/routeActionController.
router.get('/', auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.updateSauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeDislikeSauce);

// Allows you to use sauce.js from the routes.directory in app.js at the base of the project.
module.exports = router;