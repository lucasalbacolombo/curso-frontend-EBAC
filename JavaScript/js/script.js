function calcularPrestacoes() {

    let valorCarro = document.querySelector('#valor');
    let entrada = document.querySelector('#entrada');
    let valorPrestacao = document.querySelector('#prestacao');
    let numeroPrestacao = (valorCarro - entrada) / valorPrestacao;

    console.log (`O valor de cada prestação será de: ${numeroPrestacao}`);
}

document.querySelector('#botao').addEventListener('click', calcularPrestacoes);
