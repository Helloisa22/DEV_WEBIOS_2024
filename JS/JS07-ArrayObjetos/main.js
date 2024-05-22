// Objetos
let pessoa = {
    corDosOlhos: "verde",
    altura: 1.70,
    corCabelo: "Preto",
    nome: "Caio",
    sobrenome: "Maciel",
    hobbie: [
                ["Futebol", "LOL", "Tocar guitarra"],
                ["Futebol", "LOL", "Tocar guitarra"],
                ["Futebol", "LOL", "Pular"],
            ],
    //          0         1            2
    // criar outro objeto
    endereco: {
        rua: "Jao medeiro",
        numero: 234,
        cidade: "São Paulo",
        estado: "SP"
    }
}

console.log(pessoa)
console.log(pessoa.nome) //retornar apenas uma propriedade
console.log(pessoa.hobbie) // retorna todos os hobbies
console.log(pessoa.hobbie[2][2]) // retorna apenas um hobbie
console.log(pessoa.endereco) // retorna todo o endereço
console.log(pessoa.endereco.estado) // retorna apenas uma informacao dentro de endereco

console.clear()

let tarefa = [
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

console.log(tarefa)
console.log(tarefa[1]) // retorna um objeto
console.log(tarefa[1].nomeTarefa) // retorna uma unica propriedade de um objeto

console.clear()

let recebeJAINSON = JSON.stringify(pessoa); // transforma OBJETOS em JSON

console.log(pessoa)
console.log(recebeJAINSON)
console.clear()

var JSONITO = '{"corDosOlhos":"verde","altura":1.7,"corCabelo":"Preto","nome":"Caio","sobrenome":"Maciel","hobbie":[["Futebol","LOL","Tocar guitarra"],["Futebol","LOL","Tocar guitarra"],["Futebol","LOL","Pular"]],"endereco":{"rua":"Jao medeiro","numero":234,"cidade":"São Paulo","estado":"SP"}}'

console.log(JSONITO)
console.log(JSON.parse(JSONITO)) // Transforma JSON em OBJETO







        /// Crie mais 2 objetos com duas tarefas diferentes, uma dessas tarefas terá a propriedade isPronta com o valor false