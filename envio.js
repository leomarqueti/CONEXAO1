// Primeira página

var nome = document.getElementById("inputNome").value; // pego o valor do input de nome

var email = document.getElementById("inputEmail").value; // pego o valor do input de email

// Armazeno as informações em um objeto
var dadosUsuario = {
    nome: nome,
    email: email
};


function pegarDados(){
    // Iniciar a conexão WebSocket
    const socket = new WebSocket('wss://leomarqueti.github.io/CONEXAO2/');

    // Enviar dados quando a conexão for estabelecida
    socket.onopen = function() {
    socket.send('Nome do cliente: João da Silva');
    socket.send('Veículo: Ford Fusion');
    };

}