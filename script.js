alert('Bem-vindo ao jogo da média!');

let quantidade = parseInt(prompt("Quantos números você deseja inserir?"));
let soma = 0;

if (isNaN(quantidade) || quantidade <= 0) {
  alert("Recarregue a página e insira um número válido maior que zero.");
} else {
  for (let i = 1; i <= quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i}:`));
    if (isNaN(numero)) {
      alert("Por favor, insira um número válido.");
      i--; 
    } else {
      soma += numero;
    }
  }

  let media = soma / quantidade;
  alert(`A média dos números digitados é: ${media.toFixed(2)}`);
}
