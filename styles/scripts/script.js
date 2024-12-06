const videos = document.querySelectorAll(".video-container-canaa video");
let currentIndex = 0;

// Função para alternar o vídeo
function changeVideo() {
    // Remove a classe "active" do vídeo atual
    videos[currentIndex].classList.remove("active");

    // Incrementa o índice para o próximo vídeo
    currentIndex = (currentIndex + 1) % videos.length;

    // Adiciona a classe "active" ao próximo vídeo
    videos[currentIndex].classList.add("active");
}

// Adiciona o evento "ended" para cada vídeo
videos.forEach((video) => {
    video.addEventListener("ended", changeVideo);
});

// Inicializa o primeiro vídeo como ativo
videos[currentIndex].classList.add("active");
