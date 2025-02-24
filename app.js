let amigos = [];
let listaDeNomes = document.getElementById('listaAmigos');
let nomeSorteado = document.getElementById('resultado');

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        console.log(nome);
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        console.log(amigos);
    }

    limparListas();
    exibirNomes();
    limparCampo();
}

function sortearAmigo() {
    if (amigos.length > 1) {
        limparListas();
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        nomeSorteado.innerHTML = "O amigo secreto sorteado é: " + amigos[indiceSorteado];
    } else {
        alert("Por favor, insira ao menos 2 nomes para realizar o sorteio.");
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function limparListas() {
    listaDeNomes.innerHTML = "";
    nomeSorteado.innerHTML = "";
}

function exibirNomes() {
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaDeNomes.appendChild(item);
    }
}