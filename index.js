const express = require('express');
const discounts = require('./routes/getDiscount');
const orders = require('./routes/getOrders');
const products = require('./routes/getProducts');
const shops = require('./routes/getShops');


const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/discounts', discounts);
app.use('/orders', orders);
app.use('/shops', shops);
app.use('/products', products);

app.get('/', (req, res) => {
    res.send('app is wirking');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});