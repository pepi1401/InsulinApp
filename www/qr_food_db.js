// qr_food_db.js

export const localFoodBase = [
    { 
        barcode: "3800001234567", // Истинският баркод от опаковката
        name: "Кисело мляко 3.2%", 
        sugar: 4.5, prot: 3.2, fat: 3.2, kcal: 62 
    },
    { 
        barcode: "3800213120112", 
        name: "Лютеница", 
        sugar: 12, prot: 2, fat: 8, kcal: 140 
    },
    { 
        barcode: "96192764", 
        name: "Fisherman`s Friend", 
        sugar: 95, prot: 0.5, fat: 0.5, kcal: 383 
    },
    { 
        barcode: "000000000000", 
        name: "Нов Продукт", 
        sugar: 0, prot: 0, fat: 0, kcal: 0 
    } // На последния продукт НЕ се слага запетая
];