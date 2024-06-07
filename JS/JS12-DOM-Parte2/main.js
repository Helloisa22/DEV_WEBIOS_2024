// getElementById
// innerText > Insere um novo texto
let primeiroTitulo = document.getElementById("primeiroTitulo");

primeiroTitulo.style.color = 'red';
primeiroTitulo.innerText = 'Alanzoka';

// getElementsByClassName
let pegaClasse = document.getElementsByClassName('getClass'); // 3

for(i = 0; i < pegaClasse.length; i++){
    pegaClasse[i].style.color = 'blue';
}
console.log(pegaClasse);
console.clear()

// getElementsByName
let byName = document.getElementsByName("filho");

console.log(byName);

byName.forEach(funcao)

//  [90, 60, 50]
// primeiro parametro é referente aos valores do meu array
// Segundo parametro referente ao indice
function funcao (cont, indice) {
    return byName[indice].style.color = "pink"
}

console.clear()
// getElementsByTagName
let byTagName = document.getElementsByTagName("p");

for(c = 0; c < byTagName.length; c++){
    byTagName[c].style.color = '#FF4500'
    byTagName[c].style.fontSize = '20px'
    byTagName[c].style.boxShadow = '5px 2px 10px #000000'
    byTagName[c].style.textAlign = 'center'
    if(c % 2 == 0){ 
        byTagName[c].style.backgroundColor = '	#FFFF00'
    }else {
        byTagName[c].style.backgroundColor = '#fff'
    }
}

let removendo = document.getElementById('remove1')
removendo.remove()

console.log(byTagName)


let recebeLista = document.getElementById('paiLista')

recebeLista.style.listStyle = 'none'