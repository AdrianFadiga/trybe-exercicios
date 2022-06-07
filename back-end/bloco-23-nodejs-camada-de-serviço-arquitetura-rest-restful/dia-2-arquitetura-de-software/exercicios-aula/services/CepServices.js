const cepModel = require('../models/CepModel');

const objGenerator = (code, message) => ({
  code, 
  message,
});

const isValidCep = (cep) => {
  const validCep = cep.replace('-', '');
  if (validCep.length !== 8) throw {
    code: 400,
    message: 'CEP inválido'
  }
}



const getAddressByCep = async (cep) => {
  isValidCep(cep);
  const address = await cepModel.findAddressByCep(cep);
  if (!address) throw {
    code: 404,
    message: 'CEP não encontrado',
  };
  return address;
}

const createNewAddress = async (cep, logradouro, bairro, localidade, uf) => {
  isValidCep(cep);
  if (!cep || !logradouro || !bairro || !localidade || !uf ) throw {
    code: 400,
    message: 'Todos os dados são obrigatórios',
  }
  const isRegisteredCep = await cepModel.findAddressByCep(cep);
  if (isRegisteredCep) throw {
    code: 409,
    message: 'CEP já existente',
  }
  return await cepModel.createNewAddress(cep, logradouro, bairro, localidade, uf);
}

module.exports = {
  isValidCep,
  getAddressByCep,
  createNewAddress,
}