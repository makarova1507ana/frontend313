/* примитивные типы данных */
/*  
number
string
boolean
...

*/
/* ссылочные типы данных */
/*  
Array
Object
Function
...

*/


/* Отличия */
/*
// копируется только занчения
let num1 = 5;
let num2 = num1;
num1 = 20;
console.log(num2);

// записывается ссылка на массив 
let arr1 = [5, 6, 'hello', true];
let arr2 = arr1;
arr1[0] = 0;
console.log(arr2);



// сравниваются значения
let n1 = 5;
let n2 = 5;
console.log(n1 === n2); // true

// сравниваются ссылки
let array1 = [1, 0];
let array2 = [1, 0];
console.log(array1 === array2); // false
*/

/*----------------------- Массив -------------------------------*/
/*
набор значений, который храниться в одном пространстве 
это ссылочный тип данных
 */
let arr = [5, 6, 'hello', true];
for (let i = 0; i < arr.length; i++) {
    console.log(`arr[${i}] = ${arr[i]}`);
}
arr.forEach(function(element) {
    console.log(element);
})

/*----------------------- Задачи -------------------------------*/
/*
Объявите массив fruits с несколькими названиями фруктов. 
Выведите в консоль первый и последний элементы массива.
*/
let fruits = ['apple', 'orange', 'banans'];
console.log(fruits[0]);
// обращение к последнему элементу массива
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1));
console.log(fruits.slice(-1)[0]);


/* Напишите функцию, которая принимает массив чисел и возвращает их сумму.*/
function sum(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
console.log(sum([1, 2, 3, 4, 5]));

/* -----альтернативное решение------ */
function sum(numbers) {
    let result = 0;
    numbers.forEach(function(el) {
        result += el;
    })
    return result;
}
console.log(sum([1, 2, 3, 4, 5]));

/* ----------- */
/*
У вас есть список покупок в супермаркете. 
Напишите программу для поиска определенного продукта в списке и определения его наличия
 или количества в списке.

Пример:
У вас есть список покупок: ["яблоки", "молоко", "хлеб", "яйца", "масло", "мука", "молоко"]
Введите слово для поиска: Молоко
В списке встречается 2 раза
 */


/*
продукты = ["яблоки", "молоко", "хлеб", "яйца", "масло", "мука", "молоко"]
продукт_пользователя = молоко

для какждого элемента в массиве продукты
    если элемент массива сопадает с продуктом_пользователя
        увеличить кол-во встретившегося элемента

*/

let products = ['яблоки', 'груши', 'черешня', 'малина', 'яблоки'];
let element = 'яблоки';
let count = 0;
for (let product of products) {
    if (element === product) {
        count++;
    }

}
console.log(`В списке встречается ${element} ${count} раза`);


/* // еще одно решение
let products = ['яблоки', 'груши', 'черешня', 'малина', 'яблоки'];
var indices = [];

let element = 'яблоки';
let idx = products.indexOf(element); // находим индекс первого элемента
while (idx != -1) {
    indices.push(idx);
    idx = products.indexOf(element, idx + 1); // находим следующий индекс элемента
}

console.log(`В списке встречается ${element} ${indices.length} раза на позициях ${indices}`);
*/


/* --------------строки------------------- */
/*
строки - это примитивный тип данных
'это строка'
"и это строка"

num = 1;
`и это тоже ${num} строка`
*/

// let str = 'hello';
// let str2 = 'world';
// let result = str + str2;

// str.length;
// str[0];
// str[str.length - 1];
// str.at(-1);

/* методы */
let str = 'Hello';
console.log(str);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.indexOf('l'));
console.log(str.lastIndexOf('l'));


console.log(str.includes('llo'));

console.log(str.slice(1, 3));

let strs = 'Hello cat and world!';
console.log(strs.split(' ')); // ['Hello', 'cat', 'and', 'world!']

let str2 = '             Hello cat and world!                 ';
console.log(str2); //             Hello cat and world!                 
console.log(str2.trim()); // Hello cat and world!

let str3 = ' Hello cat and world ';
new_str = str3.replace('cat', 'dog');
console.log(new_str); //  Hello dog and world


/* --------------задачи------------------- */
/*
дана строка вида 1110001100
заменить все исходные 1 на 0
заменить все исходные 0 на 1
1110001100 -> 0001110011
*/
let test_str = '1110001100'
test_str = test_str.replaceAll('1', '*')
test_str = test_str.replaceAll('0', '1')
test_str = test_str.replaceAll('*', '0')
console.log(test_str);



/* ------------------------------- Задача —--------------------------------*/
/*
Дана строка, состоящая из слов, разделенных пробелами.
 Определите, сколько в ней слов.
*/
// let test_str_2 = ' Hello cat and world ';
// test_str_2 = test_str_2.trim();
// let words = test_str_2.split(' ');
// console.log(words, words.length);

/* альтернативное решение  через регулярное выражение*/
















/* -------------регулярные выражения----------------  */