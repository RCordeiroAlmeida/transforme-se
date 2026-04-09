
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