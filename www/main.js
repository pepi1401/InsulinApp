import { translations } from './languages.js';// 1. ФУНКЦИЯ ЗА ВХОД
window.login = function() {
    const emailField = document.getElementById('email-field');
    const email = emailField ? emailField.value : "";
    if (email.trim() !== "") {
        localStorage.setItem("user", email);
        checkUser(); // Извикваме единствената функция за проверка
    } else {
        alert("Моля, въведете имейл");
    }
};

// 2. ФУНКЦИЯ ЗА ИЗХОД
window.logout = function() {
    localStorage.removeItem("user");
    location.reload();
};
// 3. СМЯНА НА ЕЗИК
window.changeLanguage = function(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations(); // Сменя заглавията (бутони, менюта)
    loadDailyContent();  // Сменя самия съвет/предизвикателство веднага!
};

// 4. ПРИЛАГАНЕ НА ТЕКСТОВЕТЕ
function applyTranslations() {
    const lang = localStorage.getItem('lang') || 'bg';
    const data = translations[lang];
    if (!data) return;

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (data[key]) {
            if (el.tagName === 'INPUT') el.placeholder = data[key];
            else el.innerHTML = data[key];
        }
    });
}

// 5. ЗАРЕЖДАНЕ НА СЪВЕТИТЕ (САМО ОТ ЕЗИКОВИЯ ФАЙЛ)
function loadDailyContent() {
    const lang = localStorage.getItem('lang') || 'bg';
    const data = translations[lang];
    
    const adviceEl = document.getElementById('daily-advice-text');
    const challengeEl = document.getElementById('daily-challenge-text');
    
    // Проверяваме дали съществуват елементите и дали имаме преводи за тях
    if (adviceEl && challengeEl && data && data.advices && data.challenges) {
        const adviceIndex = Math.floor(Math.random() * data.advices.length);
        const challengeIndex = Math.floor(Math.random() * data.challenges.length);
        
        adviceEl.innerText = data.advices[adviceIndex];
        challengeEl.innerText = data.challenges[challengeIndex];
    }
}

// 6. ЕДИНСТВЕНАТА ФУНКЦИЯ ЗА ПРОВЕРКА НА ПОТРЕБИТЕЛ
function checkUser() {
    const user = localStorage.getItem("user");
    if (user) {
        const loginScreen = document.getElementById('login-screen');
        const dashboard = document.getElementById('dashboard');
        
        if (loginScreen && dashboard) {
            loginScreen.style.display = 'none';
            dashboard.style.display = 'block';
            loadDailyContent(); // Тук се зарежда съдържанието за зелените карти
        }
    }
}

// СТАРТИРАНЕ ПРИ ЗАРЕЖДАНЕ
document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
    checkUser();
});