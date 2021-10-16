//Função inverter palavra e descobrir se é um palíndromo:

function verificaPalindrome(parameter) {
    //Primeira parte - inverter a palavra:
  let palavraSeparada = parameter.split("");
  let palavraSeparadaInvertida = palavraSeparada.reverse("");
  let palavraInvertida = palavraSeparadaInvertida.join("");
  //Segunda parte - imprimir a palavra e a palavra invertida:
  console.log("A palavra é: ", parameter);
  console.log("A palavra invertida é: ", palavraInvertida);
  //Terceira parte - testar se é um palíndromo ou não:
  if (parameter === palavraInvertida) {
    palindrome = true;
  } else {
    palindrome = false;
  }
  //Quarta parte - imprimir verdadeiro ou falso:
  console.log(palindrome);
  // Não entendi o motivo do return -> o código funciona sem o return;
  return palindrome;
}

verificaPalindrome('banco');
