const top5netflix = ["O mentalista", "Outer Banks", "Sacrifício de sangue", "Minha vida com a família Walter", "Meu nome é farah" ];
const top3netflix = top5netflix.slice(0,3);

console.log("Top 5 Netflix 🎞️ ");
for (let i = 0; i < top5netflix.length; i++) {
    console.log( (i + 1) + "° " + top5netflix[i]);
}

console.log (" ")
console.log("Top 3 Netflix 🎞️ ");
for (let i = 0; i < top3netflix.length; i++) {
    console.log( (i + 1) + "° " + top3netflix[i]);

}
