// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o elemento que contém o texto inicial com o cursor
  const textoElemento = document.getElementById("texto-inicio");
  // Seleciona o cursor dentro do texto (span com classe "cursor")
  const cursor = textoElemento.querySelector(".cursor");
  // Pega o texto do elemento, removendo o caractere de cursor "|"
  const texto = textoElemento.textContent.replace("|", ""); 
  // Limpa o conteúdo do elemento para começar a digitar do zero
  textoElemento.innerHTML = "";

  let i = 0; // Índice para controle de caractere atual a digitar

  // Função que simula o efeito de digitação letra a letra
  function digitar() {
    if (i < texto.length) {
      // Remove o cursor temporariamente antes de adicionar o próximo caractere
      textoElemento.innerHTML = textoElemento.innerHTML.replace('<span class="cursor">|</span>', '');
      // Adiciona o próximo caractere do texto
      textoElemento.innerHTML += texto.charAt(i);
      // Reinsere o cursor após o caractere digitado
      textoElemento.innerHTML += '<span class="cursor">|</span>';
      i++; // Incrementa para próximo caractere
      // Chama a função novamente após 35 milissegundos (velocidade da digitação)
      setTimeout(digitar, 35);
    } else {
      // Quando terminar de digitar todo o texto, mantém o cursor piscando
      textoElemento.innerHTML = texto + '<span class="cursor">|</span>';
    }
  }

  digitar(); // Inicia o efeito de digitação assim que o DOM estiver carregado
});

// Função para criar uma estrela animada na seção inicial
function criarEstrela() {
  // Cria um novo elemento div para a estrela
  const estrela = document.createElement("div");
  estrela.classList.add("estrela"); // Adiciona a classe 'estrela' para estilos e animações
  estrela.innerHTML = "✦"; // Símbolo usado para a estrela

  // Seleciona o container onde as estrelas serão adicionadas
  const container = document.querySelector(".inicio .estrelas");
  const width = container.offsetWidth;  // Largura do container para posicionamento aleatório
  const height = container.offsetHeight; // Altura do container

  // Define posição horizontal aleatória dentro do container
  estrela.style.left = Math.random() * width + "px";
  // Define posição vertical aleatória dentro do container
  estrela.style.top = Math.random() * height + "px";
  // Define tamanho aleatório entre 8px e 24px
  estrela.style.fontSize = Math.random() * 16 + 8 + "px";
  // Define opacidade aleatória entre 0.5 e 1
  estrela.style.opacity = Math.random() * 0.5 + 0.5;

  // Adiciona a estrela ao container no DOM
  container.appendChild(estrela);

  // Remove a estrela após 1.2 segundos para que possa reaparecer outra
  setTimeout(() => {
    estrela.remove();
  }, 1200);
}

// Chama a função criarEstrela a cada 300 milissegundos para criar várias estrelas animadas
setInterval(criarEstrela, 300);

// Função para abrir a caixa de detalhes
function abrirDetalhes(id) {
  document.getElementById(id).style.display = "block";
}

// Função para fechar a caixa de detalhes 
function fecharDetalhes(id) {
  document.getElementById(id).style.display = "none";
}

// Função para abrir o video
function abrirVideo(id) {
  document.getElementById(id).style.display = "block";
}

// Função para fechar o video 
function fecharVideo(id) {
  document.getElementById(id).style.display = "none";
}
