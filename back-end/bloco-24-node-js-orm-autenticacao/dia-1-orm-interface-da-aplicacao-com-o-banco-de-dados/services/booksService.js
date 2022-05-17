const { Book } = require('../models');

const getAll = async () => {
  const result = await Book.findAll();
  return result;
};

const getById = async (id) => {
  const result = await Book.findAll({
    where: {
      id,
    },
  });
  if (!result.length) throw {message: "Book not found", status: 404};
  return result;
};

const addNewBook = async ({title, author, pageQuantity}) => {
  const result = await Book.create({
    title,
    author,
    pageQuantity
  });
  return result; 
};

const updateBook = async ({title, author, pageQuantity}, id) => {
  const result = await getById(id);
  if (!result.length) throw {message: 'Book not found', status: 404};
  await Book.update({title, author, pageQuantity}, {where: {id}})
  return;
};

const deleteBook = async (id) => {
  const result = await getById(id);
  if (!result.length) throw {status: 404, message: 'Não existe um livro com o id'};
  await Book.destroy({where: {id}});
  return;
}

module.exports = {
  getAll,
  getById,
  addNewBook,
  updateBook,
  deleteBook,
}