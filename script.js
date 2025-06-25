alert('Seja bem vindo ao jogo!');

let entrada = prompt("Digite um numero:");
let numero = parseInt(entrada); 

if(Number.isInteger(numero)){
  console.log("Origado, Voce digitou um inteiro");
}else{
  console.log("Por favor, digite um inteiro");
}


