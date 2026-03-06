// weight.js
let weightChart = null;

// 1. ЗАПИС НА ПРОФИЛ
window.saveProfile = function() {
    const genderEl = document.getElementById('user-gender');
    const ageEl = document.getElementById('user-age');
    const heightEl = document.getElementById('user-height');
    const targetEl = document.getElementById('target-weight');

    if (!genderEl || !ageEl || !heightEl || !targetEl) {
        console.warn("⚠️ Елементите на профила не са открити.");
        return;
    }

    const profile = {
        gender: genderEl.value,
        age: parseInt(ageEl.value) || 30,
        height: parseInt(heightEl.value) || 170,
        target: parseInt(targetEl.value) || 60
    };
    
    localStorage.setItem('userProfile', JSON.stringify(profile));
    console.log("✅ Профилът е запазен!");
    renderWeightList(); 
};

// 2. ЗАРЕЖДАНЕ НА ПРОФИЛ
function loadProfile() {
    const saved = JSON.parse(localStorage.getItem('userProfile')) || { gender: 'female', age: 30, height: 165, target: 60 };
    
    const genderEl = document.getElementById('user-gender');
    const ageEl = document.getElementById('user-age');
    const heightEl = document.getElementById('user-height');
    const targetEl = document.getElementById('target-weight');

    if (genderEl) genderEl.value = saved.gender;
    if (ageEl) ageEl.value = saved.age;
    if (heightEl) heightEl.value = saved.height;
    if (targetEl) targetEl.value = saved.target;
    
    return saved;
}

// 3. КАЛКУЛАЦИЯ НА НУТРИЕНТИ (Mifflin-St Jeor Equation)
function calculateNutrients(currentWeight) {
    const p = loadProfile();
    let bmr;
    
    const weight = parseFloat(currentWeight) || 86;
    const height = parseFloat(p.height) || 170;
    const age = parseFloat(p.age) || 30;

    // BMR Формула
    if (p.gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    
    const caloriesToMaintain = Math.round(bmr * 1.2);
    
    // Променен дефицит на -300 за по-устойчиво отслабване
    const targetCalories = weight > p.target ? caloriesToMaintain - 300 : caloriesToMaintain;
    
    // Протеин: 1.6г на кг тегло (оптимално за запазване на мускул)
    const protein = Math.round(weight * 1.6);

    // Изчисляване на BMI (Тегло / Ръст в метри на квадрат)
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    
    return { calories: targetCalories, protein: protein, target: p.target, bmi: bmi };
}

// 4. ЗАПИС НА ТЕГЛО (С РЕКЛАМА)
window.saveWeight = function() {
    const weightInput = document.getElementById('weight-input');
    if (!weightInput || !weightInput.value) {
        alert("Моля, въведете тегло!");
        return;
    }

    const value = weightInput.value;

    // Проверка за Rewarded Video
    if (window.rewardedAd && typeof window.rewardedAd.isLoaded === 'function' && window.rewardedAd.isLoaded()) {
        window.rewardedAd.show();
        
        window.rewardedAd.on('rewarded', () => {
            completeWeightSave(value);
            weightInput.value = "";
        });
        return; 
    } 

    // Ако няма реклама, записваме веднага
    completeWeightSave(value);
    weightInput.value = "";
};

// ПОМОЩНА ФУНКЦИЯ (Реалният запис в паметта)
function completeWeightSave(value) {
    const now = new Date();
    const lang = localStorage.getItem('lang') || 'bg';
    const locale = lang === 'bg' ? 'bg-BG' : (lang === 'mk' ? 'mk-MK' : 'en-US');

    const entry = {
        id: Date.now(),
        weight: parseFloat(value),
        date: now.toLocaleDateString(locale, { day: '2-digit', month: '2-digit' }),
        month: now.toLocaleString(locale, { month: 'long' }),
        year: now.getFullYear()
    };

    let history = JSON.parse(localStorage.getItem('weightHistory')) || [];
    history.unshift(entry);
    localStorage.setItem('weightHistory', JSON.stringify(history));

    console.log("✅ Теглото е записано!");
    renderWeightList(); // Обновяваме екрана
}

// 5. РЕНДЕРИРАНЕ НА СПИСЪКА И ДАШБОРДА
 function renderWeightList() {
    const lang = localStorage.getItem('lang') || 'bg';
    const t = (window.translations && window.translations[lang]) ? window.translations[lang] : {
        w_cal: "Калории", w_prot: "Протеин", w_unit_kg: "кг", w_day: "Ден", w_empty: "Няма данни"
    };// Взимаме преводите
    const container = document.getElementById('weight-list');
    const chartCard = document.getElementById('chart-container');
    if (!container) return;

    let history = JSON.parse(localStorage.getItem('weightHistory')) || [];
    const profile = loadProfile();

    if (history.length > 0) {
        if (chartCard) chartCard.style.display = "block";
        const nutrients = calculateNutrients(history[0].weight);

let dashboardHtml = `
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin: 15px 0;">
        <div style="background: #fdf2f2; padding: 12px; border-radius: 12px; text-align: center; border: 1px solid #fee2e2;">
            <span style="font-size: 0.6rem; color: #b91c1c; font-weight: bold; text-transform: uppercase;">BMI</span>
            <div style="font-size: 1.1rem; font-weight: 800; color: #991b1b;">${nutrients.bmi}</div>
        </div>
        <div style="background: #e3f2fd; padding: 12px; border-radius: 12px; text-align: center; border: 1px solid #bbdefb;">
            <span style="font-size: 0.6rem; color: #1976d2; font-weight: bold; text-transform: uppercase;">${t.w_cal}</span>
            <div style="font-size: 1.1rem; font-weight: 800; color: #1565c0;">${nutrients.calories}</div>
        </div>
        <div style="background: #f1f8e9; padding: 12px; border-radius: 12px; text-align: center; border: 1px solid #dcedc8;">
            <span style="font-size: 0.6rem; color: #388e3c; font-weight: bold; text-transform: uppercase;">${t.w_prot}</span>
            <div style="font-size: 1.1rem; font-weight: 800; color: #2e7d32;">${nutrients.protein}g</div>
        </div>
    </div>
`;

        setTimeout(() => initChart(history, profile.target), 50);

        let historyHtml = "";
        let lastPeriod = "";
        history.forEach(entry => {
            const currentPeriod = `${entry.month.charAt(0).toUpperCase() + entry.month.slice(1)} ${entry.year}`;
            if (currentPeriod !== lastPeriod) {
                lastPeriod = currentPeriod;
                historyHtml += `<h4 style="margin: 25px 0 10px 10px; color: #2193b0; font-size: 0.9rem; text-transform: uppercase; border-left: 3px solid #2193b0; padding-left: 8px;">${currentPeriod}</h4>`;
            }
            historyHtml += `
                <div class="card" style="display:flex; justify-content:space-between; align-items:center; padding:15px; margin-bottom:10px; background:white; border-radius:15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                    <div style="display:flex; flex-direction:column;">
                        <span style="font-size:0.7rem; color:#999;">${t.w_day}</span>
                        <strong style="font-size:1.1rem;">${new Date(entry.id).getDate()}</strong>
                    </div>
                    <div style="text-align:right; display:flex; align-items:center; gap:10px;">
                        <span style="font-size:1.2rem; font-weight:bold; color:#2c3e50;">${entry.weight} <small>${t.w_unit_kg}</small></span>
                        <button onclick="deleteWeight(${entry.id})" style="border:none; background:#f5f5f5; color:#ccc; width:25px; height:25px; border-radius:50%; cursor:pointer;">&times;</button>
                    </div>
                </div>
            `;
        });
        container.innerHTML = dashboardHtml + historyHtml;
    } else {
        if (chartCard) chartCard.style.display = "none";
        container.innerHTML = `<p style="text-align:center; color:#999; margin-top:20px;">${t.w_empty}</p>`;   
        // PREVOD  ${t.w_empty}
    }
}

// 6. ИНИЦИАЛИЗАЦИЯ НА ГРАФИКАТА
function initChart(history, target) {
    // 1. Взимаме езика и преводите
    const lang = localStorage.getItem('lang') || 'bg';
    const t = (window.translations && window.translations[lang]) ? window.translations[lang] : {
    w_label_weight: "Тегло", w_label_target: "Цел", w_unit_kg: "кг"
};
    
    const canvas = document.getElementById('weightChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Взимаме последните 7 записа
    const chartData = [...history].slice(0, 7).reverse();
    
    if (weightChart) weightChart.destroy();

    weightChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.map(d => d.date),
            datasets: [
                {
                    // Ползваме превода за "Тегло"
                    label: t.w_label_weight, 
                    data: chartData.map(d => d.weight),
                    borderColor: '#2193b0',
                    backgroundColor: 'rgba(33, 147, 176, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    // Ползваме превода за "Цел"
                    label: t.w_label_target, 
                    data: new Array(chartData.length).fill(target),
                    borderColor: '#e74c3c',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { 
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        // Правим и изскачащия прозорец (tooltip) да показва "кг" или "kg"
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y + ' ' + t.w_unit_kg;
                        }
                    }
                }
            },
            scales: {
                y: { 
                    grid: { color: '#f0f0f0' }, 
                    ticks: { 
                        // Динамична мерна единица на скалата (кг/kg)
                        callback: (v) => v + ' ' + t.w_unit_kg 
                    } 
                },
                x: { grid: { display: false } }
            }
        }
    });
}

// 7. ИЗТРИВАНЕ
window.deleteWeight = function(id) {
    const lang = localStorage.getItem('lang') || 'bg';
    const t = (window.translations && window.translations[lang]) ? window.translations[lang] : {
        w_delete_confirm: "Сигурни ли сте?"
    };
    if(confirm(t.w_delete_confirm || "Сигурни ли сте?")){
        let history = JSON.parse(localStorage.getItem('weightHistory')) || [];
        history = history.filter(item => item.id !== id);
        localStorage.setItem('weightHistory', JSON.stringify(history));
        renderWeightList();
    }
};

// weight.js - СТАРТ
document.addEventListener("DOMContentLoaded", () => {
    // Уверяваме се, че сме на страницата за тегло
    if (document.getElementById('weight')) {
        setTimeout(() => {
            loadProfile();
            renderWeightList();
            
            // Важно: Показваме секцията, ако е била скрита
            document.getElementById('weight').style.display = 'block';
        }, 500);
    }
});



