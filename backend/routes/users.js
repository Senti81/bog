const router = require('express').Router();
const knex = require('../db/connection.js');

router.get('/', async (req, res) => {
    const allUsers = await knex('users');
    res.json(allUsers);
});

router.post('/', async (req, res) => {
    await knex('users').insert(req.body);
    res.json({ message: "OK"})
});

module.exports = router;