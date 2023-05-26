/* сервер если запустился, то слушает порты (ручки). На бэке приложение запускает нода */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');

const defaultError = require('./middlewares/defaultError');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('./middlewares/cors');
const rateLimit = require('./middlewares/rateLimit');

const {
  PORT = 3000,
  BASE_PATH,
} = process.env;

const app = express();
const routes = require('./routes/index');

mongoose.connect('mongodb://127.0.0.1/bitfilmsdb');

/* метод use позволяет использовать middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors);
app.use(rateLimit);

app.use(requestLogger); // подключаем логгер запросов до роутов

app.use('/', routes);

app.use(errorLogger); // подключаем логгер ошибок после роутов, до ошибок

app.use(errors()); // обработчик ошибок celebrate
app.use(defaultError); // централизованный обработчик ошибок

/* прослушивание порта из первого параметра и колбэк, который выполнится при запуске приложения */
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Ссылка на сервер ${BASE_PATH}`);
});
