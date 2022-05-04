const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('./models/User');
const PORT = 3000;
app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName) return res.status(400).json({error: 'true', message: 'O campo firstName é obrigatório'});
  if (!lastName) return res.status(400).json({error: 'true', message: 'O campo lastName é obrigatório'});
  if (!email) return res.status(400).json({error: 'true', message: 'O campo email é obrigatório'});
  if (!password) return res.status(400).json({error: 'true', message: 'O campo password é obrigatório'});
  await User.createUser(firstName, lastName, email, password);
  return res.status(201).json({id: 1, firstName, lastName, email});
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.getUserById(id);
  if (!user.length) return res.status(404).json({error: 'true', message: 'User not found'});
  return res.status(200).json(user);
});

app.get('/user', async (req, res) => {
  const users = await User.getUsers();
  return res.status(200).json(users);
});

app.listen(PORT, () => console.log(`O PAI TA ON NA PORTA ${PORT}`));