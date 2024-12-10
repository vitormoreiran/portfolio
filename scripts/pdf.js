document.addEventListener("DOMContentLoaded", function() {
    const url = "../assets/CV+CL-VitorMoreiran.pdf"; // Caminho correto do PDF

    // Carrega o PDF usando o PDF.js
    pdfjsLib.getDocument(url).promise
        .then(function(pdf) {
            console.log('PDF carregado');
            
            // Pegando a primeira página do PDF
            pdf.getPage(1).then(function(page) {
                console.log('Página 1 carregada');
                
                const scale = 1.5; // Fator de zoom
                const viewport = page.getViewport({ scale: scale });
                
                const canvas = document.getElementById('pdf-canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                
                // Renderiza a página no canvas
                page.render({
                    canvasContext: context,
                    viewport: viewport
                });
            }).catch(function(error) {
                console.error('Erro ao carregar a página do PDF: ', error);
            });
        })
        .catch(function(error) {
            console.error('Erro ao carregar o PDF: ', error);
        });
});
