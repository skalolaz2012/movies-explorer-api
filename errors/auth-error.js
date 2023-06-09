const AuthMsg = 'Неверная почта или пароль';
const NeedAuthMsg = 'Пожалуйста, авторизуйтесь';

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = { AuthError, AuthMsg, NeedAuthMsg };
