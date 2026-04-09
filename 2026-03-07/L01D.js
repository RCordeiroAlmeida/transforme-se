let tempo = parseFloat(prompt("Tempo gasto (h):"));
let velocidade = parseFloat(prompt("Velocidade média (km/h):"));
let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;
console.log(`Velocidade: ${velocidade} | Tempo: ${tempo} | Distância: ${distancia} | Litros: ${litrosUsados.toFixed(2)}`);