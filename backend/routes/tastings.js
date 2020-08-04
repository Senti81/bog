const router = require('express').Router();
const knex = require('../db/connection.js');

router.get('/', async (req, res) => {
    const result = await knex('tastings');
    res.json(result);
});

router.post('/', async (req, res) => {
    await knex('tastings').insert(req.body);
    res.json({ message: "OK"})
});

module.exports = router;