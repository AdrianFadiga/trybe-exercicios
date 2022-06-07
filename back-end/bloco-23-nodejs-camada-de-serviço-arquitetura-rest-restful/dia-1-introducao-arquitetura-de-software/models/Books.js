const connection = require('./connection');

const serialize = (booksData) => {
  return {
    id: booksData.id,
    title: booksData.title,
    authorId: booksData.author_id,
  }
}

const create = async (title, author_id) => {
  await connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', 
    [title, author_id]
  );
}

const isValid = async (title, author_id) => {
  const query = 'SELECT title, author_id from model_example.books WHERE author_id=?';
  const [books] = await connection.execute(query, [author_id]);
  if (books.length === 0 || title.length > 3) return false;
  return true;
}

const getBookById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?'
  const [books] = await connection.execute(query, [id]);

  return books.map(serialize);
}

const getBooksByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?';
  const [books] = await connection.execute(query, [authorId]);
  return books.map(serialize);
}

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');

  return books.map(serialize);
}

module.exports = {
  getAll,
  getBooksByAuthorId,
  getBookById,
  isValid,
  create,
}