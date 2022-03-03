const { writeFileSync } = require('fs');

const UUID = require('uuid-int');

const generator = UUID(0)

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