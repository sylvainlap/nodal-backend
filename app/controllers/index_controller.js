'use strict';

const Nodal = require('nodal');
const os = require('os');

class IndexController extends Nodal.Controller {

  get() {

    console.log('begin');
    console.log(os.cpus().length);
    console.log(process.env.WEB_CONCURRENCY);
    console.log('end');

    this.respond({message: 'Welcome to your Nodal Project'});

  }

}

module.exports = IndexController;
