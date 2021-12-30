const { Schema, model } = require('mongoose');

const stats = new Schema({
  city: {
    type: 'string',
  },
  requestDate: Schema.Types.Date,
});

module.exports = model('Stats', stats);
