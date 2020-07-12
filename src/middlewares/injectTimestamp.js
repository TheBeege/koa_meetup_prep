'use strict';

module.exports = async (ctx, next) => {
    await next();
    ctx.body.timestamp = new Date().getTime();
};