const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionSchema = new Schema({
    category: {
        ref: 'categories', // ссылание на другую схему (model)
        type: Schema.Types.ObjectId
    },
    cost: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
});

const positionModel = mongoose.model('positions', positionSchema);

module.exports = positionModel;