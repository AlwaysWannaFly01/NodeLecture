const Router = require('@koa/router');
const userRouter = new Router();
const userController = require('../controller/userController');
const userServeUrlMappingResolver = require('../config/server/userServerUrlMappingResolver');

userRouter.post(userServeUrlMappingResolver.login, userController.login);

module.exports = userRouter;