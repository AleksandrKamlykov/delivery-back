const { Router, json } = require('express');
const router = Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {

    const body = req.body;

    try {
        const discounts = await axios.post('https://elif-tech-default-rtdb.europe-west1.firebasedatabase.app/orders.json', JSON.stringify(body));

        res.send(JSON.stringify(discounts.data));
    } catch (err) {
        res.senderr;
    }
});

module.exports = router;