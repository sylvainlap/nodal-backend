'use strict';

const Nodal = require('nodal');
const Question = Nodal.require('app/models/question.js');

const Relationships = Nodal.require('app/relationships.js');

class QuestionsController extends Nodal.Controller {

  index() {

    Question.query()
      .where(this.params.query)
      .join('user')
      .end((err, models) => {

        this.respond(err || models, ['id', 'body', { user: ['id', 'email'] }]);

      });

  }

  show() {

    Question.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Question.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Question.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Question.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = QuestionsController;
