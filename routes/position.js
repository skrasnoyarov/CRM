const {
    changePositionById,
    createNewPosition,
    getCategoryById,
    removePositionById
} = require('../controllers/position');
const express = require('express');
const passport = require('passport');
const positionRouter = express.Router();

positionRouter.get('/:categoryId', passport.authenticate('jwt', {session: false}), getCategoryById);
positionRouter.post('/', passport.authenticate('jwt', {session: false}), createNewPosition);
positionRouter.patch('/:id', passport.authenticate('jwt', {session: false}), changePositionById);
positionRouter.delete('/:id', passport.authenticate('jwt', {session: false}), removePositionById);

module.exports = positionRouter;
