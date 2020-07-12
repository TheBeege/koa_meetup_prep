'use strict';

const joiRouter = require('koa-joi-router');
const Joi = joiRouter.Joi;
const router = joiRouter();

const bookController = require('../controllers/book');

router.prefix('/book');

router.route({
    method: 'post',
    path: '/',
    type: 'json',
    validate: {
        title: Joi.string(),
        author: Joi.string()
    },
    output: {
        200: {
            body: {
                id: Joi.number().integer(),
                title: Joi.string(),
                author: Joi.string()
            }
        }
    },
    handler: bookController.createBook
});

module.exports = router;