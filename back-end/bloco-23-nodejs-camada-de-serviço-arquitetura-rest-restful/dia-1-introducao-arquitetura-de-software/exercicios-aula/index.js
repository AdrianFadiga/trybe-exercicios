const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Users = require('./models/User');
const PORT = 3000;
app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName) return res.status(400).json({error: 'true', message: 'O campo firstName é obrigatório'});
  if (!lastName) return res.status(400).json({error: 'true', message: 'O campo lastName é obrigatório'});
  if (!email) return res.status(400).json({error: 'true', message: 'O campo email é obrigatório'});
  if (!password) return res.status(400).json({error: 'true', message: 'O campo password é obrigatório'});
  await Users.createUser(firstName, lastName, email, password);
  return res.status(201).json({id: 1, firstName, lastName, email});
});

app.listen(PORT, () => console.log(`O PAI TA ON NA PORTA ${PORT}`));