const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  parts: { type: Map, of: Number },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
