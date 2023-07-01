// Домашня робота:
// - напишіть змінні які питають за допомогою prompt логін та пароль   
// якщо логін admin і пароль 12345 вірні то виводити повідомлення "вітаємо в системі" 
// якщо ні то виводити "Пароль логін не вірні" ( реалізувати за допомогою if else )

// - Спитати в користувача вік, далі використовуючи тернарний оператор ( це скорочений запис іf ) 
// створити змінну яка отримує true якщо вік більше 18  i false якщо менше
// - створити змінну в якій за допогою Prompt спитати який день неділі зараз. 
// Далі написати swith який для вівторок четверг значень виводить ( Сьогодні ${day} у вас урок о 19) 
// для інших днів свої варіанти,  адля значень що не відповідають умові виведіть default

// ======= перше завдання ===============
let login = prompt('Your login?');
let password = prompt('Your password?');

if(login == 'admin' && password == '12345'){
    alert('вітаємо в системі');
}
else{
    alert('Пароль логін не вірні');
}

// ======= друге завдання ===============
let userAge = prompt('Your age?');

let moreThan18 = true;
let lessThan18 = false;

// if(userAge > 18){
//     console.log(moreThan18);
// }
// else{
//     console.log(lessThan18);
// } цей варіант, для мене, легший для розуміння

let ageOfUser = (userAge > 18) ? moreThan18 : lessThan18;
console.log(ageOfUser);

// ======= третє завдання ===============

let whatDay = prompt('Який день неділі сьогодні?');

switch (whatDay){
    case 'Tuesday':
    case 'Thursday':
        console.log(`Сьогодні ${whatDay} у вас урок о 19:00`);
        break;
    case 'Monday':    
    case 'Wednesday':    
    case 'Friday':
        console.log(`Сьогодні ${whatDay} у вас тренування о 8:00`);
        break;
    default:
        console.log(`Сьогодні у вас немає завданнь`);   
}

// Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
