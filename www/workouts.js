// workouts.js

//REKLAMITE PRI KACVANE 


import { AdMob } from '@capacitor-community/admob';

AdMob.addListener(RewardAdPluginEvents.Rewarded, (reward) => {
    console.log("Потребителят изгледа рекламата и получи награда!");
    // Тук можеш да добавиш логика, например: отключване на съдържание
});

let videosWatched = parseInt(localStorage.getItem('videosWatched')) || 0;

// Функция, която се вика, когато потребителят изгледа видео
async function watchWorkout() {
    videosWatched++;
    localStorage.setItem('videosWatched', videosWatched);
    
    if (videosWatched >= 2) {
        await showRewardedAd(); // Извикваме истинската реклама
        videosWatched = 0; // Нулираме
        localStorage.setItem('videosWatched', videosWatched);
    }
}

// Истинската функция за показване
async function showRewardedAd() {
    try {
        // Първо подготвяме (зареждаме) рекламата
        await AdMob.prepareRewardVideoAd({
            adId: 'ca-app-pub-3940256099942544/5224354917', // Твоят истински AdMob ID
        });
        
        // След това я показваме
        await AdMob.showRewardVideoAd();
    } catch (error) {
        console.error("Грешка при зареждане на рекламата:", error);
    }
}

// Експортирай функциите, ако трябва да ги ползваш в HTML
window.watchWorkout = watchWorkout;



// ===============================



// Функция за показване/скриване на видеата
window.toggleWorkout = function(cardElement) {
    const isExpanded = cardElement.classList.contains('expanded');

    // 1. ОТЧИТАНЕ: Ако картата не е била отворена (т.е. сега се отваря)
    if (!isExpanded) {
        watchWorkout(); // Тук викаме функцията за броене
    }

    // 2. Логика за затваряне на другите карти
    document.querySelectorAll('.workout-card').forEach(card => {
        card.classList.remove('expanded');
    });

    // 3. Отваряне на текущата карта
    if (!isExpanded) {
        cardElement.classList.add('expanded');
        setTimeout(() => {
            cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
};

// Връщане към началната страница
window.goToDashboard = function() {
    window.location.href = "index.html";
};