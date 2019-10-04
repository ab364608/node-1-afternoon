const products = require('../products.json');

const getProductByName = (req, res) => {
    if (req.params.product_name) {
        const name = products.filter( val => val.product_name === (req.params.product_name));
        return res.status(200).send(name)
    }
    else {
        return res.status(500).send("Product Name is not in list.")
    }
    // res.status(200).send(name)
}

module.exports = getProductByName;