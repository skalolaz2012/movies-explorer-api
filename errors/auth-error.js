const AuthMsg = 'Вы ввели неправильный логин или пароль.';
const AuthEmptyTokenMsg = 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';
const NeedAuthMsg = 'Пожалуйста, авторизуйтесь';

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = { AuthError, AuthMsg, NeedAuthMsg, AuthEmptyTokenMsg };
