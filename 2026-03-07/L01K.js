let cotacao = parseFloat(prompt("Cotação do dólar:"));
let reais = parseFloat(prompt("Quantidade de reais:"));
let dolares = reais / cotacao;
console.log(`O valor em dólares é: US$ ${dolares.toFixed(2)}`);