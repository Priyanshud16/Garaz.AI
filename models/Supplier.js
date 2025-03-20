const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true},
  inventory: { type: Map, of: Number } // Stores part quantities as key-value pairs
});

module.exports = mongoose.model('Supplier', supplierSchema);
