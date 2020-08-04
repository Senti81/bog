const router = require('express').Router();
const knex = require('../db/connection.js');
const verify = require ('../middlewares/verifyToken')

router.get('/', verify, async (req, res) => {
    const allUsers = await knex('beers');
    res.json(allUsers);
});

router.post('/', verify, async (req, res) => {
    const newId = await knex('beers').insert(req.body);
    res.json({ message: 'OK' })
});

module.exports = router;