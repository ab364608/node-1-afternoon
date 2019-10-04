const express = require("express");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");
const getProductByName = require("./getProductByName")

const app = express();

const myPort = 5000;

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);
app.get('/api/products/:name', getProductByName)

app.listen(myPort, () => {
    console.log(`Running on Port: ${myPort}`);
});