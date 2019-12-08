const {addLoginData, addRegisterData} = require('../controllers/auth');
const express = require('express');
const authRouter = express.Router();

authRouter.post('/login', addLoginData);
authRouter.post('/register', addRegisterData);

module.exports = authRouter;