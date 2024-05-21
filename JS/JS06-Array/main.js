// Array
var numeros = [-2,  40,  16,  111,  33,  64]

console.log(numeros)
console.log(`${numeros[3]} \n ${numeros[1]}` )
console.log()

// Crie um array unidimensional com 8 posições em todas as posições insira o nome de 8 pessoas especiais em sua vida.
// retorne no console a pessoa no indice 3 e 7.

console.clear()

var bidi = [
    ['Banana', 'Maçã', 'Pêra'], // linha 0
    ['Laranja', true, 1], // linha 1
    [null, 'Uva', -350, 4566] // linha 2
    // 0     1     2      3
]
console.log(bidi)
console.log(bidi[1][1])
console.log(bidi[2][2])

// para acessar info utilizando array bidi passamos no colchetes o indice da linha e depois coluna


// Array Bidi >> Crie um array bidimensional que contenha itens de mercado, o array deve ser feito com 4 linhas e em cada linha deve ter 4 produtos
// Retorne os seguintes valores no console fejão, detergente, maçã e shampoo
 var mercado = [
    ["Pipoca", "arroz", "fejão", "batata"],
    ["molho de tomate", "alface", "leite em pó", "detergente"],
    ["leite de coco", "candida", "maçã", "vinagre"],
    ["bolacha", "azeite", "limão", "shampoo"]
]

console.log(`${mercado[0][2]} \n ${mercado[1][3]} \n ${mercado[2][2]} \n ${mercado[3][3]}`)

console.clear()
let moeda = ["Real", "Euro", "Coroa", "Dolar"]

console.log(moeda)
moeda[3] = "Yen"
console.log(moeda)

console.clear()

let numArray = [2, 4, 6, 8, 10]
console.log(numArray)
var mudanca = numArray.toString();
console.log(mudanca)

console.clear()
var teste1 = [5, 10, 15, 20, 25, 30]

console.log(teste1)
var mudanca2 = teste1.join(" & ")
var mudanca3 = teste1.toString()
console.log("Com o join")
console.log(mudanca2)
console.log("Com o toString")
console.log(mudanca3)
// transforma array em string e muda o separador dos valores

console.clear()

let array = [0, 2, 3, 5, 7]
console.log(array.length)

console.clear()

let utilizaPop = ["Pollyana", "André", "Felippe", "Lucas Nathan", "Esther", "Lude Mila"]
console.log(utilizaPop)
var mudanca4 = utilizaPop.pop() // removi no final do array
console.log(mudanca4)
console.log(utilizaPop)

var mudanca5 = utilizaPop.push("Saraiva") // insere no final do array
console.log(mudanca5)
console.log(utilizaPop)

console.clear()

var nomesCarros = ["Audi", "Celta", "Uno com escada", "HB20"]
console.log(nomesCarros)
var mudanca6 = nomesCarros.shift()
console.log(mudanca6) // mostra valor que foi removido
console.log(nomesCarros)

console.clear()

var insereNoInicio = [true, 34, "Mano", "Socorro", "JS"]
delete insereNoInicio[2]

console.log(insereNoInicio)

// console.log(insereNoInicio)
// var mudanca7 = insereNoInicio.unshift("Nice")
// console.log(mudanca7)
// console.log(insereNoInicio)

