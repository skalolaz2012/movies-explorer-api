const { AlreadyExistError, AlreadyExistMsg } = require('./already-exist-error');
const { AuthError, AuthMsg, NeedAuthMsg, AuthEmptyTokenMsg } = require('./auth-error');
const { BadRequestError, BadRequestMsg } = require('./bad-request-error');
const { ForbiddenError, ForbiddenMsg } = require('./forbidden-error');
const { NotFoundError, NotFoundMsg } = require('./not-found-error');

module.exports = {
  AlreadyExistError,
  AlreadyExistMsg,
  AuthError,
  AuthMsg,
  NeedAuthMsg,
  AuthEmptyTokenMsg,
  BadRequestError,
  BadRequestMsg,
  ForbiddenError,
  ForbiddenMsg,
  NotFoundError,
  NotFoundMsg,
};
