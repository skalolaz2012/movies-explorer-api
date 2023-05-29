const { AlreadyExistError, AlreadyExistMsg } = require('./already-exist-error');
const { AuthError, AuthMsg, NeedAuthMsg } = require('./auth-error');
const { BadRequestError, BadRequestMsg } = require('./bad-request-error');
const { ForbiddenError, ForbiddenMsg } = require('./forbidden-error');
const { NotFoundError, NotFoundMsg } = require('./not-found-error');

const SuccessDel = 'удалено успешно!';

module.exports = {
  AlreadyExistError,
  AlreadyExistMsg,
  AuthError,
  AuthMsg,
  NeedAuthMsg,
  BadRequestError,
  BadRequestMsg,
  ForbiddenError,
  ForbiddenMsg,
  NotFoundError,
  NotFoundMsg,
  SuccessDel,
};
