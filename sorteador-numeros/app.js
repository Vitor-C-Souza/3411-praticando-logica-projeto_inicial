let quantidade = document.getElementById('quantidade');
let doNumero = document.getElementById('de');
let ate = document.getElementById('ate');
let botaoReiniciar = document.getElementById('btn-reiniciar');
let resultado = document.getElementById('resultado').querySelector('label');

function sortear() {
    let i = 0;
    let numeroSorteado = 0;
    let sorteados = [];
    do{
        numeroSorteado = Math.floor((Math.random() * ate.value) + 1);
        if(numeroSorteado > doNumero.value && !sorteados.includes(numeroSorteado)){
            sorteados.push(numeroSorteado);
            i++;
        }      
    }while(i < quantidade.value);
    
    resultado.innerHTML =  "Números sorteados: " + sorteados.sort();  
    
    botaoReiniciar.disabled = false;
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');
}

function reiniciar() {
    quantidade.value = '';
    doNumero.value = '';
    ate.value = '';
    resultado.innerHTML = "Números sorteados:  nenhum até agora";
    botaoReiniciar.disabled = true;
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
}