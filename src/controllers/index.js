'use strict';

exports.helloWorld = async ctx => {
    ctx.body = {
        message: 'Hello world!'
    };
};