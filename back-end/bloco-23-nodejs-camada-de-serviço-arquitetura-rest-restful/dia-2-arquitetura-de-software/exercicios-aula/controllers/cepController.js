const cepServices = require('../services/CepServices');

const getAddressByCep = async (req, res, next) => {
  try {
    const { cep } = req.params;
    const address = await cepServices.getAddressByCep(cep);
    return res.status(200).json(address);
  } catch(err) {
    next(err);
  }
}

const createNewAddress = async (req, res, next) => {
  try {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    const newAddress = await cepServices.createNewAddress(cep, logradouro, bairro, localidade, uf);
    return res.status(201).json(newAddress); 
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAddressByCep,
  createNewAddress,
}