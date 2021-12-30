const { Router } = require('express');
const User = require('../models/user');

const router = Router();

router.get('/', async (req, res) => {
  const results = await User.find();
  res.status(200).send(results);
});

router.post('/create', async (req, res) => {
  const { name, age, email } = req.body;
  const newUser = await User.create({ name, age, email });

  res.status(200).send(newUser);
});

module.exports = router;
