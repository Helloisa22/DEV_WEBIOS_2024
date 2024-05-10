// Objeto console
console.log("Hello World!");
// Quando trabalho com texto coloco o mesmo dentro de aspas duplas ou simples

// Variaveis
// quero criar um espaço na memoria do computador chamado _felippe e dizer que esse espaço na memoria irá receber o valor 8
var _felippe = 8;
var _felippe = "Messi" // redeclarar uma variavel
console.log(_felippe);

let letsGo = 4 // não posso redeclarar
letsGo = 6
console.log(letsGo)

console.clear();

// const
const PI = 3.1415;
// PI = "5241"

console.log(PI);

console.clear()

let NAN = 0 / 0;

console.log(NAN)

console.clear()

let IOS = "Instituto da oportunidade social" // variavel IOS recebeu uma String

console.log(IOS)

console.log("Instituto " + " da " + "oportunidade " + " social");
console.clear()

var numero1 = 2
var texto = "Eu tenho "
var texto2 = " Reais"

console.log(texto + numero1 + texto2);
// concatenar = é possivel concatenar Strings ou concatenar variaveis

console.clear()

// Valores Booleanos

var num1 = 5
var num2 = 5
// num1 é igual a num2
// 1 é igual a 5 = true

console.log(num1 == num2)

var teste;

console.log(teste)

console.clear()

// Operadores

var operador1 = 8;
var operador2 = null;

console.log(operador1 * operador2); // 8 * null

var operador3 = "5"
var operador4 = 1

console.log(operador3 - operador4);// "5" - 1

var operador5 = "5"
var operador6 = 1

console.log(operador5 + operador6);// "5" + "1" = 51

var operador7 = "five"
var operador8 = 2

console.log(operador7 * operador8);// "five" * 2 = NaN


console.clear()

var valor1 = 2
var valor2 = 2
var resultado = valor1 % valor2

console.log(resultado)


console.clear()

var compara = 2 > 3 != 2 // false ou true

var teste = !compara // false

console.log("Variavel compara " + compara)
console.log("variavel teste " + teste);

// compara se é diferente ou igual 
// ! é diferente 
// se o valor é menor ou igual
// compara o valor e o tipo
// só está comparando o valor valor

console.clear()

let valor3 = 4 // numerico
let valor4 = 6
let resultado1 = valor3 < valor4 || valor3 == valor4

console.log(resultado1)
// true OU false == true
// true E false == false
// true E true == true 
// false E false == false



var valor5 = "5"

console.log(typeof valor5)