const express = require('express');
const router = express.Router();



router.get('/', function (req, res) {

    console.log('i am here');
})

module.exports = router;