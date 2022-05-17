const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const booksController = require('./controllers/booksController');

app.delete('/books/:id', booksController.deleteBook);

app.put('/books/:id', booksController.updateBook);

app.post('/books', booksController.addNewBook);

app.get('/books/:id', booksController.getById);

app.get('/books', booksController.getAll);

app.use((err, req, res, next) => {
  if (err.status) return res.status(err.status).json({message: err.message});
  return res.status(500).json({message: err.message});
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));