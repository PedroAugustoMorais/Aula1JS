alert('Seja bem vindo ao jogo!');

let numero = parseInt(entrada); 
let entrada = prompt("Digite um numero:");

if(Number.isInteger(numero)){
  console.log("Origado, Voce digitou um inteiro");
}else{
  console.log("Por favor, digite um inteiro");
}


