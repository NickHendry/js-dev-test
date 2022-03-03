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

    if (errors.length > 0) {
        res.status(422).send(errors);
    } else {
        let newOrderId = generator.uuid();
    
        res.send({newOrderId: `${newOrderId}`});
    }
}
  
module.exports = {
    processOrder,
}