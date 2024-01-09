const router = require('express').Router();
const {index, show, update, delete:destroy, store, } = require('../../controllers/apiMovies.controller');

router
    .get('/', index)
    .get('/:id', show)
    .post('/', store)
    .put('/:id', update)
    .delete('/:id', destroy)

module.exports = router;