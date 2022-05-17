
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
  const teste = await booksService.addNewBook({title, author, pageQuantity});
  return res.status(201).json({message: 'Criou'});
}

module.exports = {
  getAll,
  getById,
  addNewBook,
};