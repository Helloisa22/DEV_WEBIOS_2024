// IF
// Se todos os alunos estiverem com a blusa e o crachá então todos recebem 10
var todosDeCracha = false
// true == true >> true
// true == false >> false
// if >> SE // else >> SENAO
if(todosDeCracha == true){
    console.log("Todos recebem nota 10 em JS")
}else{
    console.log("Todos recebem nota 0 em JS")
}

console.clear()

var numero1 = 4
var numero2 = 15
// condição      ?    true  :     false
numero1 > numero2 ? console.log("numero1 é maior") : console.log("numero1 é menor")

// if(numero1 > numero2){ // true
//     console.log("variavel numero1 é maior que a variavel numero2")
// }else{ // false
//     console.log("variavel numero1 é menor que a variavel numero2")
// }

console.clear()
// Se for Janeiro = Verão / Junho =  Outono / Inverno



// if(mes == "JANEIRO"){
//     console.log("É verão")
// }else if(mes == "JUNHO"){
//     console.log("É outono")
// }else if(mes == "OUTUBRO"){
//     console.log("É primavera")
// }else{
//     console.log("É inverno")
// }

console.clear()
let mes = "JANEIRO"
switch(mes){ // guardo a expressão quero validar
    case "JANEIRO":
        console.log("É verão")
    break;
    case "JUNHO":
        console.log("É outono")
    break;
    case "OUTUBRO":
        console.log("É primavera")
    break;
    default: // else
        console.log("É inverno")
    break;
}









// Gerente / Estagio / CEO
// você é Gerente >> No perfil de gerente aparece todas as informações sobre os estagiarios

/// Nome e senha
// Gerente / Estagiaro / CEO