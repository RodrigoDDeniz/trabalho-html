let nome = "Loja de Fones";
const preco = 299.99;
let quantidade = 3;


let total = preco * quantidade; 
let desconto = total > 500; 


function calcularDesconto(valor) {
    return valor * 0.1;
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!");

    
    let botoesComprar = document.querySelectorAll(".Comprar");
    botoesComprar.forEach((botao) => {
        botao.addEventListener("click", () => {
            alert("Produto adicionado ao carrinho!");
        });
    });


    let botaoEnviar = document.querySelector("button[type='submit']");
    botaoEnviar.addEventListener("click", (e) => {
        e.preventDefault();
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        if (!nome || !email) {
            alert("Por favor, preencha todos os campos!");
        } else {
            alert("Mensagem enviada com sucesso!");
        }
    });
});

// Manipulação do DOM
let titulo = document.querySelector("h1");
titulo.textContent = `${nome} - Produtos com Qualidade`;

// Estruturas Condicionais
if (desconto) {
    console.log("Desconto aplicado!");
} else {
    console.log("Sem desconto aplicado.");
}

// Estruturas de Repetição
let produtos = ["Fone A", "Fone B", "Fone C"];
produtos.forEach((produto, index) => {
    console.log(`Produto ${index + 1}: ${produto}`);
});


let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let totalCarrinho = parseFloat(localStorage.getItem("totalCarrinho")) || 0;


function adicionarAoCarrinho(nomeProduto, precoProduto) {
    carrinho.push({ nome: nomeProduto, preco: precoProduto });
    totalCarrinho += precoProduto;


    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    localStorage.setItem("totalCarrinho", totalCarrinho.toFixed(2));

    alert(`${nomeProduto} foi adicionado ao carrinho!`);
    atualizarTotalCarrinho();
}


function atualizarTotalCarrinho() {
    let totalDisplay = document.getElementById("total-display");
    if (totalDisplay) {
        totalDisplay.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    let botoesComprar = document.querySelectorAll(".Comprar");
    botoesComprar.forEach((botao) => {
        botao.addEventListener("click", (e) => {
            let produto = e.target.parentElement.querySelector("h3").innerText;
            let preco = parseFloat(e.target.parentElement.querySelector("span").innerText.replace("R$ ", "").replace(",", "."));
            adicionarAoCarrinho(produto, preco);
        });
    });


    atualizarTotalCarrinho();


    if (document.querySelector("#lista-carrinho")) {
        mostrarCarrinho();
    }
});


function mostrarCarrinho() {
    let listaCarrinho = document.getElementById("lista-carrinho");
    let totalCarrinhoDisplay = document.getElementById("total-carrinho");

    carrinho.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });

    totalCarrinhoDisplay.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`;
}


function limparCarrinho() {
    carrinho = [];
    totalCarrinho = 0;

  
    localStorage.removeItem("carrinho");
    localStorage.removeItem("totalCarrinho");

    
    atualizarTotalCarrinho();
    if (document.querySelector("#lista-carrinho")) {
        document.getElementById("lista-carrinho").innerHTML = "";
        document.getElementById("total-carrinho").textContent = "Total: R$ 0,00";
    }

    alert("Carrinho foi limpo!");
}


document.addEventListener("DOMContentLoaded", () => {
    const botaoLimpar = document.getElementById("limpar-carrinho");
    if (botaoLimpar) {
        botaoLimpar.addEventListener("click", limparCarrinho);
    }
});
