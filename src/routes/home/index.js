const { Router } = require('express');
const homeController = require('../../controllers/home');

const home = new Router();

home.get('/', homeController.index);

module.exports = home;
