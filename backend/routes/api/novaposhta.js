const express = require('express');
const router = express.Router();
const { fetchNovaPoshtaCities } = require('../../controllers/novaposhta');

router.get('/cities', fetchNovaPoshtaCities);

module.exports = router;
