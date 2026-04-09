let valor = parseFloat(prompt("Valor da prestação:"));
let taxa = parseFloat(prompt("Taxa de juros (%):"));
let tempo = parseFloat(prompt("Tempo em atraso (meses):"));
let prestacao = valor + (valor * (taxa / 100) * tempo);
console.log(`O valor atualizado da prestação é: ${prestacao}`);