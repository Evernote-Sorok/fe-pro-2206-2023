// ======================================

// ***Отримати кільксть товарі що купив 
// користувач і ціну товара та вивести суму за всі товари***

// let quantityGoods = Number(prompt('Кількість одиниць товару'));
// let priceGoods = 200;

// let summ = (quantityGoods * priceGoods);
// console.log('загальна вартість: ', summ);
// alert(summ);

// ======================================



// ======================================

// ***- отримати ціну покупки від користувача 
// ( через prompt) та вивесту ціну товара зі знижкою   10%. ***

// let priceGoods = Number(prompt('Ціна покупки товару'));
// let discountPrice = 10;

// let summ = (priceGoods - ((priceGoods * discountPrice) / 100));
// console.log('Вартість товару зі знижкою 10%: ', summ);
// alert('Вартість товару зі знижкою 10%: '+(summ));

// ======================================

// - Отримати 4 значення від користувача і розрахувати середнє 
// арефметичне значення. Результат вивести в консоль чи alert

let productPriceOne = Number(prompt('Вартість першого товару'));
let productPriceTwo = Number(prompt('Вартість другого товару'));
let productPriceThree = Number(prompt('Вартість третього товару'));
let productPriceFour = Number(prompt('Вартість четвертого товару'));
 
let summ = (productPriceOne + productPriceTwo + productPriceThree + productPriceFour)/4;
console.log('Середня вартість: ', summ);
alert('Середня вартість: '+(summ));