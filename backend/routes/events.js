const router = require('express').Router();
const knex = require('../db/connection.js');
const verify = require ('../middlewares/verifyToken')

router.get('/', verify, async (req, res) => {
    const result = await knex('events')
        .join('users', 'host', '=', 'users.id')
        .select('userName as host', 'motto', 'description', 'location', 'state', 'events.date');
    res.json(result);
});

router.get('/:id', verify, async (req, res) => {
    const result = await knex('events').where('id', req.params.id);
    res.json(result);
});

router.get('/:id/beers', verify, async (req, res) => {
    const result = await knex('beers').where('event_id', req.params.id);
    res.json(result);
});

router.get('/:id/tastings', verify, async (req, res) => {
    const result = await knex('tastings').where('event_id', req.params.id);
    res.json(result);
});

router.get('/:eventId/user/:userId/tastings', verify, async (req, res) => {
    const result = await knex('tastings').where('event_id', req.params.eventId).andWhere('user_id', req.params.userId);
    res.json(result);
});

router.post('/', verify, async (req, res) => {
    const newId = await knex('events').insert(req.body);
    res.json(await knex('events').where('id', newId).first());
});

router.put('/:id', verify, async (req, res, next) => {
    const result = await knex('events').where('id', req.params.id).update( { "active": 1 });
    result === 1 ? res.json(await knex('events').where('id', req.params.id).first()) : next();
});
module.exports = router;