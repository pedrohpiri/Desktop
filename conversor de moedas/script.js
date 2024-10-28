function verificarEnter(event) {
    if (event.key === 'Enter') {
        converter();
    }
}

function converter() {
    // Obter as moedas selecionadas pelo usuário
    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const moedaDestino = document.getElementById('moedaDestino').value;

    // Obter o valor inserido para conversão
    const valor = parseFloat(document.getElementById('valor').value);

    // Verificar se o valor é válido (maior que zero)
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido para converter.");
        return;
    }

    // Definir as taxas de câmbio fictícias
    const taxas = {
        "USD_BRL": 5.50,
        "EUR_BRL": 6.20,
        "USD_EUR": 0.89,
        "EUR_USD": 1.12,
        "BRL_USD": 0.18,
        "BRL_EUR": 0.16
    };

    // Montar a chave para acessar a taxa de câmbio com base nas moedas escolhidas
    const chave = `${moedaOrigem}_${moedaDestino}`;
    
    // Obter a taxa de câmbio correspondente das taxas fictícias
    const taxa = taxas[chave];

    // Verificar se a taxa de câmbio existe para as moedas selecionadas
    if (!taxa) {
        alert("Conversão entre as moedas selecionadas não está disponível.");
        return;
    }

    // Calcular o valor convertido
    const resultado = valor * taxa;

    // Exibir o resultado na página, formatado com duas casas decimais
    // Formata o valor para o padrão brasileiro e exibe o resultado
document.getElementById('resultado').textContent = `Resultado: ${resultado.toLocaleString('pt-BR', { style: 'currency', currency: moedaDestino })}`;

}
