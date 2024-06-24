document.addEventListener("DOMContentLoaded", function () {
  // Adicionar título simples ao site com id 'titulo'
  const titulo = document.getElementById("titulo");
  titulo.innerText = "Bem vindo à Loja.com Vestimentas";

  // Adicionar um produto à venda
  const produtoContainer = document.createElement("div");
  produtoContainer.classList.add("produto");

  const produtoImagem = document.createElement("img");
  produtoImagem.src = "assets/vest-cn-11134207-7r98o-lngx40lp870o8c.jpeg";
  produtoImagem.alt = "Imagem do produto";

  // Definir o estilo da imagem usando JavaScript
  produtoImagem.style.maxWidth = "100%";
  produtoImagem.style.height = "auto";

  const produtoNome = document.createElement("h2");
  produtoNome.textContent = "Vestido Estampado";

  const produtoDescricao = document.createElement("p");
  produtoDescricao.textContent =
    "Vestido estampado elegante, perfeito para qualquer ocasião. Disponível em várias cores e tamanhos.";

  const produtoPreco = document.createElement("p");
  produtoPreco.textContent = "Preço: R$ 129,99";

  produtoContainer.appendChild(produtoImagem);
  produtoContainer.appendChild(produtoNome);
  produtoContainer.appendChild(produtoDescricao);
  produtoContainer.appendChild(produtoPreco);

  document.querySelector(".container").appendChild(produtoContainer);
});
