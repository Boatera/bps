const express = require('express');
const route = express.Router()
const controller = require('../controller/controller');
const services = require('../services/render');

/**
 *  @description Root Route
 *  @method GET /
 */

route.get('/cari', controller.getBPS);

route.get('/cari', controller.postBPS);

module.exports = route