const express = require('express');
app = express();
app.use(express.json());

const middlewareAge = (req, res, next) => {
  const { age } = req.body;
  if (age <= 17 || !age) return res.status(401).json({message: "Unauthorized"});
  next(); 
}

const PORT = 3001;

app.get('/ping', (req, res) => {
  res.status(200).json({message: "pong"});
});

app.put('/users/:name/:age', middlewareAge, (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({message: `Seu nome é ${name} e você tem ${age} de idade`});
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({message: `Hello, ${name}`});
});

app.post('/greetings', middlewareAge, (req, res) => {
  const { name } = req.body;
  return res.status(200).json({message: `Hello, ${name}`});
})

app.listen(PORT, () => {
  console.log(`O PAI TA ON NA PORTA ${PORT}`);
});