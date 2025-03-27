// Função para carregar componentes (header e footer)
function loadComponent(elementSelector, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.querySelector(elementSelector).innerHTML = data;
        })
        .catch(error => console.error(`Erro ao carregar ${filePath}:`, error));
}

// Language detection and setting
const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('pt')) {
    document.documentElement.lang = 'pt-br'; // Automatically set language to pt-br
} else {
    document.documentElement.lang = 'en'; // Default to English
}

// Dark mode toggle functionality
const modeToggleBtn = document.getElementById('mode-toggle');
const body = document.body;

// Check if dark mode was already set in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    modeToggleBtn.innerText = '🌙'; // Change the button icon to the moon for dark mode (assuming the moon icon)
} else {
    modeToggleBtn.innerText = '🌙'; // Default to the moon for light mode
}

// Add event listener to the button to toggle dark mode
modeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Change button icon based on the current mode
    if (body.classList.contains('dark-mode')) {
        modeToggleBtn.innerText = '🌞'; // Sun for dark mode
        localStorage.setItem('theme', 'dark'); // Save the user's preference
    } else {
        modeToggleBtn.innerText = '🌙'; // Moon for light mode
        localStorage.setItem('theme', 'light'); // Save the user's preference
    }
});

// Theme based on system preference (Dark or Light)
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set the theme based on system preference
if (prefersDarkMode) {
    body.classList.add('dark-mode');
} else {
    body.classList.remove('dark-mode');
}

// Listen for changes in system theme preference and update the website theme accordingly
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

