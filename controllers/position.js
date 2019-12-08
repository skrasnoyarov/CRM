const showError = require('../utils/errorsHeandler');
const Position = require('../models/Position');

const changePositionById = async (request, response) => {
    try {
        const position = await Position.findOneAndUpdate(
            {_id: request.params.id},
            {$set: request.body}, // Будем что то изменять в объекте
            {new: true}); // Обновит запись и вернет ее

        return response.status(200).json(position);
    } catch (e) {
        showError(response, e);
    }
};

const createNewPosition = async (request, response) => {
    try {
        const position = await new Position({
            category: request.body.category,
            cost: request.body.cost,
            name: request.body.name,
            user: request.user.id
        }).save();

        return response.status(201).json(position);
    } catch (e) {
        showError(response, e);
    }
};

const getCategoryById = async (request, response) => {
    try {
        const existPositions = await Position.find({
            category: request.params.categoryId,
            user: request.user.id // Берется из passport
        });

        return response
            .status(200)
            .json({positions: existPositions});
    } catch (e) {
        showError(response, e);
    }
};

const removePositionById = async (request, response) => {
    try {
        await Position.remove({_id: request.params.id});

        return response.status(200).json({message: 'Delete!'});
    } catch (e) {
        showError(response, e);
    }
};

module.exports = {
    changePositionById,
    createNewPosition,
    getCategoryById,
    removePositionById
};

