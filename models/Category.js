const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    imageSrc: {
        type: String,
        default: ''
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

const categoryModel = mongoose.model('categories', categorySchema);

module.exports = categoryModel;