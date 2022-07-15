const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {

    const products = await axios.get('https://elif-tech-default-rtdb.europe-west1.firebasedatabase.app/products.json');

    res.send(JSON.stringify(products.data));
});
module.exports = router;