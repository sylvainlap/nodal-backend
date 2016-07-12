'use strict';

const Nodal = require('nodal');
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {

  console.log(os.cpus());
  console.log(os.cpus().length());
  console.log(process.env.WEB_CONCURRENCY);

  const daemon = Nodal.require('app/daemon.js');
  daemon.start(Nodal.my.Config.secrets.port);

} else {

  const app = new Nodal.Application();
  app.listen(Nodal.my.Config.secrets.port);

}
