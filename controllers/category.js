const Category = require('../models/Category');
const Position = require('../models/Position');
const showError = require('../utils/errorsHeandler');

const changeCategoryById = async (request, response) => {
    const categoryUpdated = {};
    console.log(request, 'request')
    try {
        categoryUpdated.name = request.body.name;
        categoryUpdated.imageSrc = request.file ? request.file.path : '';    

        const category = await Category.findOneAndUpdate(
            {_id: request.params.id},
            {$set: categoryUpdated},
            {new: true}
        );

        return response.status(200).json(category);
    } catch (e) {
        showError(response, e);
    }
};

const createNewCategory = async (request, response) => {
    console.log(request.body)
    try {
        const category = await new Category({
            imageSrc: request.file ? request.file.path : '',
            name: request.body.name,
            user: request.user.id
        }).save();

        return response.status(201).json(category);
    } catch (e) {
        showError(response, e);
    }
};

const getAllCategories = async (request, response) => {
    try {
        const categories = await Category.find({user: request.user.id});
        return response.status(200).json(categories);
    } catch (e) {
        showError(response, e);
    }
};

const getCategoryById = async (request, response) => {
    try {
        const category = await Category.findById(request.params.id);
        return response.status(200).json(category);
    } catch (e) {
        showError(response, e);
    }
};

const removeCategoryById = async (request, response) => {
    try {
        await Category.remove({_id: request.params.id});
        await Position.remove({category: request.params.id});

        return response.status(200).json({message: 'Category delete!'});
    } catch (e) {
        showError(response, e);
    }
};



module.exports = {
    changeCategoryById,
    createNewCategory,
    getAllCategories,
    getCategoryById,
    removeCategoryById
};