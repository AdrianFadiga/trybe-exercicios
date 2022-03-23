let palavra = "";
let palavraInvertida = "";

function verificaPalindrome(parameter) {
  for (let i = parameter.length - 1; i >= 0; i--) {
    palavraInvertida += parameter[i];
  }
  if (palavraInvertida == parameter) {
    //  console.log(true);
    return true;
  } else {
    //  console.log(false);
    return false;
  }
}


console.log(verificaPalindrome("arara"));