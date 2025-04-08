document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('language-selector');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
  
    // Carrega traduções via fetch
    async function loadTranslations(lang) {
      const response = await fetch('assets/lang/translations.json');
      const translations = await response.json();
      return translations[lang];
    }
  
    // Aplica traduções aos elementos
    async function applyTranslations(lang) {
      const translations = await loadTranslations(lang);
  
      elementsToTranslate.forEach(element => {
        const keys = element.getAttribute('data-translate').split('.');
        let text = translations;
  
        keys.forEach(key => {
          text = text[key];
        });
  
        // Atualiza o conteúdo do elemento
        element.innerHTML = text;
      });
  
      // Atualiza o atributo lang do HTML
      document.documentElement.lang = lang;
  
      // Salva preferência no localStorage
      localStorage.setItem('preferredLanguage', lang);
    }
  
    // Evento de mudança no seletor de idioma
    languageSelector.addEventListener('change', (e) => {
      applyTranslations(e.target.value);
    });
  
    // Verifica preferência salva ou idioma do navegador
    const preferredLanguage = localStorage.getItem('preferredLanguage') ||
                              navigator.language.split('-')[0] || 
                              'pt';
  
    // Define o valor inicial do seletor com o idioma preferido
    languageSelector.value = preferredLanguage;
  
    // Aplica as traduções do idioma preferido ao carregar a página
    applyTranslations(preferredLanguage);
  });
  
