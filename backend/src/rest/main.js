var express = require('express');
var router = express.Router();
var main = require('../service').main;

router.get('/', main.get);

module.exports = router;