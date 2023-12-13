var express = require('express');
var router = express.Router();
const passport = require('passport');

const { validateSchema, checkIdSchema } = require('../../utils');
const { customerSchema } = require('./validation');

const {
  getAll,
  getDetail,
  create,
  softDelete,
  update,
  search
} = require('./controller');

const routes = [
  {
    path: '/',
    method: 'get',
    validators: [passport.authenticate('jwt', { session: false })],
    handlers: [getAll],
  },
  {
    path: '/',
    method: 'post',
    validators: [validateSchema(customerSchema)],
    handlers: [create]
  },
  {
    path: '/search',
    method: 'get',
    validators: [passport.authenticate('jwt', { session: false })],
    handlers: [search]
  },
  {
    path: '/:id',
    method: 'get',
    validators: [passport.authenticate('jwt', { session: false }) ,validateSchema(checkIdSchema)],
    handlers: [getDetail]
  },
  {
    path: '/:id',
    method: 'put',
    validators: [passport.authenticate('jwt', { session: false }), validateSchema(checkIdSchema), validateSchema(customerSchema)],
    handlers: [update]
  },
  {
    path: '/:id',
    method: 'delete',
    validators: [passport.authenticate('jwt', { session: false }) ,validateSchema(checkIdSchema)],
    handlers: [softDelete]
  },
]

for (const route of routes) {
  router.route(route.path)[route.method](...route.validators, ...route.handlers)
}

module.exports = router