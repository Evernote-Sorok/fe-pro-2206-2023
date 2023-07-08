


let arrey =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
function argument(type,arrey){
    if(type === "first"){
        return arrey[0];
    } else if(type === "last"){
        return arrey[arrey.length-1];
    }
}

let firstElement = argument("first",arrey);
let lastElement = argument("last",arrey);

console.log(firstElement+" "+lastElement);

// 1) створити функцію яка отримує аргумент і массив, якщо його значення
//  'last' то функція повертає останній елемент 'first' то повертає перший 
//  елемент массиву 


let smile = [':)', '=)',':)', '=)',':)', '=)']
function argumentSmile(newSmile){
    for (let i = 0; i < smile.length; i++) {
        if (smile[i] === ':)') {
            smile[i] = newSmile;
        }
    }
}
let newSmile = prompt("Введіть новий смайл");
argumentSmile(newSmile);
alert(smile);

// 2)let smile = [':)', '=)',':)', '=)',':)', '=)']; 
// Створити функцію яка отримує аргументом новий самйл і змінює  
// в масиві '':)' на новий смайл
