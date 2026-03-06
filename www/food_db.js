export const localFoodBase = [
    // food_db.js
    // ===== MILK =====
{ name: "Прясно мляко (3.2%)", sugar: 4.7, prot: 3.4, fat: 3.2, kcal: 60 },
{ name: "Свежо млеко (3.2%)", sugar: 4.7, prot: 3.4, fat: 3.2, kcal: 60 },
{ name: "Fresh milk (3.2%)", sugar: 4.7, prot: 3.4, fat: 3.2, kcal: 60 },

// ===== YOGURT =====
{ name: "Кисело мляко (3.6%)", sugar: 4.7, prot: 3.5, fat: 3.6, kcal: 61 },
{ name: "Кисело млеко (3.6%)", sugar: 4.7, prot: 3.5, fat: 3.6, kcal: 61 },
{ name: "Yogurt (3.6%)", sugar: 4.7, prot: 3.5, fat: 3.6, kcal: 61 },

{ name: "Кисело мляко (2%)", sugar: 4.8, prot: 3.6, fat: 2.0, kcal: 50 },
{ name: "Кисело млеко (2%)", sugar: 4.8, prot: 3.6, fat: 2.0, kcal: 50 },
{ name: "Yogurt (2%)", sugar: 4.8, prot: 3.6, fat: 2.0, kcal: 50 },

{ name: "Кисело мляко (0.1%)", sugar: 4.9, prot: 3.6, fat: 0.1, kcal: 45 },
{ name: "Кисело млеко (0.1%)", sugar: 4.9, prot: 3.6, fat: 0.1, kcal: 45 },
{ name: "Low-fat yogurt (0.1%)", sugar: 4.9, prot: 3.6, fat: 0.1, kcal: 45 },

// ===== KEFIR / AYRAN =====
{ name: "Кефир (2%)", sugar: 4.5, prot: 3.3, fat: 2.0, kcal: 50 },
{ name: "Кефир (2%)", sugar: 4.5, prot: 3.3, fat: 2.0, kcal: 50 },
{ name: "Kefir (2%)", sugar: 4.5, prot: 3.3, fat: 2.0, kcal: 50 },

{ name: "Айрян", sugar: 3.0, prot: 1.7, fat: 1.0, kcal: 30 },
{ name: "Матеница / Айран", sugar: 3.0, prot: 1.7, fat: 1.0, kcal: 30 },
{ name: "Ayran", sugar: 3.0, prot: 1.7, fat: 1.0, kcal: 30 },

// ===== COTTAGE / CURD =====
{ name: "Извара (нискомаслена)", sugar: 3.0, prot: 18.0, fat: 0.5, kcal: 98 },
{ name: "Урда / Изварка (нискомаслена)", sugar: 3.0, prot: 18.0, fat: 0.5, kcal: 98 },
{ name: "Cottage cheese (low-fat)", sugar: 3.0, prot: 18.0, fat: 0.5, kcal: 98 },

{ name: "Извара (пълномаслена) / Урда (полнoмасна) / Cottage cheese (full-fat)", sugar: 3.0, prot: 16.0, fat: 9.0, kcal: 170 },

// ===== CHEESE =====
{ name: "Сирене краве / Кравјо сирење / White cheese (cow)", sugar: 1.5, prot: 17.0, fat: 21.0, kcal: 260 },

{ name: "Сирене овче / Овчо сирење / Sheep cheese", sugar: 1.0, prot: 18.0, fat: 25.0, kcal: 300 },

{ name: "Кашкавал / Yellow cheese", sugar: 1.5, prot: 26.0, fat: 28.0, kcal: 360 },
// Корекция за Пармезан и Масло (математически по-точно):
{ name: "Пармезан / Parmesan", sugar: 0.1, prot: 38.0, fat: 26.0, kcal: 392 },

{ name: "Масло краве / Путер / Butter", sugar: 0.1, prot: 0.8, fat: 82.0, kcal: 744 },

// ===== CREAM / BUTTER =====
{ name: "Сметана (20%)", sugar: 3.0, prot: 2.5, fat: 20.0, kcal: 200 },
{ name: "Павлака (20%)", sugar: 3.0, prot: 2.5, fat: 20.0, kcal: 200 },
{ name: "Cream (20%)", sugar: 3.0, prot: 2.5, fat: 20.0, kcal: 200 },


// ===== BREAD & MEALS (Стойности за 100г) =====

// Бял хляб - средно 230-240 ккал на 100г
{ name: "Бял хляб / Бел леб / White bread", sugar: 4.0, prot: 7.5, fat: 3.0, kcal: 235, perPiece: 35 },

// Пълнозърнест хляб
{ name: "Пълнозърнест хляб / Интегрален леб / Whole wheat bread", sugar: 4.5, prot: 9.0, fat: 2.5, kcal: 247, perPiece: 35 },

// Ръжен хляб
{ name: "Ръжен хляб / Ржан леб / Rye bread", sugar: 3.8, prot: 8.5, fat: 1.7, kcal: 259, perPiece: 35 },

// Сарма (лозова или зелева с ориз и кайма) - около 140-150 ккал на 100г
{ name: "Сарма / Sarma", sugar: 0.7, prot: 6.5, fat: 7.0, kcal: 145, perPiece: 70 },

// Пълнена чушка (с ориз и кайма) - около 110-120 ккал на 100г
{ name: "Пълнена чушка / Полнета пиперка / Stuffed Pepper", sugar: 2.0, prot: 6.0, fat: 6.5, kcal: 115, perPiece: 150 },

// Фалафел (пържен) - около 320 ккал на 100г
{ name: "Фалафел / Falafel", sugar: 0.8, prot: 13.0, fat: 18.0, kcal: 320, perPiece: 25 },

// Маслина (1 брой средна ~5г)
{ name: "Маслина (1 брой)", sugar: 0.0, prot: 0.1, fat: 0.7, kcal: 7, perPiece: 5},
{ name: "Маслина (1 парче)", sugar: 0.0, prot: 0.1, fat: 0.7, kcal: 7, perPiece: 5 },
{ name: "Olive (1 piece)", sugar: 0.0, prot: 0.1, fat: 0.7, kcal: 7, perPiece: 5 },

// ===== BUNS / PASTRIES =====
{ name: "Кифла", sugar: 8.0, prot: 7.0, fat: 9.0, kcal: 320 },
{ name: "Кифла", sugar: 8.0, prot: 7.0, fat: 9.0, kcal: 320 },
{ name: "Sweet bun", sugar: 8.0, prot: 7.0, fat: 9.0, kcal: 320 },

{ name: "Кроасан", sugar: 6.0, prot: 8.0, fat: 21.0, kcal: 406 },
{ name: "Кроасан", sugar: 6.0, prot: 8.0, fat: 21.0, kcal: 406 },
{ name: "Croissant", sugar: 6.0, prot: 8.0, fat: 21.0, kcal: 406 },

{ name: "Закуска със сирене", sugar: 3.5, prot: 9.0, fat: 18.0, kcal: 330 },
{ name: "Печиво со сирење", sugar: 3.5, prot: 9.0, fat: 18.0, kcal: 330 },
{ name: "Cheese pastry", sugar: 3.5, prot: 9.0, fat: 18.0, kcal: 330 },

// ===== BANITSA =====
{ name: "Баница със сирене / Баница со сирење / Banitsa with cheese", sugar: 2.5, prot: 10.0, fat: 22.0, kcal: 330, perPiece: 150 },

{ name: "Баница със спанак", sugar: 2.8, prot: 8.5, fat: 20.0, kcal: 330 },
{ name: "Баница со спанаќ", sugar: 2.8, prot: 8.5, fat: 20.0, kcal: 330 },
{ name: "Spinach banitsa", sugar: 2.8, prot: 8.5, fat: 20.0, kcal: 330 },

// ===== PIZZA =====
{ name: "Пица Маргарита", sugar: 3.6, prot: 11.0, fat: 10.0, kcal: 266 },
{ name: "Пица Маргарита", sugar: 3.6, prot: 11.0, fat: 10.0, kcal: 266 },
{ name: "Pizza Margherita", sugar: 3.6, prot: 11.0, fat: 10.0, kcal: 266 },

{ name: "Пица с шунка", sugar: 3.5, prot: 12.0, fat: 11.0, kcal: 280 },
{ name: "Пица со шунка", sugar: 3.5, prot: 12.0, fat: 11.0, kcal: 280 },
{ name: "Ham pizza", sugar: 3.5, prot: 12.0, fat: 11.0, kcal: 280 },

// ===== OTHER DOUGH PRODUCTS =====
{ name: "Питка", sugar: 4.5, prot: 8.0, fat: 2.0, kcal: 250 },
{ name: "Погача", sugar: 4.5, prot: 8.0, fat: 2.0, kcal: 250 },
{ name: "Bread loaf", sugar: 4.5, prot: 8.0, fat: 2.0, kcal: 250 },

{ name: "Палачинка", sugar: 5.0, prot: 6.0, fat: 7.0, kcal: 227 },
{ name: "Палачинка", sugar: 5.0, prot: 6.0, fat: 7.0, kcal: 227 },
{ name: "Pancake", sugar: 5.0, prot: 6.0, fat: 7.0, kcal: 227 },

{ name: "Вафла Гофрета 15 gr. / Waffle - 15 gr.", sugar: 15.0, prot: 5.0, fat: 10.0, kcal: 312 },

/// ===== EGGS (Стойности на 100г) =====

// Цяло яйце - 100г са около 2 яйца. 1 брой е 50г.
{ name: "Яйце / Јајце / Egg", sugar: 0.7, prot: 12.6, fat: 10.6, kcal: 155, perPiece: 50 },

// БЕЛТЪК - 100г белтък съдържат:
{ name: "Белтък / Белка / Egg white", sugar: 0.7, prot: 11.0, fat: 0.2, kcal: 52, perPiece: 33 },

// ЖЪЛТЪК - 100г жълтък съдържат:
{ name: "Жълтък / Жолчка / Egg yolk", sugar: 0.6, prot: 16.0, fat: 26.5, kcal: 322, perPiece: 17 },

// БЪРКАНИ ЯЙЦА (на 100г)
// Тук се смята и мазнината за пържене
{ name: "Бъркани яйца / Кајгана / Scrambled eggs", sugar: 1.0, prot: 10.0, fat: 12.0, kcal: 160 },

// ОМЛЕТ (на 100г)
{ name: "Омлет / Omelette", sugar: 0.8, prot: 11.0, fat: 13.0, kcal: 170 },


// ===== CHICKEN (Стойности на 100г) =====

// Пилешко крилце (печено) - Средно 290 kcal на 100г (заради кожата и мазнината)
{ name: "Пилешко крилце (печено) / Пилешко крилце / Chicken wing", sugar: 0, prot: 27.0, fat: 19.0, kcal: 290, perPiece: 40 },

// Пилешко филе (печено) - Стойностите ти тук са перфектни!
{ name: "Пилешко филе (печено) / Chicken breast", sugar: 0.0, prot: 31.0, fat: 3.6, kcal: 165 },

// Пилешко бутче (печено) - Много точни стойности
{ name: "Пилешко бутче / Пилешки копан / Chicken drumstick", sugar: 0.0, prot: 27.0, fat: 11.0, kcal: 215, perPiece: 100 },

// Пилешки дробчета - Точно така
{ name: "Пилешки дробчета / Пилешки џигер / Chicken liver", sugar: 0.0, prot: 24.0, fat: 6.0, kcal: 167 },

// СВИНСКИ ДРОБ (Печен/Пържен на 100г)
{ name: "Свински дроб (сготвен)", sugar: 2.5, prot: 26.0, fat: 4.4, kcal: 165 },
{ name: "Свински џигер (готвен)", sugar: 2.5, prot: 26.0, fat: 4.4, kcal: 165 },
{ name: "Pork liver (cooked)", sugar: 2.5, prot: 26.0, fat: 4.4, kcal: 165 },

// ТЕЛЕШКИ ДРОБ (Печен/Пържен на 100г)
{ name: "Телешки дроб (сготвен)", sugar: 3.9, prot: 27.0, fat: 5.0, kcal: 190 },
{ name: "Телешки џигер (готвен)", sugar: 3.9, prot: 27.0, fat: 5.0, kcal: 190 },
{ name: "Beef liver (cooked)", sugar: 3.9, prot: 27.0, fat: 5.0, kcal: 190 },

// ===== PROCESSED =====
{ name: "Пилешки колбас", sugar: 1.5, prot: 15.0, fat: 20.0, kcal: 250 },
{ name: "Пилешка колбасица", sugar: 1.5, prot: 15.0, fat: 20.0, kcal: 250 },
{ name: "Chicken sausage", sugar: 1.5, prot: 15.0, fat: 20.0, kcal: 250 },

{ name: "Пилешки кренвирш", sugar: 2.0, prot: 12.0, fat: 18.0, kcal: 220 },
{ name: "Пилешки виршли", sugar: 2.0, prot: 12.0, fat: 18.0, kcal: 220 },
{ name: "Chicken hot dog", sugar: 2.0, prot: 12.0, fat: 18.0, kcal: 220 },

{ name: "Панирано пилешко филе / Breaded chicken breast", sugar: 3.0, prot: 20.0, fat: 13.0, kcal: 250, perPiece: 120 } ,
// 120г е среден шницел, ако са нагетси - около 20-25г на бройка.
    // ===== PORK  =====
// ===== COOKED =====
{ name: "Свинска вратна пържола (печено)", sugar: 0.0, prot: 25.0, fat: 18.0, kcal: 262 },
{ name: "Свински врат (печен)", sugar: 0.0, prot: 25.0, fat: 18.0, kcal: 262 },
{ name: "Pork neck steak (cooked)", sugar: 0.0, prot: 25.0, fat: 18.0, kcal: 262 },

{ name: "Свинско филе/котлет (печен)", sugar: 0.0, prot: 28.0, fat: 6.0, kcal: 172 },
{ name: "Свинско филе (печено)", sugar: 0.0, prot: 28.0, fat: 6.0, kcal: 172 },
{ name: "Pork loin/fillet (cooked)", sugar: 0.0, prot: 28.0, fat: 6.0, kcal: 172 },

// ===== PROCESSED =====
{ name: "Свинска кайма", sugar: 0.0, prot: 17.0, fat: 20.0, kcal: 250 },
{ name: "Свинско мелено месо", sugar: 0.0, prot: 17.0, fat: 20.0, kcal: 250 },
{ name: "Ground pork", sugar: 0.0, prot: 17.0, fat: 20.0, kcal: 250 },

{ name: "Бекон", sugar: 1.0, prot: 12.0, fat: 42.0, kcal: 450 },
{ name: "Сланина", sugar: 1.0, prot: 12.0, fat: 42.0, kcal: 450 },
{ name: "Bacon", sugar: 1.0, prot: 12.0, fat: 42.0, kcal: 450 },

{ name: "Свински суджук", sugar: 1.5, prot: 22.0, fat: 40.0, kcal: 460 },
{ name: "Свински сув колбас", sugar: 1.5, prot: 22.0, fat: 40.0, kcal: 460 },
{ name: "Pork sausage (dry)", sugar: 1.5, prot: 22.0, fat: 40.0, kcal: 460 },

{ name: "Свински кренвирш", sugar: 2.0, prot: 11.0, fat: 24.0, kcal: 270 },
{ name: "Свински виршли", sugar: 2.0, prot: 11.0, fat: 24.0, kcal: 270 },
{ name: "Pork hot dog", sugar: 2.0, prot: 11.0, fat: 24.0, kcal: 270 },

{ name: "Сланина / Salo / Pork fat", sugar: 0.0, prot: 2.0, fat: 85.0, kcal: 750 },
// ===== BEEF RAW =====

{ name: "Телешки врат ", sugar: 0.0, prot: 20.0, fat: 10.0, kcal: 190 },
{ name: "Говедски врат ", sugar: 0.0, prot: 20.0, fat: 10.0, kcal: 190 },
{ name: "Beef neck", sugar: 0.0, prot: 20.0, fat: 10.0, kcal: 190 },

{ name: "Телешки котлет ", sugar: 0.0, prot: 22.0, fat: 8.0, kcal: 180 },
{ name: "Говедска кременадла ", sugar: 0.0, prot: 22.0, fat: 8.0, kcal: 180 },
{ name: "Beef chop ", sugar: 0.0, prot: 22.0, fat: 8.0, kcal: 180 },

{ name: "Телешки гърди ", sugar: 0.0, prot: 19.0, fat: 15.0, kcal: 230 },
{ name: "Говедски гради ", sugar: 0.0, prot: 19.0, fat: 15.0, kcal: 230 },
{ name: "Beef brisket ", sugar: 0.0, prot: 19.0, fat: 15.0, kcal: 230 },

// ===== COOKED =====
{ name: "Телешко филе (печено)", sugar: 0.0, prot: 29.0, fat: 5.0, kcal: 170, perPiece: 200 },
{ name: "Beef tenderloin (roasted)", sugar: 0.0, prot: 29.0, fat: 5.0, kcal: 170, perPiece: 200 },

{ name: "Телешки стек", sugar: 0.0, prot: 27.0, fat: 12.0, kcal: 250 },
{ name: "Говедски стек", sugar: 0.0, prot: 27.0, fat: 12.0, kcal: 250 },
{ name: "Beef steak", sugar: 0.0, prot: 27.0, fat: 12.0, kcal: 250 },

// ===== GROUND & PROCESSED =====
{ name: "Телешка кайма", sugar: 0.0, prot: 20.0, fat: 15.0, kcal: 250 },
{ name: "Говедско мелено месо", sugar: 0.0, prot: 20.0, fat: 15.0, kcal: 250 },
{ name: "Ground beef", sugar: 0.0, prot: 20.0, fat: 15.0, kcal: 250 },

{ name: "Телешки суджук", sugar: 1.0, prot: 24.0, fat: 38.0, kcal: 450 },
{ name: "Говедски сув колбас", sugar: 1.0, prot: 24.0, fat: 38.0, kcal: 450 },
{ name: "Beef dry sausage", sugar: 1.0, prot: 24.0, fat: 38.0, kcal: 450 },

{ name: "Телешки кренвирш", sugar: 1.5, prot: 12.0, fat: 20.0, kcal: 240, perPiece: 50 },
{ name: "Говедски виршли", sugar: 1.5, prot: 12.0, fat: 20.0, kcal: 240, perPiece: 50 },
{ name: "Beef hot dog", sugar: 1.5, prot: 12.0, fat: 20.0, kcal: 240, perPiece: 50 },


// ===== WHITE FISH =====
// Треска печена
{ name: "Треска (печена) / Cod (roasted)", sugar: 0.0, prot: 22.0, fat: 0.9, kcal: 105 },

// Хек печен
{ name: "Хек (печен)", sugar: 0.0, prot: 21.0, fat: 2.5, kcal: 115, perPiece: 150 },
{ name: "Ослич (печен)", sugar: 0.0, prot: 21.0, fat: 2.5, kcal: 115, perPiece: 150 },
{ name: "Hake (roasted)", sugar: 0.0, prot: 21.0, fat: 2.5, kcal: 115, perPiece: 150 },

{ name: "Скумрия (печена) / Скуша (печена) / Mackerel", sugar: 0.0, prot: 22.0, fat: 18.0, kcal: 260, perPiece: 200 }, // Една средна скумрия е около 200-250г след чистене
{ name: "Сьомга (печена) / Лосос (печен) / Salmon", sugar: 0.0, prot: 25.0, fat: 15.0, kcal: 240, perPiece: 150 }, // Стандартно филе
{ name: "Пъстърва (печена) / Пастрмка (печена) / Trout", sugar: 0.0, prot: 24.0, fat: 8.0, kcal: 180, perPiece: 250 } ,// Цяла пъстърва (порция)

// Хек пържен
{ name: "Хек (пържен)", sugar: 0.0, prot: 19.0, fat: 9.0, kcal: 160 },
{ name: "Ослич (пржен)", sugar: 0.0, prot: 19.0, fat: 9.0, kcal: 160 },
{ name: "Hake (fried)", sugar: 0.0, prot: 19.0, fat: 9.0, kcal: 160 },

// Пъстърва пържена
{ name: "Пъстърва (пържена)", sugar: 0.0, prot: 21.0, fat: 12.0, kcal: 210 },
{ name: "Пастрмка (пржена)", sugar: 0.0, prot: 21.0, fat: 12.0, kcal: 210 },
{ name: "Trout (fried)", sugar: 0.0, prot: 21.0, fat: 12.0, kcal: 210 },

// ===== CANNED =====

{ name: "Риба тон (вода) / Туна (конзерва во вода) / Tuna (water)", sugar: 0.0, prot: 25.0, fat: 1.0, kcal: 116, perPiece: 160 }, // Стандартна консерва (бруто/нето варира)
{ name: "Сардини (консерва) / Sardines", sugar: 0.0, prot: 25.0, fat: 11.0, kcal: 208, perPiece: 125 }, // Стандартна малка консерва
{ name: "Скариди / Ракчиња / Shrimp", sugar: 0.0, prot: 20.0, fat: 1.0, kcal: 99, perPiece: 10 }, // Голяма скарида е около 10-15г

{ name: "Риба тон (консерва в олио) / Туна (конзерва во масло) / Tuna (canned in oil)", sugar: 0.0, prot: 24.0, fat: 8.0, kcal: 198 },

{ name: "Калмари - варени, печени / Лигњи - варен, печен / Squid - boiled, roasted", sugar: 0.0, prot: 16.0, fat: 1.5, kcal: 92 },

{ name: "Пържени калмари (панирани) / Лигњи - поховани / Fried squid", sugar: 8.0, prot: 15.0, fat: 12.0, kcal: 215 },

{ name: "Миди", sugar: 0.0, prot: 24.0, fat: 4.0, kcal: 172 },
{ name: "Школки (миди)", sugar: 0.0, prot: 24.0, fat: 4.0, kcal: 172 },
{ name: "Mussels", sugar: 0.0, prot: 24.0, fat: 4.0, kcal: 172 },


// ===== COMMON FRUITS (Стойности за 100г) =====

{ name: "Ябълка / Јаболко / Apple", sugar: 10.4, prot: 0.3, fat: 0.2, kcal: 52, perPiece: 180 },

{ name: "Банан / Банана / Banana", sugar: 12.2, prot: 1.1, fat: 0.3, kcal: 89, perPiece: 120 },

{ name: "Портокал / Orange", sugar: 9.4, prot: 0.9, fat: 0.1, kcal: 47, perPiece: 130 },

{ name: "Мандарина / Mandarin", sugar: 10.6, prot: 0.8, fat: 0.3, kcal: 53, perPiece: 80 },

{ name: "Круша / Pear", sugar: 10.0, prot: 0.4, fat: 0.1, kcal: 57, perPiece: 170 },

// ===== BERRIES (На 100г) =====
{ name: "Ягоди / Јагоди / Strawberries", sugar: 4.9, prot: 0.7, fat: 0.3, kcal: 32 },

{ name: "Боровинки / Боровинки / Blueberries", sugar: 10.0, prot: 0.7, fat: 0.3, kcal: 57 },

// ===== BERRIES & STONE FRUITS (на 100г) =====
{ name: "Малини / Raspberries", sugar: 4.4, prot: 1.2, fat: 0.7, kcal: 52 },

{ name: "Праскова / Праска / Peach", sugar: 8.4, prot: 0.9, fat: 0.3, kcal: 39, perPiece: 150 },

{ name: "Кайсия / Кајсија / Apricot", sugar: 9.0, prot: 1.4, fat: 0.4, kcal: 48, perPiece: 35 },

{ name: "Череша / Цреша / Cherry", sugar: 12.0, prot: 1.0, fat: 0.3, kcal: 50, perPiece: 8 },

// ===== TROPICAL (на 100г) =====
{ name: "Ананас / Pineapple", sugar: 10.0, prot: 0.5, fat: 0.1, kcal: 50, perPiece: 100 }, // 100г за кръгче/парче

{ name: "Киви / Kiwi", sugar: 9.0, prot: 1.1, fat: 0.5, kcal: 61, perPiece: 70 },

{ name: "Манго / Mango", sugar: 14.0, prot: 0.8, fat: 0.4, kcal: 60, perPiece: 200 }, // чисто месо без костилка

// ===== LEGUMES (Стойности за 100г СУХ продукт) =====
{ name: "Леща (суха) / Леќа (сува) / Lentils (dry)", sugar: 2.0, prot: 24.0, fat: 1.1, kcal: 353 },

{ name: "Бял боб (сух) / Бел грав (сув) / White Beans (dry)", sugar: 2.1, prot: 21.0, fat: 1.2, kcal: 333 },

{ name: "Нахут (сух) / Наут (сув) / Chickpeas (dry)", sugar: 4.8, prot: 19.0, fat: 6.0, kcal: 364 },

{ name: "Грах (сух) / Грашок (сув) / Peas (dry)", sugar: 8.0, prot: 24.5, fat: 1.2, kcal: 341 },

// КРАТЪК СЪВЕТ: Добави поне един "сготвен" вариант за ориентир:
{ name: "Боб чорба / Грав (готвен) / Cooked Beans", sugar: 1.5, prot: 8.0, fat: 4.0, kcal: 120 },

// Киноа
{ name: "Киноа", sugar: 0.0, prot: 14.1, fat: 6.1, kcal: 368 },
{ name: "Киноа", sugar: 0.0, prot: 14.1, fat: 6.1, kcal: 368 },
{ name: "Quinoa", sugar: 0.0, prot: 14.1, fat: 6.1, kcal: 368 },

// Елда
{ name: "Елда", sugar: 0.0, prot: 13.0, fat: 3.4, kcal: 343 },
{ name: "Хељда", sugar: 0.0, prot: 13.0, fat: 3.4, kcal: 343 },
{ name: "Buckwheat", sugar: 0.0, prot: 13.0, fat: 3.4, kcal: 343 },

// Предложение за добавяне на "(суров)" към имената:
{ name: "Бял ориз (суров) / Бел ориз (суров) / White Rice (dry)", sugar: 0.1, prot: 6.5, fat: 0.5, kcal: 350 },
{ name: "Бял ориз (варен) / White Rice (cooked)", sugar: 0.1, prot: 2.7, fat: 0.3, kcal: 130 },
{ name: "Овесени ядки / Овесни снегулки / Oats", sugar: 1.0, prot: 13.5, fat: 7.0, kcal: 389 },

// Кафяв ориз
{ name: "Кафяв ориз", sugar: 0.4, prot: 7.5, fat: 2.7, kcal: 360 },
{ name: "Интегрален ориз", sugar: 0.4, prot: 7.5, fat: 2.7, kcal: 360 },
{ name: "Brown Rice", sugar: 0.4, prot: 7.5, fat: 2.7, kcal: 360 },

// Булгур
{ name: "Булгур", sugar: 0.4, prot: 12.0, fat: 1.3, kcal: 342 },
{ name: "Булгур", sugar: 0.4, prot: 12.0, fat: 1.3, kcal: 342 },
{ name: "Bulgur", sugar: 0.4, prot: 12.0, fat: 1.3, kcal: 342 },


// ===== GREEN VEGETABLES (Стойности за 100г суров продукт) =====

// Броколи
{ name: "Броколи", sugar: 1.7, prot: 2.8, fat: 0.4, kcal: 34 },
{ name: "Брокула", sugar: 1.7, prot: 2.8, fat: 0.4, kcal: 34 },
{ name: "Broccoli", sugar: 1.7, prot: 2.8, fat: 0.4, kcal: 34 },

// Карфиол
{ name: "Карфиол", sugar: 1.9, prot: 1.9, fat: 0.3, kcal: 25 },
{ name: "Карфиол (МК)", sugar: 1.9, prot: 1.9, fat: 0.3, kcal: 25 },
{ name: "Cauliflower", sugar: 1.9, prot: 1.9, fat: 0.3, kcal: 25 },

// Кейл (Къдраво зеле)
{ name: "Кейл", sugar: 2.3, prot: 4.3, fat: 0.9, kcal: 49 },
{ name: "Кељ", sugar: 2.3, prot: 4.3, fat: 0.9, kcal: 49 },
{ name: "Kale", sugar: 2.3, prot: 4.3, fat: 0.9, kcal: 49 },

// Брюкселско зеле
{ name: "Брюкселско зеле", sugar: 2.2, prot: 3.4, fat: 0.3, kcal: 43 },
{ name: "Прокељ", sugar: 2.2, prot: 3.4, fat: 0.3, kcal: 43 },
{ name: "Brussels Sprouts", sugar: 2.2, prot: 3.4, fat: 0.3, kcal: 43 },

// Обикновено зеле
{ name: "Зеле", sugar: 3.2, prot: 1.3, fat: 0.1, kcal: 25 },
{ name: "Зелка", sugar: 3.2, prot: 1.3, fat: 0.1, kcal: 25 },
{ name: "Cabbage", sugar: 3.2, prot: 1.3, fat: 0.1, kcal: 25 },

// Спанак
{ name: "Спанак", sugar: 0.4, prot: 2.9, fat: 0.4, kcal: 23 },
{ name: "Спанаќ", sugar: 0.4, prot: 2.9, fat: 0.4, kcal: 23 },
{ name: "Spinach", sugar: 0.4, prot: 2.9, fat: 0.4, kcal: 23 },

// Маруля / Салата
{ name: "Маруля / Зелена салата", sugar: 0.7, prot: 1.4, fat: 0.2, kcal: 15 },
{ name: "Марула", sugar: 0.7, prot: 1.4, fat: 0.2, kcal: 15 },
{ name: "Lettuce", sugar: 0.7, prot: 1.4, fat: 0.2, kcal: 15 },

// Рукола
{ name: "Рукола", sugar: 2.0, prot: 2.6, fat: 0.7, kcal: 25 },
{ name: "Рукола", sugar: 2.0, prot: 2.6, fat: 0.7, kcal: 25 },
{ name: "Arugula", sugar: 2.0, prot: 2.6, fat: 0.7, kcal: 25 },

// Маруля / Айсберг
{ name: "Зелена салата", sugar: 0.8, prot: 1.4, fat: 0.2, kcal: 15 },
{ name: "Зелена салата", sugar: 0.8, prot: 1.4, fat: 0.2, kcal: 15 },
{ name: "Lettuce", sugar: 0.8, prot: 1.4, fat: 0.2, kcal: 15 },

{ name: "Тиквички / Zucchini", sugar: 2.5, prot: 1.2, fat: 0.3, kcal: 17, perPiece: 250 }, // Една средна тиквичка
{ name: "Краставица / Cucumber", sugar: 1.7, prot: 0.7, fat: 0.1, kcal: 15, perPiece: 300 }, // Една голяма дълга краставица
{ name: "Аспержи / Asparagus", sugar: 1.9, prot: 2.2, fat: 0.1, kcal: 20, perPiece: 20 }, // Едно стръкче е около 20-25г

{ name: "Домати / Tomatoes", sugar: 2.6, prot: 0.9, fat: 0.2, kcal: 18, perPiece: 150 }, // Среден домат
{ name: "Чушки / Пиперки / Peppers", sugar: 4.2, prot: 1.0, fat: 0.3, kcal: 31, perPiece: 70 }, // Една средна чушка
{ name: "Моркови / Carrots", sugar: 4.7, prot: 0.9, fat: 0.2, kcal: 41, perPiece: 60 }, // Един среден морков
{ name: "Картофи / Компири / Potatoes", sugar: 0.8, prot: 2.0, fat: 0.1, kcal: 77, perPiece: 150 } ,// Един среден картоф
// Патладжан
{ name: "Патладжан", sugar: 3.5, prot: 1.0, fat: 0.2, kcal: 25 },
{ name: "Модар патлиџан", sugar: 3.5, prot: 1.0, fat: 0.2, kcal: 25 },
{ name: "Eggplant", sugar: 3.5, prot: 1.0, fat: 0.2, kcal: 25 },

// Зелен фасул (Зелен боб)
{ name: "Зелен фасул", sugar: 3.3, prot: 1.8, fat: 0.2, kcal: 31 },
{ name: "Боранија", sugar: 3.3, prot: 1.8, fat: 0.2, kcal: 31 },
{ name: "Green Beans", sugar: 3.3, prot: 1.8, fat: 0.2, kcal: 31 },

{ name: "Лук / Кромид / Onion", sugar: 4.2, prot: 1.1, fat: 0.1, kcal: 40, perPiece: 110 }, // Една средна глава лук
{ name: "Чесън / Garlic", sugar: 1.0, prot: 6.4, fat: 0.5, kcal: 149, perPiece: 3 }, // Една скилидка (clove)
{ name: "Гъби / Печурки / Mushrooms", sugar: 2.0, prot: 3.1, fat: 0.3, kcal: 22, perPiece: 20 }, // Една средна печурка
{ name: "Репички / Ротквици / Radishes", sugar: 1.9, prot: 0.7, fat: 0.1, kcal: 16, perPiece: 15 }, // Една репичка

// Цвекло
{ name: "Цвекло", sugar: 6.8, prot: 1.6, fat: 0.2, kcal: 43 },
{ name: "Цвекло", sugar: 6.8, prot: 1.6, fat: 0.2, kcal: 43 },
{ name: "Beets", sugar: 6.8, prot: 1.6, fat: 0.2, kcal: 43 },

// Тиква (Цигулка)
{ name: "Тиква", sugar: 2.8, prot: 1.0, fat: 0.1, kcal: 26 },
{ name: "Тиква", sugar: 2.8, prot: 1.0, fat: 0.1, kcal: 26 },
{ name: "Pumpkin", sugar: 2.8, prot: 1.0, fat: 0.1, kcal: 26 },
// Ципура
{ name: "Ципура", sugar: 0.0, prot: 19.7, fat: 1.9, kcal: 96 },
{ name: "Орада", sugar: 0.0, prot: 19.7, fat: 1.9, kcal: 96 },
{ name: "Sea Bream", sugar: 0.0, prot: 19.7, fat: 1.9, kcal: 96 },

// Лаврак
{ name: "Лаврак", sugar: 0.0, prot: 18.4, fat: 2.3, kcal: 97 },
{ name: "Бранцин", sugar: 0.0, prot: 18.4, fat: 2.3, kcal: 97 },
{ name: "Sea Bass", sugar: 0.0, prot: 18.4, fat: 2.3, kcal: 97 },

// Шаран
{ name: "Шаран", sugar: 0.0, prot: 18.0, fat: 5.6, kcal: 127 },
{ name: "Крап", sugar: 0.0, prot: 18.0, fat: 5.6, kcal: 127 },
{ name: "Carp", sugar: 0.0, prot: 18.0, fat: 5.6, kcal: 127 },

// Сом
{ name: "Сом", sugar: 0.0, prot: 16.5, fat: 4.8, kcal: 115 },
{ name: "Сом", sugar: 0.0, prot: 16.5, fat: 4.8, kcal: 115 },
{ name: "Catfish", sugar: 0.0, prot: 16.5, fat: 4.8, kcal: 115 },

// Бяла риба (Смути)
{ name: "Бяла риба", sugar: 0.0, prot: 19.0, fat: 0.7, kcal: 84 },
{ name: "Смуѓ", sugar: 0.0, prot: 19.0, fat: 0.7, kcal: 84 },
{ name: "Zander", sugar: 0.0, prot: 19.0, fat: 0.7, kcal: 84 },

// Лютеница (Домашна/Търговска - средна стойност)
{ name: "Лютеница / Lutenica", sugar: 10.0, prot: 1.5, fat: 7.0, kcal: 110 },

// Ајвар (Македонски - обикновено е по-мазен)
{ name: "Айвар / Ајвар / Ajvar", sugar: 6.0, prot: 1.5, fat: 12.0, kcal: 140 },

// Руска салата (заради майонезата)
{ name: "Руска салата / Russian Salad", sugar: 3.0, prot: 4.0, fat: 18.0, kcal: 190 },

// Майонеза (Търговска)
{ name: "Майонеза / Мајонез / Mayonnaise", sugar: 2.5, prot: 1.0, fat: 70.0, kcal: 640 },

// Горчица
{ name: "Горчица / Сенф / Mustard", sugar: 3.0, prot: 4.0, fat: 4.0, kcal: 66 },

// Пастърмалия (средна стойност на 100г)
{ name: "Пастърмалия / Пастрмајлија", sugar: 1.0, prot: 12.0, fat: 14.0, kcal: 280 },

// Мекица (пържено тесто)
{ name: "Мекица / Mekitsa", sugar: 1.0, prot: 6.0, fat: 12.0, kcal: 290, perPiece: 80 },

// Геврек
{ name: "Геврек / Ѓеврек / Simit/Pretzel", sugar: 4.0, prot: 9.0, fat: 2.0, kcal: 275, perPiece: 100 },

// Орехи
{ name: "Орехи / Ореви / Walnuts", sugar: 2.6, prot: 15.0, fat: 65.0, kcal: 654 },

// Бадеми (Сурови)
{ name: "Бадеми / Almonds", sugar: 4.0, prot: 21.0, fat: 50.0, kcal: 579 },

// Печени фъстъци
{ name: "Фъстъци / Кикиритки / Peanuts", sugar: 4.0, prot: 26.0, fat: 49.0, kcal: 567 },

// Слънчогледови семки (белени)
{ name: "Слънчоглед / Сончоглед / Sunflower seeds", sugar: 2.6, prot: 21.0, fat: 51.0, kcal: 584 },

// ===== ОХРИДСКИ ЃЕВРЕК (Специфични вредности) =====

// Охридски варен ѓеврек (Бел / Посен) - Обикновено е само брашно, вода и сол
{ name: "Охридски варен ѓеврек (бел)", sugar: 1.5, prot: 8.5, fat: 1.0, kcal: 250, perPiece: 80 },

// Охридски ѓеврек со сусам (Печен) 
// Тука калориите се повисоки заради маслото и сусамот (сусамот е 50% масти!)
{ name: "Охридски ѓеврек со сусам", sugar: 2.5, prot: 10.5, fat: 8.5, kcal: 330, perPiece: 100 },

// Црн ѓеврек (Интегрален)
{ name: "Охридски црн ѓеврек", sugar: 2.0, prot: 9.5, fat: 1.5, kcal: 235, perPiece: 80 },

// ===== ДРУГИ МАКЕДОНСКИ СПЕЦИЈАЛИТЕТИ =====

// Симит погача (само лебот, без мрсното)
{ name: "Симит погача (леб)", sugar: 2.0, prot: 8.0, fat: 3.5, kcal: 270, perPiece: 150 },

// Бурек со месо (на 100г - ова е многу калорично!)
{ name: "Бурек со месо", sugar: 1.5, prot: 8.5, fat: 22.0, kcal: 340 },

// Бурек со сирење
{ name: "Бурек со сирење", sugar: 1.2, prot: 9.0, fat: 20.0, kcal: 310 },

// Ајвар (Домашен)
{ name: "Ајвар домашен / Ajvar", sugar: 5.0, prot: 1.5, fat: 11.0, kcal: 135 },

// Пинџур
{ name: "Пинџур / Pindzur", sugar: 4.5, prot: 1.2, fat: 6.0, kcal: 85 },

// ===== ОХРИДСКИ ГЕВРЕК (Оригинални вредности) =====
{ name: "Охридски варен ѓеврек (бел)", sugar: 1.5, prot: 8.5, fat: 1.0, kcal: 250, perPiece: 80 },
{ name: "Охридски црн ѓеврек (интегрален)", sugar: 2.0, prot: 9.5, fat: 1.5, kcal: 235, perPiece: 80 },
{ name: "Охридски ѓеврек со сусам (печен)", sugar: 2.5, prot: 10.5, fat: 8.5, kcal: 330, perPiece: 100 },

// ===== МАКЕДОНСКА СКАРА (Готвена/Печена на 100г) =====
{ name: "Ќебапи / Кебапчиња / Cevapi", sugar: 0.5, prot: 18.0, fat: 22.0, kcal: 285, perPiece: 35 }, 
// Еден ќебап е околу 30-40г

{ name: "Плескавица (обична) / Burger patty", sugar: 0.5, prot: 17.0, fat: 24.0, kcal: 300, perPiece: 150 },
{ name: "Шарска плескавица (со кашкавал)", sugar: 1.0, prot: 19.0, fat: 28.0, kcal: 340, perPiece: 200 },

// ===== ТРАДИЦИОНАЛНИ ГОТВЕНИ ЈАДЕЊА (на 100г) =====
{ name: "Тавче гравче / Gravce tavce", sugar: 1.8, prot: 7.5, fat: 6.0, kcal: 130 },
{ name: "Турлитава / Turli tava", sugar: 3.5, prot: 5.0, fat: 8.0, kcal: 110 },
{ name: "Мусака (со месо и компир)", sugar: 2.0, prot: 7.5, fat: 11.0, kcal: 150 },

// ===== МАКЕДОНСКИ НАМАЗИ / САЛАТИ =====
{ name: "Ајвар домашен (благ/лут)", sugar: 5.5, prot: 1.5, fat: 12.0, kcal: 145 },
{ name: "Пинџур", sugar: 4.0, prot: 1.2, fat: 6.5, kcal: 90 },
{ name: "Малиџано (со модар патлиџан)", sugar: 3.5, prot: 1.8, fat: 14.0, kcal: 165 },
{ name: "Шопска салата (без масло)", sugar: 3.0, prot: 3.5, fat: 4.5, kcal: 65 }, 

// ===== TRADITIONAL COOKED MEALS (Стойности за 100г готов продукт) =====

// Мусака (со компир и месо)
{ name: "Мусака / Мусака / Moussaka", sugar: 2.1, prot: 7.5, fat: 11.0, kcal: 155 },

// Тавче гравче / Грав (готвен)
{ name: "Тавче гравче / Грав (готвен) / Baked Beans (Tavce Gravce)", sugar: 1.8, prot: 8.0, fat: 5.5, kcal: 135 },

// Сарма со месо и ориз
{ name: "Сарма (со месо) / Сарма (с месо) / Sarma (with meat)", sugar: 1.2, prot: 6.8, fat: 8.5, kcal: 148, perPiece: 75 },

// Посни сарми (со ориз и зеленчук)
{ name: "Посна сарма / Постна сарма / Lean Sarma (rice only)", sugar: 1.5, prot: 2.5, fat: 4.0, kcal: 95, perPiece: 60 },

// Полнети пиперки (со месо и ориз)
{ name: "Полнети пиперки / Пълнени чушки / Stuffed Peppers", sugar: 2.2, prot: 6.5, fat: 7.5, kcal: 125, perPiece: 180 },

// Гулаш (телешки/свински)
{ name: "Гулаш / Гулаш / Goulash", sugar: 2.0, prot: 14.0, fat: 9.0, kcal: 165 },

// Посна манџа компир
{ name: "Компир манџа / Картофена яхния / Potato Stew", sugar: 2.5, prot: 2.0, fat: 3.5, kcal: 85 },

// Грашок (готвен со месо)
{ name: "Грашок со месо / Грах с месо / Peas with meat", sugar: 4.5, prot: 9.0, fat: 6.0, kcal: 120 },

// Боранија (посна)
{ name: "Боранија (посна) / Зелен фасул / Green Bean Stew", sugar: 3.5, prot: 2.5, fat: 3.0, kcal: 65 },

// Таратор (супа)
{ name: "Таратор / Таратор / Tarator (Cold Yogurt Soup)", sugar: 3.2, prot: 2.5, fat: 2.5, kcal: 45 },

// Чкембе чорба (со млеко и лук)
{ name: "Чкембе чорба / Шкембе чорба / Tripe Soup", sugar: 1.5, prot: 9.0, fat: 8.0, kcal: 125 },

// Леќа (готвена)
{ name: "Леќа (готвена) / Леща (готвена) / Lentil Stew", sugar: 1.8, prot: 7.5, fat: 4.5, kcal: 110 },

// Оризо со пилешко
{ name: "Ориз со пилешко / Пиле с ориз / Chicken and Rice", sugar: 0.5, prot: 12.0, fat: 6.5, kcal: 160 },

// Пржени лигњи
{ name: "Поховани лигњи / Пържени калмари / Fried Squid", sugar: 5.0, prot: 15.0, fat: 14.0, kcal: 245 },

// Капама (традиционална)
{ name: "Капама / Капама / Kapama", sugar: 1.0, prot: 13.0, fat: 12.0, kcal: 195 },
// Калориите доаѓаат главно од сирењето. Со масло додај +90 kcal на лажица.
    // Тука само додаваш нови редови во иднина...


    {
        barcode: "3800064401010",
        name: "Кисело мляко 2%",
        kcal: 51,
        sugar: 4.5,
        prot: 3.2,
        fat: 2.0
    },
    {
        barcode: "3800200561234",
        name: "Извара нискомаслена",
        kcal: 85,
        sugar: 1.5,
        prot: 16.0,
        fat: 0.5
    },

];