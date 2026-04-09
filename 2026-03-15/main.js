
const alunos = [
    { nome: "Ana Silva", idade: 20, curso: "Engenharia", nota: 8.5 },
    { nome: "Bruno Costa", idade: 22, curso: "Direito", nota: 6.0 },
    { nome: "Carla Dias", idade: 21, curso: "Medicina", nota: 9.0 }
];

console.log("--- Lista de Alunos ---");
alunos.forEach(aluno => {
    console.log(`Nome: ${aluno.nome} | Curso: ${aluno.curso} | Nota: ${aluno.nota}`);
});

console.log("\n--- Situação dos Alunos ---");
alunos.forEach(aluno => {
    let situacao = aluno.nota >= 7 ? "Aprovado" : "Reprovado";
    console.log(`${aluno.nome}: ${situacao}`);
});

//ENUNCIADO:

// Tema da atividade: Cadastro de Alunos (Arrays e Objetos).

// Objetivo: Praticar arrays, objetos e acesso a propriedades em JavaScript.  

// Enunciado: Crie um programa em JavaScript que simule um pequeno cadastro de alunos.

// 1° Passo: Crie um array chamado alunos. Dentro desse array devem existir 3 objetos, cada objeto representando um aluno.
// Cada aluno deve ter as seguintes propriedades: nome, idade, curso e nota.

// 2° Passo: Mostre as informações no console ou no alert. A saída deve conter o nome do aluno, curso e nota. Faça isso para todos os alunos do array. 

// 3° Passo: Mostre no console ou no alert quais alunos estão aprovados e quais alunos estão reprovados.
// Regras: 
// Nota maior ou igual a 7 = Aprovado.
// Nota menor que 7 = Reprovado.
// Instruções de Entrega:
// Realize a atividade em um único arquivo JavaScript.
// Envie a atividade para um repositório no GitHub.
// Colocar o link de acesso ao repositório em um documento Word.
// Verifique se é possível acessar o link do repositório.
// Anexar o documento Word aqui no Classroom e enviá-lo.
// Dica:
// Aproveite o desenvolvimento do exercício e absorva o máximo possível da prática/experiência.

// Qualquer dúvida, pode me mandar mensagem.

// :)