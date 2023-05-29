/* сервер если запустился, то слушает порты (ручки). На бэке приложение запускает нода */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('./middlewares/cors');

const defaultError = require('./middlewares/defaultError');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { limiter } = require('./middlewares/rateLimit');
const { mongoDB } = require('./utils/constants');

const {
  PORT = 3000,
  BASE_PATH,
  DB,
} = process.env;

const app = express();
const routes = require('./routes/index');

mongoose.connect(DB || mongoDB);

/* метод use позволяет использовать middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors);

app.use(requestLogger); // подключаем логгер запросов до роутов
app.use(limiter);

app.use('/', routes);

app.use(errorLogger); // подключаем логгер ошибок после роутов, до ошибок

app.use(errors()); // обработчик ошибок celebrate
app.use(defaultError); // централизованный обработчик ошибок

/* прослушивание порта из первого параметра и колбэк, который выполнится при запуске приложения */
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Ссылка на сервер ${BASE_PATH}`);
});
