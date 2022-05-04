const connection = require('./connection');

const formatUser = ({id, first_name: firstName, last_name: lastName, email}) => {
  return {
    id,
    firstName,
    lastName,
    email,
  }
}

const createUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)'
  await connection.execute(query, [firstName, lastName, email, password]);
};

const getUserById = async (id) => {
  const query = 'SELECT first_name, last_name, email FROM users WHERE id=?';
  const [user] = await connection.execute(query, [id]);
  return user.map(formatUser);
}

const getUsers = async () => {
  const query = 'SELECT * FROM users';
  const [allUsers] = await connection.execute(query)
  return allUsers.map(formatUser);
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
}