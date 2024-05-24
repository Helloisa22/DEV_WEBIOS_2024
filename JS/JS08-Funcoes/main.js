// Funcao
function soma(num1, num2, num3) { // parametros
    //         2,     3,    2
    var num1
    var num2
    var num3

    return num1 + num2 + num3; // 5
}
console.log(soma(2, 3, 2)) // com
//console.log(soma)  sem parentese


// Crie uma funcao que receba 4 valores e retorne apenas a media desses valores

console.clear();

function media(n1,n2,n3,n4) {
    return(n1 + n2 + n3 + n4) / 4;
};

console.log (media(6,6,6,6));

console.clear()

const media2 = (n1,n2,n3,n4) => {
    return(n1 + n2 + n3 + n4) / 4;
}

console.log(media2(5,5,5,5))

console.clear()

function onloadTela() {
    alert("Sua tela está carregada Bem-Vindo")
    console.log("Recarregou a tela")
}

console.clear()

const clique = () => {
    // alert("Bem-vindo você clicou em mim")
    console.log("Você clicou em um botão")
}