const express = require('express');
const route = express.Router()
const controller = require('../controller/controller');
const services = require('../services/render');

/**
 *  @description Root Route
 *  @method GET /
 */

route.get('/admin', services.adminRoutes);

route.get('/masuk', services.loginRoutes);
 
route.get('/', services.homeRoutes);

module.exports = route