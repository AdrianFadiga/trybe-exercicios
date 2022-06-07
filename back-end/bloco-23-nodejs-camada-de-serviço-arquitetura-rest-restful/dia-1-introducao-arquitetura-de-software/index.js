const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const Authors = require('./models/Author');
const Books = require('./models/Books');

app.use(bodyParser.json());

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Authors.findById(id);

  if (!author) return res.status(404).json({message: 'Not found'});

  return res.status(200).json(author);
})

app.get('/authors', async (req, res) => {
  const authors = await Authors.getAll();
  res.status(200).json(authors)
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getBookById(id);
  if (books.length === 0) return res.status(404).json({message: 'Not found'});
 return res.status(200).json(books);
})

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Books.getBooksByAuthorId(author_id)
  : await Books.getAll();

  res.status(200).json(books);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (!Authors.isValid(firstName, middleName, lastName)) return res.status(400).json({message: 'Dados inválidos'});

  await Authors.create(firstName, lastName, lastName);

  return res.status(201).json({message: 'Autor criado com sucesso'});
});

app.post('/books', async (req, res) => {
  const {title, author_id} = req.body;
  if (!Books.isValid(title, author_id)) return res.status(400).json({message: 'Dados inválidos'});
  await Books.create(title, author_id);
  return res.status(201).json({message: 'adicionou a DB'});
})

app.listen(PORT, () => console.log(`O pai ta on na ${PORT}`));
