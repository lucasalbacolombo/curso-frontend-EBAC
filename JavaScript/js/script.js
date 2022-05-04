function calcularPrestacoes(event) {

    event.preventDefault();

    let valorCarro = Number(document.querySelector('#valor').value);
    let entrada = Number(document.querySelector('#entrada').value);
    let valorPrestacao = Number(document.querySelector('#prestacao').value);
    let numeroPrestacao = (valorCarro - entrada) / valorPrestacao;


    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `O número total de parcelas será: ${numeroPrestacao}`;
}


document.querySelector('#botao').addEventListener('click', calcularPrestacoes)
