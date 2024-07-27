/* ----------------- регулярные выражения -------------- */
/*
https://regex101.com/ - для проверок
регулярные выражения  - это шаблон строки или подстроки
/regular_expression/flags

flags:
g - глобальный поиск (во всей строке) global
i -  игнорирование регистра ignore case
m - многосрочный режим miltiline
...
*/
/*
let regex = /hello/;
let str = 'hello world';
console.log(regex.test(str));
*/
/*
let regex = /hello/i;
let str = 'Hello world';
console.log(regex.test(str));*/


// let str = ' Hello cat    and world! Hello and you! hello...';
// let result = /hello/ig.exec(str); // execute - извлекать
// console.log(result);


// let str = ' Hello cat    and world! Hello and you! hello...';
// let result = str.match(/Hello/gi); 
// console.log(result); // ['Hello', 'Hello', 'hello']

// // replace, split и т.д.  методы для строки в качестве аргумента могут принимать регулиярные выражения

// let str = ' Hello cat    and world! Hello and you! hello...';
// let result = str.replace(/Hello/gi, '*'); 
// console.log(result); //  * cat    and world! * and you! *...

/* ------------------------------- Задача —--------------------------------*/
/*
Дана строка, состоящая из слов, разделенных пробелами.
 Определите, сколько в ней слов.
*/

// /* альтернативное решение  через регулярное выражение*/
// let test_str_2 = ' Hello cat    and     world ';
// test_str_2 = test_str_2.trim();
// test_str_2 = test_str_2.replace(/\s{2,}/g, ' ');
// /* // полностью через регулярные выражения
// test_str_2 = test_str_2.replace(/(^\s+)|(\s+$)/g, '');
// test_str_2 = test_str_2.replace(/\s{2,}/g, ' ');
// */

// let words = test_str_2.split(' ');

// console.log(words, words.length);


/*—------------------------------- Задача —--------------------------------*/
/*
Пользователь вводит номер телефона в форму.
Сделать валидацию номера телефона 

валидные номера:
+7 000 000 00 00
+70000000000    -> /^\+7\d{1,10}$/
+7-000-000-00-00
+7-000-000 00 00 и комбинации разлицные
+7 000 000-00-00 и комбинации разлиные

0- любая цифра
все остальные невалидные
примеры невалидных
+700000000000000000000000000000000000000000000000000
+7*000*000-00-00
+7 000*000-00-00
+7-000  000--00 00
+7--000--000--00--00
*/
let regex = /^\+7((([ -]\d{2,3}){4}$)|(\d{10}$))/;
let str = '+7 000 000 00 00';
console.log(regex.test(str));
/*

остальные задачи в html файле
*/


/*—------------------------------- DOM —--------------------------------*/
/*
Искать / читать элементы
создавать элементы
редактировать элементы
удалять элементы
*/