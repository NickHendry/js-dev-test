const products = [{
  id: 1,
  name: "Cube",
  description: "Perfect cube",
  exPrice: 12.50,
  gstPrice: 13.75,
}, {
  id: 2,
  name: "Sphere",
  description: "Perfect sphere",
  exPrice: 2.50,
  gstPrice: 2.75,
}, {
  id: 3,
  name: "Square",
  description: "Cube but flat",
  exPrice: 10.00,
  gstPrice: 11.00,
}, {
  id: 4,
  name: "Pyramid",
  description: "Perfect Pyramid",
  exPrice: 123.50,
  gstPrice: 135.85,
}, {
  id: 5,
  name: "Dodecodehron",
  description: "What...?",
  exPrice: 6.23,
  gstPrice: 6.85,
}, {
  id: 6,
  name: "Spiral",
  description: "Perfect screw",
  exPrice: 9.10,
  gstPrice: 10.01,
}, {
  id: 7,
  name: "Plane",
  description: "Like a square but potentially irregular",
  exPrice: 12.50,
  gstPrice: 13.75,
}, {
  id: 8,
  name: "Point",
  description: "That place on a plane",
  exPrice: 1.50,
  gstPrice: 1.55,
}];


function getAllProducts(req, res) {
  res.json(products);
}

function getAllProductsJson() {
  return products
}

module.exports = {
  getAllProducts,
  getAllProductsJson,
}
