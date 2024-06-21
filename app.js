
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoaNaTela(tag, texto){
    let campo =document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoaNaTela('h1', 'jogo do número secreto');
    exibirTextoaNaTela('p', 'escolha um numero entre 1 e 10');
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoaNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ?`tentativas`:`tentativa`;
        let mensagemTentativas = `voce descobrio o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoaNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoaNaTela('p', 'o numero secreto é menor');
         } else {
            exibirTextoaNaTela('p', 'o numero secreto é maior');
         }
         tentativas ++;
         limparCampo();
        
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1 );
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''; 
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tenativas = 1; 
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
