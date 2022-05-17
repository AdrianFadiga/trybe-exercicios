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

module.exports = {
  getAll,
  getById,
}