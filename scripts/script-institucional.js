document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todas as imagens da galeria
    const images = document.querySelectorAll(".image-section img");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
  
    // Função para abrir o modal
    images.forEach((img) => {
      img.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modalImg.src = img.src;
      });
    });
  
    // Função para fechar o modal ao clicar fora da imagem
    modal.addEventListener("click", (e) => {
      if (e.target !== modalImg) {
        modal.classList.add("hidden");
        modalImg.src = ""; // Remove a imagem do modal para evitar carregamento desnecessário
      }
    });
  });
  