'use strict';

const Nodal = require('nodal');
const GraphQuery = Nodal.GraphQuery;

class GraphqlController extends Nodal.Controller {

  post() {
    const str = this.params.buffer.toString();
    GraphQuery.query(str, 5, (err, models, format) => {
      this.respond(err || models, format);
    });
  }

}

module.exports = GraphqlController;
