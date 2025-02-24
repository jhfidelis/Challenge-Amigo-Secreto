let amigos = [];
let lista = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        console.log(nome);
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        console.log(amigos);
    }

    lista.innerHTML = "";
    exibirNomes();

    limparCampo();
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function exibirNomes() {
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}