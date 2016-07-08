'use strict';

const Nodal = require('nodal');

class CreateQuestions extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016070813240619;
  }

  up() {

    return [
      this.createTable("questions", [{"name":"user_id","type":"int"},{"name":"body","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("questions")
    ];

  }

}

module.exports = CreateQuestions;
