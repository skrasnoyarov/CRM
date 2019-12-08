const express = require('express');
const categoryRouter = express.Router();
const {
    changeCategoryById,
    createNewCategory,
    getAllCategories,
    getCategoryById,
    removeCategoryById
} = require('../controllers/category');
const passport = require('passport');
const upload = require('../middleware/upload');

categoryRouter.get('/', passport.authenticate('jwt', {session: false}), getAllCategories); // passport.authenticate('jwt', {session: false}) проверяет что зашел именно под нужным пользователем
categoryRouter.get('/:id', passport.authenticate('jwt', {session: false}), getCategoryById);
categoryRouter.delete('/:id', passport.authenticate('jwt', {session: false}), removeCategoryById);
categoryRouter.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), createNewCategory);
categoryRouter.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), changeCategoryById);

module.exports = categoryRouter;