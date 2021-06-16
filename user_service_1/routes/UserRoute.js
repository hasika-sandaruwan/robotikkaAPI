const express = require('express');
const userController =  require('../controllers/UserController');

const router = express.Router();

router.post('/registerUser',userController.registerUser);

module.exports= router;
