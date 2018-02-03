// Coin.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Coin = new Schema({
  name: {
    type: String
  },
  price: {
     type: Number
  }
},{
    collection: 'coins'
});

module.exports = mongoose.model('Coin', Coin);