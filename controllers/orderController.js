const Order = require('../models/Order');
const { rankSuppliers } = require('../services/supplierService');

exports.createOrder = async (req, res) => {
  try {
    const { parts } = req.body;
    
    // Save order in DB
    const order = new Order({ parts });
    await order.save();

    // Get ranked supplier list
    const rankedSuppliers = await rankSuppliers(parts);

    res.json({ order, rankedSuppliers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
