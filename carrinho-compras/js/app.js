let qtdeCampo = document.getElementById('quantidade');
let produtoCampo = document.getElementById('produto');
let listaProdutos = document.getElementById('lista-produtos');
let valorTotalSpan = document.getElementById('valor-total');

limpar();

function adicionar(){
    let qtde = qtdeCampo.value;
    let produto = produtoCampo.value;  
    if(qtde == '' || produto == ''){
        alert('faltou escolher quantidade ou produto');
    } else {  
        let produtoNome = produto.split('-')[0];
        let preco = produto.split('-')[1];
    
        let novoProduto = document.createElement('section');
        novoProduto.className = 'carrinho__produtos__produto';
        novoProduto.innerHTML = `<span class="texto-azul">${qtde}x</span> ${produtoNome} <span class="texto-azul">${preco}</span>`;
    
        listaProdutos.appendChild(novoProduto);
    
        let precoTotal = parseFloat(valorTotalSpan.textContent.split('$')[1]);    
        precoTotal = precoTotal + (parseFloat(preco.split('$')[1]) * parseInt(qtde));
        
        valorTotalSpan.textContent = "R$"+ precoTotal;
        qtdeCampo.value = '';
    }    
}

function limpar(){
    valorTotalSpan.textContent = "R$0";
    while(listaProdutos.firstChild){
        listaProdutos.removeChild(listaProdutos.firstChild);
    }
}