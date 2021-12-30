const { Schema, model } = require('mongoose');

const user = new Schema({
  name: {
    type: 'string',
    required: true,
  },
  age: {
    type: 'number',
    required: true,
  },
  email: {
    type: 'string',
    required: true,
  },
});

module.exports = model('User', user);
