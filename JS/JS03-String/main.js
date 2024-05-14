// concatenar String
var string = "Os alunos estão ";
var string2 = "reprovados ";
var string3 = "ou aprovados? ";
var OlhaAi = " Os reprovados";
var num1 = 2
var num2 = 4
// + >> soma ou concatenação
console.log(string + string2 + string3);
console.log("Os alunos estão " + "reprovados " + "ou aprovados?")
// template string
console.log(`${string + string2 + string3 + (num1 * num2) + OlhaAi}`)
// concatenar string e faz ao mesmo tempo contas matematicas


console.clear()

// criar uma variavel que vai receber o seguinte texto IOS fez uma excursão na TOTVS com três cabritinhos(alunos)
// I O S - T O T V  S
// 0 1 2 4 6 7 8 9 10

var texto1 = "IOS fez uma excursão na TOTVS com três cabritinhos(alunos)"

console.log(texto1.charAt(27));
console.log(texto1[27]);

console.clear()

// tamanho string
var texto2 = "IOS"
var texto3 = "Está chovendo hamburguer"

console.log(`na variavel texto2 tem ${texto2.length} caracteres`)
console.log(`na variavel texto3 tem ${texto3.length} caracteres`)

var nome = "Joao"
console.log(nome.length)

console.clear()

var texto4 = "aqui está em minusculo"
var texto5 = "AQUI ESTÁ EM MAIUSCULO"
// UP
// LOW
console.log(`Minusculo: ${texto5.toLowerCase()}`)
console.log(`Maiusculo: ${texto4.toUpperCase()}`)
var nomeUsuarioFacebook = "PkNinaDaZl"
console.log(nomeUsuarioFacebook.toUpperCase())

console.clear()

var str = "Mozilla"
// M O Z I L L A
// 0 1 2 3 4 5 6

console.log(str)
console.log(str.substring(1, 4)) // O Z
console.log(str.substring(3))

console.clear()

var texto6 = "Olha a pipoca"
console.log(texto6)
console.log(texto6.replace('pipoca', 'Carreta Furacão'))

console.clear()

var texto7 = "        Olha a Carreta      ";

console.log(texto7)
console.log(texto7.trim())
