// Primeira página

function pegarDados(){
    var nome = document.getElementById("inputNome").value; // pego o valor do input de nome
    var email = document.getElementById("inputEmail").value; // pego o valor do input de email

    // Armazeno as informações em um objeto
    var dadosUsuario = {
        nome: nome,
        email: email
    };

    // Na primeira página, crie um canal de broadcast e envie uma mensagem
    const broadcastChannel = new BroadcastChannel('canalleo');
    broadcastChannel.postMessage(dadosUsuario);

}