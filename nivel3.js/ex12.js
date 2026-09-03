const animais = ["Cachorro", "Gato", "Cavalo"];
animais.splice(2,0, "Coelho", "Papagaio");
console.log("Animais🐶");
console.log(" ")
for (let i = 0; i < animais.length; i++) {
    console.log( (i + 1) + "- " + animais[i]);
}
