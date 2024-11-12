// Declaração de Variáveis
let nome = "Loja de Fones";
const preco = 299.99;
let quantidade = 3;

// Operações Matemáticas e Operações Lógicas
let total = preco * quantidade;  // Operação matemática
let desconto = total > 500;  // Operação lógica (verifica se o total é maior que 500)

// Funções
function calcularDesconto(valor) {
    return valor * 0.1; // Retorna 10% de desconto
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!");
    
    // Atribuir evento de clique para o botão de comprar
    let botoesComprar = document.querySelectorAll(".Comprar");
    botoesComprar.forEach((botao) => {
        botao.addEventListener("click", () => {
            alert("Produto adicionado ao carrinho!");
        });
    });

    // Validação de formulário no botão Enviar
    let botaoEnviar = document.querySelector("button[type='submit']");
    botaoEnviar.addEventListener("click", (e) => {
        e.preventDefault();  // Previne o envio para validação
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

// Tipos de Dados
let stringExemplo = "Texto";          // String
let numeroExemplo = 42;               // Number
let booleanExemplo = true;            // Boolean
let objetoExemplo = { produto: "Fone", preco: 250 }; // Object

// Array do Carrinho e Total
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let totalCarrinho = parseFloat(localStorage.getItem("totalCarrinho")) || 0;

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    carrinho.push({ nome: nomeProduto, preco: precoProduto });
    totalCarrinho += precoProduto;

    // Salvar no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    localStorage.setItem("totalCarrinho", totalCarrinho.toFixed(2));

    alert(`${nomeProduto} foi adicionado ao carrinho!`);
    atualizarTotalCarrinho();
}

// Função para exibir o total do carrinho no HTML
function atualizarTotalCarrinho() {
    let totalDisplay = document.getElementById("total-display");
    if (totalDisplay) {
        totalDisplay.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`;
    }
}

// Adiciona eventos de clique nos botões "Comprar" para adicionar os itens ao carrinho
document.addEventListener("DOMContentLoaded", () => {
    let botoesComprar = document.querySelectorAll(".Comprar");
    botoesComprar.forEach((botao) => {
        botao.addEventListener("click", (e) => {
            let produto = e.target.parentElement.querySelector("h3").innerText;
            let preco = parseFloat(e.target.parentElement.querySelector("span").innerText.replace("R$ ", "").replace(",", "."));
            adicionarAoCarrinho(produto, preco);
        });
    });

    // Exibir o total do carrinho ao carregar a página
    atualizarTotalCarrinho();

    // Exibir itens do carrinho na página do carrinho
    if (document.querySelector("#lista-carrinho")) {
        mostrarCarrinho();
    }
});

// Função para exibir o carrinho na página "carrinho.html"
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

// Função para limpar o carrinho
function limparCarrinho() {
    carrinho = [];
    totalCarrinho = 0;

    // Remove os dados do localStorage
    localStorage.removeItem("carrinho");
    localStorage.removeItem("totalCarrinho");

    // Atualiza a exibição
    atualizarTotalCarrinho();
    if (document.querySelector("#lista-carrinho")) {
        document.getElementById("lista-carrinho").innerHTML = "";
        document.getElementById("total-carrinho").textContent = "Total: R$ 0,00";
    }

    alert("Carrinho foi limpo!");
}

// Adiciona o evento de clique ao botão "Limpar Carrinho" na página "carrinho.html"
document.addEventListener("DOMContentLoaded", () => {
    const botaoLimpar = document.getElementById("limpar-carrinho");
    if (botaoLimpar) {
        botaoLimpar.addEventListener("click", limparCarrinho);
    }
});