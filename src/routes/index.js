'use strict';

const joiRouter = require('koa-joi-router');
const Joi = joiRouter.Joi;
const router = joiRouter();

const bookRouter = require('./book');

const controller = require('../controllers');

router.route({
    method: 'get',
    path: '/',
    type: 'json',
    output: {
        200: {
            body: {
                message: Joi.string()
            }
        }
    },
    handler: controller.helloWorld
});

module.exports = [
    router,
    bookRouter
];