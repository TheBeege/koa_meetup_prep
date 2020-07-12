'use strict';

const createBook = async ctx => {
    ctx.body = {
        id: Math.ceil(Math.random() * 10),
        title: ctx.request.body.title,
        author: ctx.request.body.author
    }
};

module.exports = {
    createBook
};