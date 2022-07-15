const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {

    const discounts = await axios.get('https://elif-tech-default-rtdb.europe-west1.firebasedatabase.app/discounts.json');
    res.send(JSON.stringify(discounts.data));
});

module.exports = router;