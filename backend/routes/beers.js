const router = require('express').Router();
const knex = require('../db/connection.js');

router.get('/', async (req, res) => {
    const allUsers = await knex('beers');
    res.json(allUsers);
});

router.post('/', async (req, res) => {
    const newId = await knex('beers').insert(req.body);
    res.json({ message: 'OK' })
});

module.exports = router;