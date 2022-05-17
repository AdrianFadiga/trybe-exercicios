
const booksService = require('../services/booksService');

const getAll = async (req, res) => {
  const result = await booksService.getAll();
  return res.status(200).json(result);
};

const getById = async (req, res, next) => {
  try {
    const {id} = req.params;
    const result = await booksService.getById(id);
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

const addNewBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  await booksService.addNewBook({title, author, pageQuantity});
  return res.status(201).json({message: 'Criou'});
};

const updateBook = async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    await booksService.updateBook({title, author, pageQuantity}, id);
    return res.status(200).json({message: 'Book updated'});
  } catch(err) {
    next(err);
  };
};

const deleteBook = async (req, res, next) => {
  try {
  const {id} = req.params
  await booksService.deleteBook(id);
  return res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAll,
  getById,
  addNewBook,
  updateBook,
  deleteBook,
};