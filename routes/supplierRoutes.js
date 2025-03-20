const express = require('express');
const { addSupplier, getSuppliers } = require('../controllers/supplierController');

const router = express.Router();

router.post('/add', addSupplier);  // Add a supplier
router.get('/', getSuppliers);  // Get all suppliers

module.exports = router;
