let raio = parseFloat(prompt("Raio da lata:"));
let altura = parseFloat(prompt("Altura da lata:"));
let volume = Math.PI * Math.pow(raio, 2) * altura;
console.log(`O volume da lata é: ${volume.toFixed(2)}`);