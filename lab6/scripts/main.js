let carrinho = {};

document.addEventListener('DOMContentLoaded', function() {
    carregarProdutos(produtos);
    atualizarCarrinho();
});

function carregarProdutos(produtos) {
    const container = document.getElementById('produtos');
    produtos.forEach(produto => {
        const article = criarProduto(produto);
        container.appendChild(article);
    });
}

function criarProduto(produto) {
    const article = document.createElement('article');
    
    const titulo = document.createElement('h2');
    titulo.textContent = produto.title;
    
    const imagem = document.createElement('img');
    imagem.src = produto.image;
    imagem.alt = produto.title;
    
    const descricao = document.createElement('p');
    descricao.innerHTML = produto.description;
    
    const preco = document.createElement('div');
    preco.className = 'price';
    preco.textContent = `Custo total: €${produto.price.toFixed(2)}`;
    
    const botao = document.createElement('button');
    botao.textContent = 'Adicionar ao Cesto';
    botao.addEventListener('click', () => adicionarAoCesto(produto));
    
    article.appendChild(titulo);
    article.appendChild(imagem);
    article.appendChild(descricao);
    article.appendChild(preco);
    article.appendChild(botao);
    
    return article;
}

function adicionarAoCesto(produto) {
    if (carrinho[produto.id]) {
        carrinho[produto.id].quantidade += 1;
    } else {
        carrinho[produto.id] = { ...produto, quantidade: 1 };
    }
    atualizarCarrinho();
}

function removerDoCesto(produtoId) {
    if (carrinho[produtoId].quantidade > 1) {
        carrinho[produtoId].quantidade -= 1;
    } else {
        delete carrinho[produtoId];
    }
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensSelecionados = document.getElementById('itens-selecionados');
    itensSelecionados.innerHTML = '';

    let custoTotal = 0;

    for (let id in carrinho) {
        const item = carrinho[id];
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-carrinho';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}" style="max-width: 50px; vertical-align: middle;">
            <span>${item.title} (x${item.quantidade}) - Custo total: €${(item.price * item.quantidade).toFixed(2)}</span>
            <button onclick="removerDoCesto(${item.id})">Remover do Cesto</button>
        `;
        itensSelecionados.appendChild(itemDiv);
        custoTotal += item.price * item.quantidade;
    }

    document.getElementById('custo-total').textContent = `Custo total: €${custoTotal.toFixed(2)}`;
}