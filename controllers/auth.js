const bcrypt = require('bcryptjs'); // библиотека для шифрования паролей
const jsonWebToken = require('jsonwebtoken');
const {jwt} = require('../config/keys');
const showError = require('../utils/errorsHeandler');
const User = require('../models/User');

/**
 * Функция для  авторизации на странице логин
 * @param request - что приходит
 * @param response - ответ от сервера (что отправить)
 */
const addLoginData = async (request, response) => {
    const existUser = await User.findOne({email: request.body.email});

    if (!existUser) {
        return response
            .status(404)
            .json({
                message404: 'User not found!'
            });
    }
    // Проверка шифрованного пароля в базе с введенным
    const passwordEquals = bcrypt.compareSync(request.body.password, existUser.password);

    if (!passwordEquals) {
        return response
            .status(401)
            .json({
                message401: 'Password dont equals!'
            })
    }

    // Генерация токена
    const token = jsonWebToken.sign({
        email: existUser.email,
        userId: existUser._id
    }, jwt, {expiresIn: 60 * 60}); // время хранения токена

    return response.status(200).json({token});
};

const addRegisterData = async (request, response) => {
   // email, password, error validation
    // Нахождение существующего пользователя
    const existUser = await User.findOne({email: request.body.email});

    if (existUser) {
      return  response
          .status(409)
          .json({ // 409 code conflict
              message409: 'This user already exist!'
          });
    }

    const salt = bcrypt.genSaltSync(10); // generation hash (10 хватает)
    const email = request.body.email;
    const password = bcrypt.hashSync(request.body.password, salt);

    const user = new User({email, password});

    try {
        await user.save();
        response
            .status(201) // Нужно показать пользователю что все ОК!
            .json(user);
    } catch (e) {
        showError(response, e);
    }
};

module.exports = {
    addLoginData,
    addRegisterData
};