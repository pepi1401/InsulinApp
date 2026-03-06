// Импорт на преводите (ако ги имаш в languages.js)
import { translations } from './languages.js';

// ФУНКЦИЯ ЗА СМЯНА НА ЕКРАНИТЕ (СЪРЦЕТО НА ПРИЛОЖЕНИЕТО)
window.showScreen = function(screenId) {
    // 1. Скриваме абсолютно всички секции с клас 'screen'
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => {
        s.style.display = 'none';
    });

    // 2. Показваме само тази, която ни трябва
    const target = document.getElementById(screenId);
    if (target) {
        target.style.display = 'block';
    } else {
        console.error("Критична грешка: Не намерих екран с ID: " + screenId);
    }
};

// ЛОГИКА ЗА ВХОД
window.login = function() {
    const email = document.getElementById('email-field').value;
    if (email) {
        localStorage.setItem("user", email);
        window.showScreen("dashboard");
    } else {
        alert("Моля, въведете имейл");
    }
};

// ЛОГИКА ЗА ИЗХОД
window.logout = function() {
    localStorage.removeItem("user");
    window.location.reload();
};

// ОТВАРЯНЕ НА РЕЦЕПТИ
window.toggleRecipe = function(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Логика за екраните
    const loginScreen = document.getElementById('login-screen');
    if (loginScreen) {
        const user = localStorage.getItem("user");
        if (user) {
            window.showScreen("dashboard");
        } else {
            window.showScreen("login-screen");
        }
    }

    // 2. Зареждане на съдържанието за деня
    showRandomDailyContent();
});

function showRandomDailyContent() {
    const lang = localStorage.getItem('lang') || 'bg';
    const langData = translations[lang];

    // 1. СЛУЧАЕН СЪВЕТ (💡)
    const tips = langData.tips_array;
    const tipElement = document.getElementById('daily-advice-text');
    if (tipElement && tips) {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        tipElement.innerText = randomTip;
    }

    // 2. СЛУЧАЙНО ПРЕДИЗВИКАТЕЛСТВО (🏆)
    const challenges = Object.keys(langData)
    .filter(key => key.startsWith('t2_content') && !isNaN(key.replace('t2_content', '')))
    .map(key => langData[key]);
    
    const challengeElement = document.getElementById('daily-challenge-text');
    if (challengeElement && challenges[0]) { // Проверка дали съществуват
        const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
        challengeElement.innerText = randomChallenge;
    }
}

