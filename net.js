// ========== FUNCIONALIDADE DE DARK/LIGHT MODE ==========

// Elementos do DOM
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeText = document.querySelector('.theme-text');
const body = document.body;

// Chave para armazenar a preferência no localStorage
const THEME_KEY = 'netflix-theme';

// Função para obter o tema atual do localStorage
function getCurrentTheme() {
    return localStorage.getItem(THEME_KEY) || 'dark'; // Padrão: dark mode
}

// Função para salvar o tema no localStorage
function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
}

// Função para aplicar o tema
function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Modo Claro';
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Modo Escuro';
    }
}

// Função para alternar entre os temas
function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(newTheme);
    saveTheme(newTheme);

    // Animação suave do botão
    themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
    }, 150);
}

// Event listener para o botão de alternância
themeToggle.addEventListener('click', toggleTheme);

// Adicionar evento de teclado (tecla 'T' para alternar tema)
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 't' && !event.ctrlKey && !event.altKey && !event.metaKey) {
        event.preventDefault();
        toggleTheme();
    }
});

// Inicializar o tema ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getCurrentTheme();
    applyTheme(savedTheme);

    // Adicionar classe para animação de entrada do botão
    setTimeout(() => {
        themeToggle.classList.add('visible');
    }, 500);
});

// Detectar preferência do sistema (opcional - desabilitado por padrão)
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// if (!localStorage.getItem(THEME_KEY)) {
//     applyTheme(prefersDark ? 'dark' : 'light');
//     saveTheme(prefersDark ? 'dark' : 'light');
// }