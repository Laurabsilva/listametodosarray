let produtos = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Leite",
    "Café",
    "Açúcar"
];

console.log(" --- MERCADINHO 🛒 --- ")
console.log (" ")

console.log("Tem café?", produtos.includes("Café"));
console.log (" ")

console.log("Posição do café:", produtos.indexOf("Café") + "°");
console.log (" ")

const primeirostres = produtos.slice(0,3)
console.log("Primeiros três produtos: ", primeirostres)
console.log (" ")


produtos.splice(3,1);
console.log("Nova lista de produtos: ", produtos)
console.log (" ")


console.log("Lista organizada:", produtos.join(" - "));
