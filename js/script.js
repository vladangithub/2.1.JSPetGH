'use strict';

//console.log(4);
//let number = 5;
//const leftBorderWidth = 1;

//number = 10;
//console.log(number);

//leftBorderWidth = 15;
//console.log(leftBorderWidth);


//const obj = {
//    a: 50
//};

//obj.a = 10;
//console.log(obj);

//Простые типы - примитивы.

//Числа 1,2,3



//let number = 4.6;

//console.log(-4/0);
//console.log('string' * 9);



//Строки 'string', 'name'

//const persone = 'Alex';

//Логический тип (Boolean)

//true/false

//null

//undefined

//Symbol

//BigInt


//Объекты

//Спецобъекты

//Массивы []

//Функции function

//Объект Даты

//Регулярные выражения

//Ошибки

//alert('Hello');


//const result = confirm('Life is good?');
//console.log(result);

//const answer = prompt('You older 18?', '');
//console.log(typeof(answer));

//const result = confirm(`Are you here?`);
//console.log(result);

//const answer = +prompt(`You 18 years old?`, `20`);
//console.log(answer + 5);

//const answers = [];

//answers[0] = prompt(`Как ваше имя?`, ``);
//answers[1] = prompt(`Как ваши дела?`, ``);
//answers[2] = prompt(`How old you?`, ``);

//document.write(answers);

//console.log(typeof(answers));

//const category = `toys`;

//console.log(`https://someurl.com/S{category}/5`);

//const user = 'Ivan';

//alert(` Hello, ${user}`);

//console.log(4 + " - object");

//let incr = 10,
//    decr = 10;

//++incr;
//--decr;

//console.log(incr++);
//console.log(decr--);

//const isChecked = false,
//    isClose = false;

//    console.log(isChecked || !isClose);



/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


//-----------------------2.9------------------------------

//const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
//};

//const a = prompt('Один из последних просмотренных фильмов?', ''),
//    b = prompt('На сколько оцените его?', ''),
//    c = prompt('Один из последних просмотренных фильмов?', ''),
//    d = prompt('На сколько оцените его?', '');

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//console.log(personalMovieDB);

//-----------------------2.9------------------------------


//-----------------------2.10------------------------------

//if (4 == 9) {
//    console.log('Ok!');
//} else {
//    console.log('Error');
//}

//const num = 50;

//if (num < 49) {
//    console.log('Error');
//} else if (num > 100) {

//}



//-----------------------2.10 Условия---------------------

//if (4 == 4) {
//    console.log('OK!');
//} else {
//console.log ('Error');
//}

//const num = 50;

//if (num < 49) {
//    console.log('Error');
//}   else if (num > 100) {
//    console.log('Много');
//}   else {
//    console.log('OK');
//}

//(num === 50) ? console.log('OKi') : console.log('Error');


//const num = 50;

//switch (num) {
//    case 49:
//        console.log('Неверно');
//        break;
//    case 100:
//        console.log('Неверно');
//        break;
//    case 51:
//        console.log('Верно');
//        break;
//    default:
//        console.log('Не в этот раз');
//        break;
//}


//-----------------------2.10 Условия------------------------------


//-----------------------2.11 Циклы------------------------------

//let num = 50;

//while (num <= 55) {
//    console.log(num);
//    num++;
//}

//do {
//    console.log(num);
//    num++;
//}
//while (num < 55);

//for (let i = 1; i < 10; i++) {
//    if (i === 7) {
//        //break;
//        continue;
//    }
//    console.log(i);
    
//}

//-----------------------2.11 Циклы------------------------------