const express = require('express');
const route = express.Router()
const controller = require('../controller/controller');
const services = require('../services/render');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

route.get('/admin', services.adminRoutes);

route.get('/masuk', services.loginRoutes)

route.get('/api/cari', controller.find);
 
route.get('/api/cari', controller.get);

module.exports = route