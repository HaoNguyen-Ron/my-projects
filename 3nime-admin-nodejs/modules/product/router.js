var express = require('express');
var router = express.Router();

const {
  getAll,
  getDetail,
  create,
  hardDelete,
  update,
  getList,
  search
} = require('./controller')


const { validateSchema, checkIdSchema } = require('../../utils');
const { validationSchema, validationQuerySchema, } = require('./validation');

const routes = [
  {
    path: '/',
    method: 'get',
    validators: [],
    handlers: [getList],
  },
  {
    path: '/',
    method: 'post',
    validators: [validateSchema(validationSchema)],
    handlers: [create]
  },
  {
    path: '/all',
    method: 'get',
    validators: [],
    handlers: [getAll],
  },
  {
    path: '/search',
    method: 'get',
    validators: [],
    handlers: [search]
  },
  {
    path: '/:id',
    method: 'get',
    validators: [validateSchema(checkIdSchema)],
    handlers: [getDetail]
  },
  {
    path: '/:id',
    method: 'put',
    validators: [validateSchema(checkIdSchema), validateSchema(validationSchema)],
    handlers: [update]
  },
  {
    path: '/:id',
    method: 'delete',
    validators: [validateSchema(checkIdSchema)],
    handlers: [hardDelete]
  },
]

for (const route of routes) {
  router.route(route.path)[route.method](...route.validators, ...route.handlers)
}

module.exports = router;
