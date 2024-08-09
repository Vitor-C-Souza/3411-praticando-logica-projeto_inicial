function alterarStatus(codigo){
    let campo = document.getElementById('game-' + codigo);
    let botaoGame = campo.querySelector('a');
    let imagem = campo.querySelector('.dashboard__item__img');
    
    if(botaoGame.classList.contains('dashboard__item__button--return')){
        botaoGame.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented')
        botaoGame.innerHTML = 'Alugar';
    } else {
        botaoGame.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented')
        botaoGame.innerHTML = 'Devolver';
    }
}
