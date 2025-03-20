const Supplier = require('../models/Supplier');

async function rankSuppliers(orderParts) {
  // Fetch all suppliers
  const suppliers = await Supplier.find();

  // Filter suppliers that can fully fulfill the order
  const eligibleSuppliers = suppliers.filter(supplier => {
    for (let part in orderParts) {
      if ((supplier.inventory.get(part) || 0) < orderParts[part]) {
        return false; // If any part is insufficient, exclude this supplier
      }
    }
    return true;
  });

  // Sort suppliers based on total excess inventory (lower excess is better)
  eligibleSuppliers.sort((a, b) => {
    const excessA = Object.keys(orderParts).reduce(
      (sum, part) => sum + ((a.inventory.get(part) || 0) - orderParts[part]),
      0
    );
    const excessB = Object.keys(orderParts).reduce(
      (sum, part) => sum + ((b.inventory.get(part) || 0) - orderParts[part]),
      0
    );
    return excessA - excessB;
  });

  return eligibleSuppliers.map(supplier => supplier.name); // Return sorted supplier names
}

module.exports = { rankSuppliers };
