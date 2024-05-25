// metodo ForEach // insira 6 frutas
let frutas = ['maçã', 'laranja', 'framboesa', 'melão', 'banana', 'tomate'];

frutas.forEach(retornaInfo);
function retornaInfo(nomeFruta, indice){
    console.log(`nomeFruta: ${nomeFruta}`)
    console.log(`Indice: ${indice}`)
}
// Arrow Function
frutas.forEach((nomeFruta, indice) =>{
    console.log(`nomeFruta: ${nomeFruta}`)
    console.log(`Indice: ${indice}`)
})
frutas.forEach((teste, indice) => console.log(teste, indice))
// ele vai retornar apenas o nome e não vai retornar o indice
console.clear()


let tarefas = [
    { // 0
        id: 1,
        isPronta: true,
        nomeTarefa: "limpar o banheiro"
    },
    { // 1
        id: 2,
        isPronta: false,
        nomeTarefa: "Lavar a roupa"
    },
    { // 2
        id: 3,
        isPronta: false,
        nomeTarefa: "Dormir 8 horas por noite"
    }, 
]

// Arrow Function
tarefas.forEach((tarefa) => console.log(tarefa.nomeTarefa))

console.clear()
// Metodo Map
let numeros = [4, 9, 16, 25]
let novoArray = numeros.map(Math.sqrt)

console.log("Array antigo " + numeros)
console.log("Novo Array " + novoArray)

let mapText = tarefas.map((retornaText) => {
    console.log(retornaText.nomeTarefa)
})

console.clear()
let numeros2 = [3, 13, 24, 36, 47, 50, 2, 1, 60, 78, 89]
let resultado = numeros2.filter(retornaFiltro)
function retornaFiltro(num){
    return num > 30
}
console.log(resultado)

let tarefaFiltro = tarefas.filter((resultadoFiltro) => {
    return resultadoFiltro.isPronta === false
})

console.log(tarefaFiltro)
console.clear()
let sapatos = [
    {marca: "Nike", quantidade: 3},
    {marca: "Adidas", quantidade: 5},
    {marca: "Puma", quantidade: 7}
]

sapatos.find((retornaFind) => {
    console.log( retornaFind.marca == "Puma")
})












// for(var i = 0; i < frutas.length ; i++){
//     console.log(`Nome: ${frutas[i]}`)
//     console.log(`Indice: ${[i]}`)
// }


// const numeros = [4, 9, 16, 25];
// const newArray = numeros.map(Math.sqrt);
// console.clear();
// console.log('Números:');
// console.log(numeros);