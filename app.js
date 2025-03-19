//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value

    if (nomeAmigo != ''){
        nomeAmigos.push(nomeAmigo)
        document.getElementById('listaAmigos').innerHTML = nomeAmigos.join('<br>');
    } else {
        alert('O nome não pode ficar vazio!')
    }

    document.querySelector('input').value = ''
}

function sortearAmigo(){
    if (nomeAmigos.length == 0) {
        alert("Por favor, insira um nome.");
        return;

    } else{
    let indiceAleatorio = Math.floor(Math.random() * nomeAmigos.length);
    let nomeSorteado = nomeAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;
    }
}  


