// Домашня робота:
// - створити функцію конструктор filmMaker яка отримує, 
// назву фільма, рік виходу, рейтинг
// - створити на прототипі filmMaker метод giveInfo яка 
// виводить в консоль інформацію про фільм

// - Розмістіть 5 фільмів створених через конструктор в 
// массив і створіть функцію sortPopular(arr) яка приймає 
// арей і сортує обєкти за популярністью

// Додаткове завдання:
// - створіть функцію sortYear(array, years) ця функція 
// отримує массив фільмів і рік випуску. Повертає массив з 
// фільмами цього року випуску
function FilmMaker(filmName, year, rating){
    this.filmName = filmName;
    this.year = year;
    this.rating = rating;
}
FilmMaker.prototype.giveInfo = function(){
    console.log(`this film is ${filmName} and ${year} is ${rating}`);
}

let films = [];
let EscapeFromShowshanck = new FilmMaker('Втеча з Шоушенка', 1994, 9.3);
let GodFather = new FilmMaker('Хрещений батько', 1972, 9.2);
let darkKnight = new FilmMaker('Темний лицар', 2008, 9);
let GodFather2 = new FilmMaker('Хрещений батько 2', 1974, 9);
let TvelveAngryMans = new FilmMaker('12 розгніваних чоловіків', 1957, 9);

films = films.concat(EscapeFromShowshanck, GodFather, darkKnight, GodFather2, TvelveAngryMans);

console.log(films);


function sortPopular(arr){
    arr.sort((a, b) => b.rating-a.rating);
}
sortPopular(films);
console.log(films);

function sortYear(array, years) {
    let result = array.filter(function(film){
        return years.includes(film.year);
    });
    return result;
}

let moviesOfYear = sortYear(films, [1994, 2008]);
console.log(moviesOfYear);


