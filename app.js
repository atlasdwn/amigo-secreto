//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value

    if (nomeAmigo != ''){
        nomeAmigos.push(nomeAmigo)
        document.getElementById('listaAmigos').innerHTML = nomeAmigos.join('<br>');
    } else {
        alert('O campo não pode ficar vazio!')
    }
    
    document.querySelector('input').value = ''
}


