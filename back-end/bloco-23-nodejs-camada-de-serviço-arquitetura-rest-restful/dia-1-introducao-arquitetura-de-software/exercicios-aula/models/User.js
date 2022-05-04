const connection = require('./connection');

const formatUser = ({id, first_name: firstName, last_name: lastName, email}) => {
  return {
    firstName,
    lastName,
    email,
  }
}

const createUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)'
  await connection.execute(query, [firstName, lastName, email, password]);
};

module.exports = {
  createUser,
}