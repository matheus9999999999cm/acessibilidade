document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos
  const botaoAcessibilidade = document.querySelector(".botao-acessibilidade");
  const opcoesAcessibilidade = document.querySelector(".opcoes-acessibilidade");
  const botaoAumentar = document.querySelector(".aumentar-fonte");
  const botaoDiminuir = document.querySelector(".diminuir-fonte");
  let tamanhoFonte = 16; // Tamanho inicial da fonte

  // Verifica se os elementos existem
  if (!botaoAcessibilidade || !opcoesAcessibilidade || !botaoAumentar || !botaoDiminuir) {
    console.error("Erro: Elementos de acessibilidade não encontrados.");
    return;
  }

  // Abre e fecha o menu de acessibilidade
  botaoAcessibilidade.addEventListener("click", function () {
    opcoesAcessibilidade.classList.toggle("apresenta-lista");
  });

  // Aumenta a fonte
  botaoAumentar.addEventListener("click", function () {
    tamanhoFonte += 2; // Aumenta em 2px
    document.body.style.fontSize = tamanhoFonte + "px";
  });

  // Diminui a fonte
  botaoDiminuir.addEventListener("click", function () {
    if (tamanhoFonte > 10) { // Evita fonte muito pequena
      tamanhoFonte -= 2; // Diminui em 2px
      document.body.style.fontSize = tamanhoFonte + "px";
    }
  });
});