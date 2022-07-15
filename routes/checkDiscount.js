const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {

    const { key } = req.query;

    if (key) {

        const discounts = await axios.get('https://elif-tech-default-rtdb.europe-west1.firebasedatabase.app/discounts.json');

        const result = discounts.data.find((discount) => discount.code == key);

        if (result) {
            res.send(JSON.stringify(result.precent));
        } else {
            res.send('that discount code is not there');
        }
    }


});

module.exports = router;