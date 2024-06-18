// Função para fazer o request na API
function getImage(e) {
    // Busca a url da API no HTML
    let url_api = document.getElementById('url_api').innerText;
    // console.log(url_api);
    // Função fetch para buscar dados na API
    fetch('https://dog.ceo/api/breeds/image/random').then((response) => {
            console.log(response);
            return response.json(); // Receber o JSON
        }).then((data) => {
            console.log(data);
            document.getElementById('json_aqui').innerText =
                JSON.stringify(data);
            console.log(data.message)
            let imagem = `<img class="rounded img-fluid" src="${data.message}"/>`;
            // Insere a imagem no elemento HTML com id imagem_aqui
            document.querySelector('#imagem_aqui').innerHTML = imagem;
        });
}
// message
// status

// {"message":"https://images.dog.ceo/breeds/dachshund/puppy-1006024_640.jpg","status":"success"}

// stringify >> Pega um JSON e transforma em um objeto
// JSON >> Transforma um objeto em formato JSON

// fetch(url).then(receber o JSON).then(Tratar o JSON e mostrar as informações em tela para o usuario).catch(catch é para tratar erros retornados pela API)