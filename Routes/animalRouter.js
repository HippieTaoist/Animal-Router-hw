const express = require('express');
const router = express.Router();

let animalArray = [{
        "id": "1",
        "animal": "cougar",
    },
    {
        "id": "2",
        "animal": "dog"
    },
    {
        "id": "3",
        "animal": "chicken"
    }, {
        "id": "4",
        "animal": "snipe"
    }
]




router.get('/', function (req, res) {
    console.log(req);
    res.send('what is up doc')
    console.log('i am here');
})

module.exports = router;