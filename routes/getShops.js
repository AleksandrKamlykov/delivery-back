const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {

    const shops = await axios.get('https://elif-tech-default-rtdb.europe-west1.firebasedatabase.app/shops.json');

    res.send(JSON.stringify(shops.data));
});

module.exports = router;