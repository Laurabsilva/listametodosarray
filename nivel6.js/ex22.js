console.log(" YOUTUBE MUSIC 🎵")
const musicas = ["O fogo arderá", "Teu amor me sustentará", "Teus planos", "Eis me aqui", "Serei tudo", "Quando te encontrar", "Me deixa ficar", "Minha história é sua"]
for (let i = 0; i < musicas.length; i++) {
    console.log( (i + 1) + "- " + musicas[i]);
}
console.log(" ")
console.log("Tem a música 'Teus planos'?!: ", musicas.includes("Teus planos"));
console.log(" ")

console.log("Posição da música 'Teus planos': ", musicas.indexOf("Teus planos") + "° ");
console.log(" ")
const top3 = musicas.slice(0,3);
console.log("Top 3 músicas 🎶")
for (let i = 0; i < top3.length; i++) {
    console.log( (i + 1) + "- " + top3[i]);
}
console.log(" ")
musicas.splice(5,2);
console.log("Nova playlist!!!")
for (let i = 0; i < musicas.length; i++) {
    console.log( (i + 1) + "- " + musicas[i]);
}
console.log(" ")
musicas.sort();
console.log("Playlist ordenada! :D");
for (let i = 0; i < musicas.length; i++) {
    console.log( (i + 1) + "- " + musicas[i]);
}
console.log(" ");
console.log("Playlist invertida :)")
musicas.reverse();
for (let i = 0; i < musicas.length; i++) {
    console.log( (i + 1) + "- " + musicas[i]);
}
console.log(" ")
console.log("Playlist organizada :P")
console.log(musicas.join(" | "))
