const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {

    const { select } = req.query;

    const orders = await axios.get('https://elif-tech-default-rtdb.europe-west1.firebasedatabase.app/orders.json');

    if (select) {
        const response = {

        };

        Object.entries(orders.data).forEach(([name, value]) => {
            if (name === select || value.phone === select || value.address === value) {
                response[name] = value;
            }
        });

        res.send(JSON.stringify(response));
    } else {

        res.send(JSON.stringify(orders.data));
    }

});
module.exports = router;