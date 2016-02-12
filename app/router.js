const express = require('express');
const router = express.Router();

const api = require('./endpoints');

router.get('/v1', api.v1.show);

module.exports = router;