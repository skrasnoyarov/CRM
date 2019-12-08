const {createNewOrder, getAllOrders} = require('../controllers/order');
const express = require('express');
const orderRouter = express.Router();
const passport = require('passport');

orderRouter.get('/', passport.authenticate('jwt', {session: false}), getAllOrders);
orderRouter.post('/', passport.authenticate('jwt', {session: false}), createNewOrder);

module.exports = orderRouter;