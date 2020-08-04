const router = require('express').Router();
const knex = require('../db/connection.js');

router.get('/', async (req, res) => {
    const result = await knex('events');
    res.json(result);
});

router.get('/:id', async (req, res) => {
    const result = await knex('events').where('id', req.params.id);
    res.json(result);
});

router.get('/:id/beers', async (req, res) => {
    const result = await knex('beers').where('event_id', req.params.id);
    res.json(result);
});

router.get('/:id/tastings', async (req, res) => {
    const result = await knex('tastings').where('event_id', req.params.id);
    res.json(result);
});

router.get('/:eventId/user/:userId/tastings', async (req, res) => {
    const result = await knex('tastings').where('event_id', req.params.eventId).andWhere('user_id', req.params.userId);
    res.json(result);
});

router.post('/', async (req, res) => {
    const newId = await knex('events').insert(req.body);
    res.json(await knex('events').where('id', newId).first());
});

router.put('/:id', async (req, res, next) => {
    const result = await knex('events').where('id', req.params.id).update( { "active": 1 });
    result === 1 ? res.json(await knex('events').where('id', req.params.id).first()) : next();
});
module.exports = router;