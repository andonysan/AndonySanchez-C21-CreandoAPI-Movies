const router = require('express').Router();
const { getGenres} = require('../../controllers/apiGenres.controller');

router
    .get('/', getGenres)
    // .get('/:id', show)

module.exports = router;