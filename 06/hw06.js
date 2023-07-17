// - Створити функцію яка повертає сторіччя, функція отримує рік
// 1810->19
// 1700 -> 17
// 1601 ->17 
// 2000 -> 20

function convertYear(year){
    return Math.ceil(year/100);
}
console.log(convertYear(1810));
console.log(convertYear(1700));
console.log(convertYear(1601));
console.log(convertYear(2000));

// - реалізуйте гру камінь- нижниці - бумага за допомогою методів розглянутих на уроці
let userSelect = prompt('Камінь ножниці папір');

function checkResult(userChoice, randomChoice) {
    let result = (userChoice === 'камінь' && randomChoice === 'ножниці') ||
        (userChoice === 'ножниці' && randomChoice === 'папір') ||
        (userChoice === 'папір' && randomChoice === 'камінь')
    return result;
}

function game(userData){
    let gameOptions = ['камінь', 'ножниці', 'папір'];
    let randomChoice = gameOptions[Math.floor(Math.random()*3)];
    let userChoice = userData.toLowerCase();
    if(userChoice === randomChoice) {
        return 'Hiчия';
    }
    else if( checkResult(userChoice, randomChoice)){
        return 'Ви виграли!';
    }
    else{
        return 'Ви програли спробуйте ще!';
    }
}
console.log(game('Камінь'));
console.log(game('ножниці'));
console.log(game('папір'));
console.log(game(userSelect));

// Додаткове завдання:
// - Створити функцію яка отримує массив і тип.В функції  з массиву вибираються  всі типи що були передані  і повертаються новим массивом
// const sort = [true, 'false', 111, -0, 'true', false, {a:flase}, [true, 'false']];
function getTypes(arr) {
    const types = [];
  
    for (let i = 0; i < arr.length; i++) {
      const type = typeof arr[i];
      types.push(type);
    }

    return types;
  }
  
  const sort = [true, 'false', 111, -0, 'true', false, {a:false}, [true, 'false']];
  const typesArray = getTypes(sort);

console.log(sort);
console.log(typesArray);