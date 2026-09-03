let alunos = ["Ana Silva", "Bruno Oliveira", "Carlos Santos", "Daniela Souza", "Eduardo Costa", "Fernanda Lima", "Gabriel Pereira", "Juliana Almeida", "Lucas Rodrigues", "Mariana Ferreira"]
console.log("LISTA DE PRESENÇA | ALUNOS 1TD2 🏫")
for (let i = 0; i < alunos.length; i++) {
    console.log( (i + 1) + "- " + alunos[i]);
}
console.log(" ");

console.log("Ana Silva está presente?", alunos.includes("Ana Silva"));
console.log(" ");

console.log("Posição na chamada | Carlos Santos: ", alunos.indexOf("Carlos Santos"));
console.log(" ");

alunos.splice(3,0, "Bianca", "Carolina", "Caroline", );
console.log("NOVA LISTA DE ALUNOS | 1TDS2 🏫")
for (let i = 0; i < alunos.length; i++) {
    console.log( (i + 1) + "- " + alunos[i]);
}
console.log(" ");

alunos.splice(0,1, "Ana Clara");
console.log("LISTA DE PRESENÇA | ALUNOS 1TDS2 🏫")
for (let i = 0; i < alunos.length; i++) {
    console.log( (i + 1) + "- " + alunos[i]);
}
console.log(" ");

alunos.sort();
console.log("Alunos ordenados ⬇️ ")
for (let i = 0; i < alunos.length; i++) {
    console.log( (i + 1) + "- " + alunos[i]);
}
alunos.reverse();

console.log(" ");

console.log("Alunos invertidos ⬇️");
for (let i = 0; i < alunos.length; i++) {
    console.log( (i + 1) + "- " + alunos[i]);
}

console.log(" ");
console.log("Nomes com hífen: ", alunos.join(" - "));




