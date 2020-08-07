const jwt = require('jsonwebtoken');
const e = require('express');

module.exports = (req, res, next) => {
  const token = req.header('X-Auth');   
  if (!token) {
    console.error('Missing Token Header');
    return res.sendStatus(401);
  }
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.sendStatus(401);
  }
  next();
}