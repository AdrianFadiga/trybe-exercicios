const calcularDivisao = (num1, num2) => {
  const promise = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error("Número inválido"));

    const resultado = num1 / num2;

    resolve (resultado);
  });
  return promise;
};

calcularDivisao(2, 0)
  .then((result) => console.log(result))
  .catch((err) => console.log("erro: %s", err.message));