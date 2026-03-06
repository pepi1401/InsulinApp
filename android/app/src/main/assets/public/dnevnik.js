// 1. Импорти - ЧИСТИ (Без Firebase)
// 1. Импорти - Две различни бази
import { localFoodBase as manualBase } from './food_db.js';      // За ръчно добавени
import { localFoodBase as scanBase } from './qr_food_db.js';     // За скенера
import { translations } from './languages.js';

// Сега обединяваме двете, за да може търсачката да ги вижда и двете
const allLocalProducts = [...manualBase, ...scanBase];
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    const target = document.getElementById(screenId);
    if (target) target.style.display = 'block';
}
window.showScreen = showScreen;

// 2. ЗАПИС НА НОВ ПРОДУКТ (ЛОКАЛНО)
window.saveProductLocally = function() {
    const barcode = document.getElementById('new-product-barcode').value;
    const name = document.getElementById('new-product-name').value;
    const kcal = parseFloat(document.getElementById('new-product-kcal').value) || 0;
    const sugar = parseFloat(document.getElementById('new-product-sugar').value) || 0;
    const prot = parseFloat(document.getElementById('new-product-prot').value) || 0;
    const fat = parseFloat(document.getElementById('new-product-fat').value) || 0;

    if (!name || !barcode) {
        alert("Моля, въведете име и баркод!");
        return;
    }

    let customProducts = JSON.parse(localStorage.getItem("myCustomProducts")) || [];
    customProducts.push({ barcode, name, kcal, sugar, prot, fat, timestamp: Date.now() });
    localStorage.setItem("myCustomProducts", JSON.stringify(customProducts));

    alert("✅ Продуктът е запазен в телефона!");
    document.getElementById('add-food').style.display = 'none';
    displayResults(name, { kcal, sugar, prot, fat });
};

// 3. ПРОМЕНЛИВИ
window.dailyTotalSugar = parseFloat(localStorage.getItem("totalSugarToday")) || 0;
window.dailyTotalProt = parseFloat(localStorage.getItem("totalProtToday")) || 0;
window.dailyTotalFat = parseFloat(localStorage.getItem("totalFatToday")) || 0;
window.dailyTotalKcal = parseFloat(localStorage.getItem("totalKcalToday")) || 0;

let currentMealType = "";
let debounceTimer;
let html5QrCode = null; 
let dailyMeals = JSON.parse(localStorage.getItem("dailyMealsList")) || [];

// 4. ЗАПИС И ПРОГРЕС БАР
window.saveToLocalStorage = function() {
    localStorage.setItem("totalSugarToday", window.dailyTotalSugar);
    localStorage.setItem("totalProtToday", window.dailyTotalProt);
    localStorage.setItem("totalFatToday", window.dailyTotalFat);
    localStorage.setItem("totalKcalToday", window.dailyTotalKcal);
    localStorage.setItem("dailyMealsList", JSON.stringify(dailyMeals));
};

window.updateProgressBar = function() {
    const mealValues = { sugar: window.dailyTotalSugar, prot: window.dailyTotalProt, fat: window.dailyTotalFat, kcal: window.dailyTotalKcal };
    for (let key in mealValues) {
        const count = document.getElementById(key + "-count");
        const bar = document.getElementById(key + "-bar");
        if (count && bar) {
            count.innerText = (mealValues[key] || 0).toFixed(1);
            const limit = (key === 'kcal' ? 2000 : 50);
            bar.style.width = Math.min(((mealValues[key] || 0) / limit) * 100, 100) + "%";
        }
    }
};

// 5. ТЪРСЕНЕ
window.openMeal = function(type) {
    currentMealType = type;
    const lang = localStorage.getItem("lang") || "bg";
    const titles = {
        bg: { zakuska: "Закуска", pred_objad: "Преди обед", objad: "Обяд", sledobjad: "Следобяд", vecherja: "Вечеря" },
        en: { zakuska: "Breakfast", pred_objad: "Snacks", objad: "Lunch", sledobjad: "Afternoon", vecherja: "Dinner" },
        mk: { zakuska: "Појадок", pred_objad: "Ужина", objad: "Ручек", sledobjad: "Попладне", vecherja: "Вечера" }
    };
    document.getElementById("modal-title").innerText = titles[lang][type] || type;
    document.getElementById("meal-modal").style.display = "block";
};

window.closeMeal = function() {
    document.getElementById("meal-modal").style.display = "none";
    document.getElementById("search-results").innerHTML = "";
    document.getElementById("food-search").value = "";
};

window.searchFood = async function() {
    const query = document.getElementById('food-search').value.toLowerCase().trim();
    const resultsDiv = document.getElementById('search-results');
    if (query.length < 2) { resultsDiv.innerHTML = ""; return; }

    let customProducts = JSON.parse(localStorage.getItem("myCustomProducts")) || [];
    let combinedLocal = [...allLocalProducts, ...customProducts];
    
    let localResults = combinedLocal.filter(p => p.name.toLowerCase().includes(query));
    resultsDiv.innerHTML = ""; 
    renderCombinedResults(localResults, resultsDiv, true);

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
        try {
            const res = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=10`);
            const data = await res.json();
            if (data.products) renderCombinedResults(data.products, resultsDiv, false);
        } catch (e) { console.error(e); }
    }, 800);
};

function renderCombinedResults(products, container, isLocal) {
    const lang = localStorage.getItem("lang") || "bg";
    const t = translations[lang];

    products.forEach(product => {
        // 1. Извличане на данни
        const name = isLocal ? product.name : (product.product_name || "Unknown");
        const sugar = isLocal ? product.sugar : (product.nutriments?.sugars_100g || 0);
        const prot = isLocal ? product.prot : (product.nutriments?.proteins_100g || 0);
        const kcal = isLocal ? product.kcal : (product.nutriments?.["energy-kcal_100g"] || 0);
        const fat = isLocal ? product.fat : (product.nutriments?.fat_100g || 0);

        // 2. Логика за визуализация (Инсулинов баланс)
        // Ако захарта е над 5г и протеинът не е поне 1.5 пъти повече -> Червено
        const isDanger = (sugar > 5 && prot < sugar * 1.5);
        const borderColor = isDanger ? "#ff4d4d" : "#28a745";

        const card = document.createElement('div');
        card.className = "card";
        card.style = `padding:12px; margin-bottom:10px; cursor:pointer; border-left: 6px solid ${borderColor}; background:#fff; border-radius:8px;`;
        
        card.innerHTML = `
            <strong>${name}</strong><br>
            <small style="color:#666;">
                🍭 ${sugar.toFixed(1)}g | 🥩 ${prot.toFixed(1)}g | 🔥 ${kcal.toFixed(0)} kcal
            </small>
        `;

        // 3. Логика при клик (Грамове vs Бройки)
        card.onclick = () => { 
            let defaultAmount = product.perPiece ? product.perPiece : 100;
            let unitLabel = product.perPiece ? `грама (една бройка е ~${product.perPiece}g)` : "грама";
            
            let grams = prompt(`Колко ${unitLabel} от "${name}"?`, defaultAmount);
            
            if (grams && !isNaN(grams)) {
                // Предаваме обекта и грамовете към лога
                addMealToLog({ name, sugar, prot, kcal, fat }, grams);
                window.closeMeal();
            }
        };

        container.appendChild(card);
    });
}

// 6. СКЕНЕР (ИЗЧИСТЕН ОТ FIREBASE)
window.startScanner = async function() {
    document.getElementById("start-scan-btn").style.display = "none";
    document.getElementById("stop-scan-btn").style.display = "inline-block";
    if (html5QrCode && html5QrCode.getState() === 2) await html5QrCode.stop();
    if (!html5QrCode) html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start({ facingMode: "environment" }, { fps: 10, qrbox: 250 }, async (text) => {
        await window.stopScanner();
        window.fetchProductByBarcode(text);
    });
};

window.stopScanner = async function() {
    if (html5QrCode) {
        await html5QrCode.stop();
        document.getElementById("reader").innerHTML = "";
        document.getElementById("start-scan-btn").style.display = "inline-block";
        document.getElementById("stop-scan-btn").style.display = "none";
    }
};

window.fetchProductByBarcode = async function(barcode) {
    const statusEl = document.getElementById("scan-status");
    if (statusEl) statusEl.innerText = "🔍 Проверка...";

    // 1. Търси в "myCustomProducts" (ръчно добавените от телефона)
    let customProducts = JSON.parse(localStorage.getItem("myCustomProducts")) || [];
    let found = customProducts.find(p => String(p.barcode) === String(barcode));
    
    // 2. Ако го няма, търси в твоята база (scanBase)
    if (!found) {
        found = scanBase.find(p => String(p.barcode) === String(barcode));
    }
    
    // Ако е намерен в някоя от горните две бази - покажи резултата
    if (found) {
        displayResults(found.name, found);
        return;
    }

    // 3. Ако го няма никъде, търси в интернет (OpenFoodFacts)
    try {
        const res = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
        const data = await res.json();
        
        if (data.status === 1) {
            const p = data.product;
            displayResults(p.product_name, {
                sugar: p.nutriments?.sugars_100g || 0,
                prot: p.nutriments?.proteins_100g || 0,
                fat: p.nutriments?.fat_100g || 0,
                kcal: p.nutriments?.["energy-kcal_100g"] || 0
            });
        } else {
            // Никъде не е намерен
            alert("Неизвестен баркод. Добавете го ръчно!");
            document.getElementById('add-food').style.display = 'block';
            document.getElementById('new-product-barcode').value = barcode;
        }
    } catch (e) {
        console.error("Грешка при връзка с интернет:", e);
        alert("Проблем с интернет връзката.");
    }
};

function displayResults(name, data) {
    const elNames = ["res-name", "res-sugar", "res-prot", "res-fat", "res-kcal", "scan-results", "meal-selection-area"];
    
    // Проверка за съществуване
    const elements = elNames.map(id => document.getElementById(id));
    
    if (elements.some(el => el === null)) {
        console.error("Грешка: Някои елементи липсват в DOM!");
        return;
    }

    // Запълване
    document.getElementById("res-name").innerText = name;
    document.getElementById("res-sugar").innerText = data.sugar || 0;
    document.getElementById("res-prot").innerText = data.prot || 0;
    document.getElementById("res-fat").innerText = data.fat || 0;
    document.getElementById("res-kcal").innerText = data.kcal || 0;
    
    // Показване
    document.getElementById("scan-results").style.display = "block";
    document.getElementById("meal-selection-area").style.display = "block";
}

window.selectTypeAndAdd = function(type) {
    currentMealType = type;
    const nutrients = {
        name: document.getElementById("res-name").innerText,
        sugar: parseFloat(document.getElementById("res-sugar").innerText),
        prot: parseFloat(document.getElementById("res-prot").innerText),
        fat: parseFloat(document.getElementById("res-fat").innerText),
        kcal: parseFloat(document.getElementById("res-kcal").innerText)
    };
    
    // НЕ викай addMealToLog тук, защото той отваря prompt.
    // Направи директно добавяне с 100г или използвай prompt тук:
    let grams = prompt(`Колко грама "${nutrients.name}"?`, "100");
    if (!grams || isNaN(grams)) return;
    
    const factor = parseFloat(grams) / 100;
    dailyMeals.push({
        id: Date.now(), 
        type: type, 
        name: nutrients.name, 
        grams: Math.round(parseFloat(grams)),
        kcal: Math.round(nutrients.kcal * factor), 
        sugar: (nutrients.sugar * factor), 
        prot: (nutrients.prot * factor), 
        fat: (nutrients.fat * factor)
    });
    
    recalculateTotals();
    renderMealList();
    document.getElementById("scan-results").style.display = "none";
};

// 7. ЛОГИКА ЗА ДНЕВНИК
// Промени функцията да приема грамове като втори параметър
function addMealToLog(nutrients, gramsInput = null) {
    let grams = gramsInput ? gramsInput : prompt(`Колко грама "${nutrients.name}"?`, "100");
    
    if (!grams || isNaN(grams)) return;
    
    const factor = parseFloat(grams) / 100;
    dailyMeals.push({
        id: Date.now(), 
        type: currentMealType || "zakuska", 
        name: nutrients.name, 
        grams: Math.round(parseFloat(grams)),
        kcal: Math.round(nutrients.kcal * factor), 
        sugar: (nutrients.sugar * factor), 
        prot: (nutrients.prot * factor), 
        fat: (nutrients.fat * factor)
    });
    recalculateTotals();
    renderMealList();
}

function recalculateTotals() {
    window.dailyTotalKcal = dailyMeals.reduce((sum, m) => sum + m.kcal, 0);
    window.dailyTotalSugar = dailyMeals.reduce((sum, m) => sum + m.sugar, 0);
    window.dailyTotalProt = dailyMeals.reduce((sum, m) => sum + m.prot, 0);
    window.dailyTotalFat = dailyMeals.reduce((sum, m) => sum + m.fat, 0);
    window.saveToLocalStorage();
    window.updateProgressBar();
}

function renderMealList() {
    const listContainer = document.getElementById("daily-log-container");
    if (!listContainer) return;
    const lang = localStorage.getItem("lang") || "bg";
    const t = translations[lang];

    if (dailyMeals.length === 0) {
        listContainer.innerHTML = `<p style="text-align:center; color:#999;">Няма данни за днес.</p>`;
        return;
    }

    let html = "";
    const types = ["zakuska", "pred_objad", "objad", "sledobjad", "vecherja"];
    const keyMap = { zakuska: "my_diary21", pred_objad: "my_diary22", objad: "my_diary23", sledobjad: "my_diary24", vecherja: "my_diary25" };

    types.forEach(type => {
        const filtered = dailyMeals.filter(m => m.type === type);
        if (filtered.length > 0) {
            html += `<div style="margin-top:15px; font-weight:bold; border-bottom:2px solid #007bff; color:#007bff; padding-bottom:5px;">${(t[keyMap[type]] || type).toUpperCase()}</div>`;
            
            filtered.forEach(m => {
                // --- ЛОГИКА ЗА ИНСУЛИНОВ БАЛАНС ---
                const sugarPercentage = (m.sugar / m.grams) * 100;
                const isHighSugar = sugarPercentage > 10; // Над 10% захар е опасно
                const isBalanced = m.prot > (m.sugar * 1.5); // Протеинът трябва да е 1.5 пъти повече от захарта
                
                // Избор на статус съобщение
                let statusText = isBalanced ? t.safe_food : t.insulin_spike;
                let statusColor = isBalanced ? "#28a745" : "#ff4d4d";
                let borderColor = isBalanced ? "#28a745" : "#ff4d4d";

                if (isHighSugar && !isBalanced) {
                    statusText = t.high_sugar + "! " + t.need_protein;
                }

                html += `
                <div class="card" style="padding:12px; margin:8px 0; border-left: 6px solid ${borderColor}; background: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <div style="display:flex; justify-content:space-between; align-items: start;">
                        <strong style="font-size:14px; color:#333;">${m.name} (${m.grams}g)</strong>
                        <button onclick="removeMeal(${m.id})" style="color:#ccc; border:none; background:none; font-size:18px; cursor:pointer;">✕</button>
                    </div>
                    
                    <div style="margin: 5px 0;">
                        <span style="font-size:11px; font-weight:bold; color:${statusColor}; text-transform:uppercase;">
                            ${statusText}
                        </span>
                    </div>

                    <div style="font-size:12px; color:#555; display:flex; gap:10px; margin-top:4px;">
                        <span>🔥 ${m.kcal} kcal</span>
                        <span style="color:${isHighSugar ? 'red' : '#555'}">🍭 ${t.sugar_content || 'Захар'}: ${m.sugar.toFixed(1)}g</span>
                        <span style="color:#007bff">🥩 П: ${m.prot.toFixed(1)}g</span>
                    </div>

                    <div style="height:4px; background:#eee; margin-top:8px; border-radius:2px; overflow:hidden;">
                        <div style="width:${Math.min((m.prot / (m.sugar || 1)) * 50, 100)}%; background:#007bff; height:100%;"></div>
                    </div>
                </div>`;
            });
        }
    });
    listContainer.innerHTML = html;
}

window.removeMeal = (id) => {
    dailyMeals = dailyMeals.filter(m => m.id !== id);
    recalculateTotals();
    renderMealList();
};

window.clearMealStats = () => {
    if (confirm("Изтриване на всичко?")) {
        dailyMeals = []; recalculateTotals(); renderMealList();
    }
};
// Ако бутонът в HTML все още търси "addEntry", добави това:
window.addEntry = function() { console.log("Бутонът беше натиснат!"); };

// --- ЕКСПОРТ КЪМ ГЛОБАЛНИЯ ОБЕКТ (За да работят бутоните в HTML) ---
window.openMeal = openMeal;
window.closeMeal = closeMeal;
window.searchFood = searchFood;
window.startScanner = startScanner;
window.stopScanner = stopScanner;
window.selectTypeAndAdd = selectTypeAndAdd;
window.clearMealStats = clearMealStats;
window.removeMeal = removeMeal;
window.saveProductLocally = saveProductLocally;
window.updateProgressBar = updateProgressBar;

// Ако някой бутон в HTML все още търси "addEntry", го пренасочваме тук:
window.addEntry = function(data) {
    if(typeof addMealToLog === "function") {
        addMealToLog(data);
    } else {
        console.error("Функцията addMealToLog не е намерена!");
    }
};

// --- ИНИЦИАЛИЗАЦИЯ ПРИ ЗАРЕЖДАНЕ ---
document.addEventListener("DOMContentLoaded", () => {
    recalculateTotals();
    renderMealList();
    if (window.applyTranslations) window.applyTranslations();
});