function mostrarModal() {
    document.getElementById("modal").style.display = "block";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Mostra o modal após 5 segundos de navegação
window.onload = function() {
    setTimeout(mostrarModal, 50000); // 50000ms = 5 minutos
};

function mostrarModal() {
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// Efeito suave para o botão "Voltar ao topo"
document.querySelector('footer a[href="#produtos"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#produtos').scrollIntoView({ behavior: 'smooth' });
});
// Função para mostrar a confirmação de compra
function confirmarCompra(produto) {
    const mensagem = document.createElement('div');
    mensagem.classList.add('confirmacao-compra');
    mensagem.innerText = `${produto} adicionado ao carrinho!`;
    document.body.appendChild(mensagem);

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        mensagem.remove();
    }, 3000);
}

// Adiciona evento de clique nos botões de "Comprar Agora"
document.querySelectorAll('.produto button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const produto = document.querySelectorAll('.produto h3')[index].innerText;
        confirmarCompra(produto);
    });
});
