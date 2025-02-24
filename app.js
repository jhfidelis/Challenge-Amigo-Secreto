let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        console.log(nome);
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        console.log(amigos);
    }

    limparCampo();
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}