let cotacao = parseFloat(prompt("Cotação do dólar:"));
let dolares = parseFloat(prompt("Quantidade de dólares:"));
let reais = dolares * cotacao;
console.log(`O valor em reais é: R$ ${reais.toFixed(2)}`);