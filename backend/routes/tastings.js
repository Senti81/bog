const router = require('express').Router();
const knex = require('../db/connection.js');
const verify = require ('../middlewares/verifyToken')

router.get('/', verify, async (req, res) => {
    const result = await knex('tastings');
    res.json(result);
});

router.post('/', verify, async (req, res) => {
    const user_id = req.body[0].user_id
    const event_id = req.body[0].event_id
    const result = await knex('tastings').where('event_id', event_id).andWhere('user_id', user_id);
    if (result.length !== 0){
        res.json({ message: "Form has already been submitted"})
        return
    }
    await knex('tastings').insert(req.body);
    res.json({ message: "OK"})
});

module.exports = router;