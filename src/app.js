const express = require('express');
const cors = require('cors');

const home = require('./routes/home');

require('./database');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', home);
  }
}

module.exports = new App().app;
