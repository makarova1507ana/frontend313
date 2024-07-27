/*
Напишите функцию, которая принимает два числа и возвращает их сумму.
*/

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(3, 2));

/*
Напишите функцию, которая принимает два числа, введеных  пользователем из
окна prompt и возвращает их сумму в окно alert.
*/

// alert('hello'); // вывод данных
// variable = prompt('text for action');// ввод данных

function getSumFromUser() {
    let firstNumber = prompt('Введите первое число:');
    let secondNumber = prompt('Введите второе число:');

    let sum = Number(firstNumber) + Number(secondNumber);
    alert(firstNumber + ': ' + typeof(Number(firstNumber)) + ' | ' + secondNumber + ': ' + typeof(secondNumber))
    alert(sum);
};

getSumFromUser();