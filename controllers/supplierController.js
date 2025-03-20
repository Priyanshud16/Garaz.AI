const Supplier = require('../models/Supplier');

// Create a new supplier
exports.addSupplier = async (req, res) => {
  try {
    const { name, inventory } = req.body;
    const supplier = new Supplier({ name, inventory });
    await supplier.save();
    res.status(201).json({ message: 'Supplier added', supplier });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all suppliers
exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
