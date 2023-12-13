var express = require('express');
var router = express.Router();

const { validateSchema, checkIdSchema } = require('../../utils');
const { employeeSchema } = require('./validation');

const {
  getAll,
  getDetail,
  search,
  create,
  hardDelete,
  update,
  getList
} = require('./controller');
const passport = require('passport');

const routes = [
  {
    path: '/',
    method: 'get',
    validators: [passport.authenticate('jwt', { session: false })],
    handlers: [getList],
  },
  {
    path: '/all',
    method: 'get',
    validators: [passport.authenticate('jwt', { session: false })],
    handlers: [getAll],
  },
  {
    path: '/',
    method: 'post',
    validators: [validateSchema(employeeSchema)],
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
    validators: [passport.authenticate('jwt', { session: false }), validateSchema(checkIdSchema)],
    handlers: [getDetail]
  },
  {
    path: '/:id',
    method: 'put',
    validators: [passport.authenticate('jwt', { session: false }), validateSchema(checkIdSchema), validateSchema(employeeSchema)],
    handlers: [update]
  },
  {
    path: '/:id',
    method: 'delete',
    validators: [passport.authenticate('jwt', { session: false }), validateSchema(checkIdSchema)],
    handlers: [hardDelete]
  },
]

for (const route of routes) {
  // router.route('/').get()
  // router.route('/').post()
  //  ==> router.route('/')[router.method] : dynamic 
  router.route(route.path)[route.method](...route.validators, ...route.handlers)
}

// router.route('/')
//   .get(getList)
//   .post(validateSchema(employeeSchema), create);

// router.route('/all')
//   .get(getAll);

// router.get('/search')
//   .get(search)

// router.route('/:id')
//   .get(validateSchema(checkIdSchema), getDetail)
//   .put(validateSchema(checkIdSchema), validateSchema(employeeSchema), update)
//   .delete(validateSchema(checkIdSchema), hardDelete);

module.exports = router;
