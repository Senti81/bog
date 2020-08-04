const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const knex = require('../db/connection');

const errorMessage = {
    success: false,
    message: `Email oder Passwort ist falsch`
};

router.post('/', async (req, res) => {
    const user = await knex('users').where('email', req.body.email).first();
    if (!user)
      return res.send(errorMessage);

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid)
      return res.send(errorMessage);

    const userDetails = {
      id: user.id,
      name: user.userName,
      email: user.email,
      role: user.role
    }

    const token = jwt.sign(
      userDetails,
      process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES }
    );
    res.send({ token, userDetails });
});

module.exports = router;