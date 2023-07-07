let emptyArray = new Array(); 
// console.log(emptyArray);
for(let i = 0; i < 22; i+=2){           
    emptyArray.push(i);
}
console.log(emptyArray); 

// тут зробив i<22 тому що в умові вказано від 0 до 20.
// якщо і<20 то в консолі виведе (10) [0, 2, 4, 6, 8, 10, 12, 14, 16, 18].
// можливо я не правильно зрозумів завдання.

// перше завдання - Створити пустий массив і заповнити його всіма парними  занченнями від 0 до 20

// *********************************************************************************************
let removeArray = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];

let newArrey = [];
for(let i = 0; i < removeArray.length; i++){
    if(removeArray[i] === "Keep"){
        newArrey.push(removeArray[i]);
    }
}
console.log(newArrey);


// - Створіть новий массив за допомогою методів розглянутих на уроці в якому видалені всі  
// значення "Remove"  з масиву  - ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"] 
// в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...]
// **********************************************************************************************


let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];

for(let i = 0; i<checkArr.length; i++){
    if(checkArr[i]<0){
        checkArr[i]=0;
    }
}
console.log(checkArr);


// - Написати цикл який замінює відємне значення в масиві на 0  let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]
// *************************************************************************************************


// let firstValue = 1;
// let secondValue = 2;

// let operationInfo = 'First value: ' + firstValue + ' second value: ' + secondValue + 'middle value: ' +(firstValue + secondValue)/2;

// let newOperationInfo = `1111 First value: ${firstValue} second value: ${secondValue} middle value ${(firstValue + secondValue)/2}`; 

// let htmlTemplate = `<div class="Test">${firstValue}</div> <div class="Test">${secondValue}</div> <h1>${(firstValue + secondValue)/2}</h1>`;

// console.log(operationInfo);
// console.log(newOperationInfo);

// document.write(htmlTemplate);

let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідни"];

for(let i=0; i<days.length; i++){
    console.log(`Сьогодні ${days[i]} у вас такі плани ${plans[i]}`);
}

// *) Створити цикл який виводить значення в консоль в такому форматі "Сьогодні ....  у вас такі плани .." 
// для данних використовує два массива let days = ["Понеділок", "Середа", "Неділя"] let plans = ["Урок 03", "Урок 04", "Вихідни"]
// ******************************************************************************************************************************


let num1 = prompt('Перше число');
num1 = Number(num1);
let operator = prompt('оператор (/,+,*,-)');
let num2 = prompt('Друге число');
num2 = Number(num2);

switch (operator) {
    case '+':
        if(operator == "+"){
            alert (`Результат: ${num1+num2}`);
            break;
        }
        
    case '-':
        if(operator == "-"){
            alert (`Результат: ${num1-num2}`);
            break;
        }
    case '*':
        if(operator == "*"){
            alert (`Результат: ${num1*num2}`);
            break;
        }
    case '/':
    if(operator == "/"){
        alert (`Результат: ${num1/num2}`);
        break;
    }
     
}




// let checkProductPrice = prompt('Type product name'); // Milk 

// switch (checkProductPrice) {
//     case 'milk':
//         console.log(`product ${checkProductPrice} cost 1$`);
//         break;
//     case 'orange':
//         console.log(`product ${checkProductPrice} cost 2$`);
//         break;
//     case 'strawberry':
//         console.log(`product ${checkProductPrice} cost 1.5$`);
//         break;
//     default:
//         console.log(`Sorry no information available about ${checkProductPrice}`);
// }
// **) Отримати 3 значення ( значення операція значення2 ) і використовуючи switch  та if  написати калькулятор