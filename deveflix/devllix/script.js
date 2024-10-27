// Array de trailers com ID do vídeo do YouTube, título e descrição
const trailers = [
    {
        id: "IiL-6sb4bs4",
        title: "Senna | Teaser Oficial | Netflix Brasil",
        description: "Depois dele, o Brasil nunca mais foi o mesmo. Senna é uma minissérie de ficção inspirada na história de vida, incrível carreira e nos relacionamentos familiares do maior piloto de F1 de todos os tempos. Protagonizada por Gabriel Leone, estreia ainda em 2024.",
    },
    {
        id: "Ft_QrPGXWqc",
        title: "Arcane: Temporada 2 | Trailer oficial | Netflix",
        description: "Veja tudo queimar. A premiada série volta para a última temporada em novembro, só na Netflix.",
    },
    {
        id: "LyUS2x3GH5g",
        title: "Arcane: Temporada 2 | O inimigo do meu inimigo | Prévia | Netflix",
        description: "Como diz o ditado, o inimigo do meu inimigo...A temporada 2 de, Arcane estreia em novembro, só na Netflix.",
    },
    {
        id: "eBFPx_tD6aM",
        title: "O LOBÃO do trailer 2 de #Arcane",
        description: "MIM DE PAPAAAAAAAAAAAAAAAAI AUUUUUUUUUUUUUUUUUU. A segunda temporada de Arcane chega em novembro.",
    },
    {
        id: "hQOjU-9SRHk",
        title: "Arcane: Temporada 2 | Missão secreta | Clipe oficial | Netflix",
        description: "A nata de Zaun tem muito estilo, até para entrar de fininho em um laboratório.Prepare-se para o final épico de Arcane. A temporada 2 estreia em novembro, só na Netflix.",
    }
];

// Índice do trailer atual
let currentIndex = 0;

// Seleciona os elementos do HTML onde os dados do trailer serão exibidos
const trailerIframe = document.getElementById("trailer-iframe");
const trailerTitle = document.getElementById("trailer-title");
const trailerDescription = document.getElementById("trailer-description");

// Função para carregar um trailer específico
function loadTrailer(index) {
    const trailer = trailers[index];
    trailerIframe.src = `https://www.youtube.com/embed/${trailer.id}`;
    trailerTitle.textContent = trailer.title;
    trailerDescription.textContent = trailer.description;
}

// Função para ir para o próximo trailer
function nextTrailer() {
    currentIndex = (currentIndex + 1) % trailers.length;
    loadTrailer(currentIndex);
}

// Função para voltar para o trailer anterior
function previousTrailer() {
    currentIndex = (currentIndex - 1 + trailers.length) % trailers.length;
    loadTrailer(currentIndex);
}

// Carrega o primeiro trailer ao abrir a página
loadTrailer(currentIndex);
