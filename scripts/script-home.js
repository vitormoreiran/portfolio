document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const aboutDescription = document.getElementById('about-description');

    galleryItems.forEach(item => {
        const img = item.querySelector('img'); // Seleciona a imagem sobreposta
        const video = item.querySelector('video'); // Seleciona o vídeo
        const hoverImageSrc = item.getAttribute('data-hover'); // Pega a URL da imagem de hover
        const originalImgSrc = img ? img.src : null; // Armazena a URL original da imagem
        const originalPoster = video ? video.getAttribute('poster') : null; // Armazena o poster original do vídeo
        const originalVideoOpacity = video ? video.style.opacity : '1'; // Armazena a opacidade original do vídeo

        item.addEventListener('mouseenter', () => {
            // Se for uma imagem, troca o src para a imagem de hover
            if (img) {
                img.src = hoverImageSrc;
            }

            // Se for um vídeo, altera a opacidade do vídeo para 50%
            if (video) {
                video.style.opacity = '0.5'; // Altera a opacidade do vídeo para 50%
            }

            // Atualiza o texto "Sobre" com a descrição
            aboutDescription.textContent = item.getAttribute('data-description');
        });

        item.addEventListener('mouseleave', () => {
            // Restaura a imagem original ao remover o mouse
            if (img && originalImgSrc) {
                img.src = originalImgSrc;  // Restaura a imagem original
            }

            // Restaura a opacidade original do vídeo
            if (video) {
                video.style.opacity = originalVideoOpacity; // Restaura a opacidade original
            }

            // Reseta o texto "Sobre"
            aboutDescription.textContent = "Escolha uma imagem ou vídeo para ver a descrição.";
        });
    });
});
