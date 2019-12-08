const Order = require('../models/Order');
const showError = require('../utils/errorsHeandler');

const createNewOrder = async (request, response) => {
  try {
    const lastOrder = await Order.find({user: request.user.id}).sort({date: -1}) // date: -1 перевернет список с заказами, и последний станет первым
    const lastOrderIndex = lastOrder ? lastOrder.order + 1 : 1;

    const order = await new Order({
      list: request.body.list,
      order: lastOrderIndex,
      user: request.user.id,
    }).save();

    return response.status(201).json(order);
  } catch (error) {
    showError(response, error);
  }
};

// (get) localhost:5000/order?offset=2&limit=5
const getAllOrders = async (request, response) => {
  try {
    const query = {
      user: request.user.id
    };

    // Дата старта заказа
    if (request.query.start) {
      query.date = {
        //Больше или равно - $gte
        $gte: request.query.start
      }
    }

    if (request.query.end) {
      if (!query.date) {
        query.date = {} // возможно и не нужно
      }

      // $lte - Меньше или равно
      query.date['$lte'] = request.query.end;
    }

    query.order = parseInt(request.query.order);

    const limit = parseInt(request.query.limit);
    const offset = parseInt(request.query.offset);

    const orders = await Order
    .find(query)
    .sort({date: -1})
    .skip(offset) // пагинация, при подгрузке сколько блоков доотправлять для отображения
    .limit(limit);

    return response.status(200).json(orders);
  } catch (error) {
    showError(response, error);
  }
};

module.exports = {
  createNewOrder,
  getAllOrders
};
