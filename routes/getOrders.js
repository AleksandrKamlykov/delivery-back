const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {

    const orders = await axios.get('https://elif-tech-default-rtdb.europe-west1.firebasedatabase.app/orders.json');

    res.send(JSON.stringify(orders.data));
});
module.exports = router;