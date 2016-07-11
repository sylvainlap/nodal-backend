'use strict';

const Nodal = require('nodal');

/* Include this file to enable Model relationships */

/* For example...

  const Post = Nodal.require('app/models/post.js');
  const Comment = Nodal.require('app/models/comment.js');

  Comment.joinsTo(Post, {multiple: true});

*/

const Question = Nodal.require('app/models/question.js');
const User = Nodal.require('app/models/user.js');

Question.joinsTo(User, { multiple: true });

module.exports = {}; // Don't need to export anything
