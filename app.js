const analyticsRouter = require('./routes/analytics');
const authRouter = require('./routes/auth');
const bodyParser = require('body-parser'); // позволяет парсить данные такие как (email, password)
const categoryRouter = require('./routes/category');
const cors = require('cors'); // если клиент будет на другом домене то сможем отвечать нашим сервером
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan'); // красиво логировать опред. запросы
const orderRouter = require('./routes/order');
const passport = require('passport');
const positionRouter = require('./routes/position');
const renderStrategy = require('./middleware/renderStrategy');
const {URI} = require('./config/keys');

// защита от корявых url
app.use(bodyParser.urlencoded({extended: true})); // позволяет энкодировать некоторые url которые приходят
app.use(bodyParser.json()); // позволит генерировать json объекты

app.use(cors());
app.use(morgan('dev')); // разработка

app.use('/uploads', express.static('uploads'));

app.use('/analytics', analyticsRouter);
app.use('/auth', authRouter);
app.use('/category', categoryRouter);
app.use('/position', positionRouter);
app.use('/order', orderRouter);

mongoose
    .connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connect!'))
    .catch(error => console.log(error));

app.use(passport.initialize());
renderStrategy(passport);

module.exports = {
    app
};

// mlab.com - настройка mongo