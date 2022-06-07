const connection = require('./connection');

const findAddressByCep = async (cep) => {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep=?';
  const [data] = await connection.execute(query, [cep]);
  if (!data.length) return null;
  return data;
}

const createNewAddress = async (cep, logradouro, bairro, localidade, uf) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
  return {cep, logradouro, bairro, localidade, uf};
}

module.exports = {
  findAddressByCep,
  createNewAddress,
}