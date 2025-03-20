const express = require('express');
const { createOrder } = require('../controllers/orderController');

const router = express.Router();

router.post('/create', createOrder);  // Place an order & get ranked suppliers

module.exports = router;
