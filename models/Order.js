const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    date: {
      type: Date,
      default: Date.now
    },
    list: [ // Для корректного отображения данных в системе
        {
            name: {
                type: String
            },
            quantity: {
                type: Number
            },
            cost: {
                type: Number
            }
        }
    ],
    order: {
      type: Number,
      required: true
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
});

const orderModel = mongoose.model('orders', orderSchema);

module.exports = orderModel;