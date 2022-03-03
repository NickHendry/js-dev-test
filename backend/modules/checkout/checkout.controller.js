const { writeFileSync } = require('fs');
const productsController = require('../products/products.controller');

const UUID = require('uuid-int');

const generator = UUID(0)

function allIds(prods) {
    let ids = []
    for (let i = 0; i < prods.length; i++) {
        ids.push(prods[i].id)
    }
    return ids;
}

function processOrder(req, res, next) {
    const data = req.body;

    let errors = [];

    if (typeof data.name === 'undefined' || !data.name) {
        errors.push({field: 'name', message: 'Name is required'});
    }
    if (typeof data.phone !== 'undefined' && !Number.isInteger(parseInt(data.phone))) {
        errors.push({field: 'phone', message: 'Phone number must be an integer'});
    }
    if (typeof data.email === 'undefined' || !data.email) {
        errors.push({field: 'email', message: 'Email is required'});
    }
    if (typeof data.exCost === 'undefined') {
        errors.push({field: 'exCost', message: 'Cost excluding GST is required'});
    } else if (isNaN(data.exCost)) {
        errors.push({field: 'exCost', message: 'Cost excluding GST must be a number'});
    }
    if (typeof data.gstCost === 'undefined') {
        errors.push({field: 'gstCost', message: 'GST cost is required'});
    } else if (isNaN(data.gstCost)) {
        errors.push({field: 'gstCost', message: 'GST cost must be a number'});
    }

    if (typeof data.products === 'undefined' || !data.products) {
        errors.push({field: 'products', message: 'Products are required'});
    } else if (data.products.length > 0) {
        let prodsStored = productsController.getAllProductsJson();
        let prodsStoredIds = allIds(prodsStored);

        data.products.forEach((element, index) => {
            if (typeof element.id === 'undefined') {
                errors.push({field: `products[${index}].id`, message: 'Product ID is required'});
            } else if (!Number.isInteger(element.id)) {
                errors.push({field: `products[${index}].id`, message: 'Product ID must be an integer'});
            } else if (!prodsStoredIds.includes(element.id)) {
                errors.push({field: `products[${index}].id`, message: 'Product ID must match up with a valid product ID'});
            }

            if (typeof element.quantity === 'undefined') {
                errors.push({field: `products[${index}].quantity`, message: 'Product quantity is required'});
            } else if (!Number.isInteger(element.quantity)) {
                errors.push({field: `products[${index}].quantity`, message: 'Product quantity must be an integer'});
            } else if (element.quantity < 0) {
                errors.push({field: `products[${index}].quantity`, message: 'Product quantity must be greater than or equal to 0'});
            }
        })
    }

    if (errors.length > 0) {
        res.status(422).send(errors);
    } else {
        let newOrderId = generator.uuid();

        writeFileSync(`orders/order_${newOrderId}.json`, JSON.stringify(data), (err) => {
            if (err) {
                let err = new Error('Failed to write order to file');
                err.status = 500;
                return next(err);
            }
        });

        res.send({newOrderId: `${newOrderId}`});
    }
}
  
module.exports = {
    processOrder,
}