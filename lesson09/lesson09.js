/*
Напишите функцию, которая принимает на вход число и возвращает строку "Четное", 
если число четное, и "Нечетное", если число нечетное. 
*/

function evenOdd(num) {
    return num % 2 === 0 ? "even" : "odd"
}

console.log(evenOdd(9));

/* аналогичный вариант */

function number(num) {
    if (num % 2) {
        return "Нечётное";
    }
    return "Чётное";
}

console.log(number(9));


/*
Создайте переменную age и присвойте ей ваш возраст. Напишите условие, которое выведет 
"Доступ разрешен", если возраст больше или равен 18, 
и "Доступ запрещен", если возраст меньше 18.
*/


function refund(age) {

    if (age >= 18) {
        return "Доступ разрешен";
    }
    return "Доступ запрещен";
}
console.log(refund(29));

/*
Напишите функцию, которая принимает строку и возвращает "Длинная", 
если строка содержит более 10 символов, и "Короткая" в противном случае.
*/

function is_long_str(str) {
    let lentgth_str = str.length; //вычисляем  длину строки

    if (lentgth_str >= 10) {
        return "Длинная";
    }

    return "Короткая";
};

console.log(is_long_str("поvbgdffgstы"));


/*

# Дан диапазон от start до end. End и start могут быть перепутаны.
# и найти сумму всех чисел в указанном диапазоне
*/

// start - узнать/ записать/ и т.д. значение 
// end - узнать/ записать/ и т.д. значение
// start = 8;  end = 10 -> диапазон будет содержать : 8, 9, 10
// start = 10;  end = 8 -> диапазон будет содержать : 10, 9, 8
// Что надо узнать в задаче? -> сумму всех чисел в указанном диапазоне
// как вычислить? 8 + 9 + 10

let start = 10;
let end = 8;
let sum = 0;

/* поменяем местами переменные, если start > end */
d = start > end ? end : start;
end = end < start ? start : end;
start = d;

/* находим сумму */
for (let i = start; i <= end; i++) {
    console.log(i);
    sum += i;
}

console.log(sum);





/* еще один вариант */
function sum_range(start, end) {
    let result = 0;
    // если пользователь введет не верный порядок, мы все определим точки входа и выхода за него
    let min = Math.min(start, end); // нахождение точки старта
    let max = Math.max(start, end); // нахождение точки конца

    for (let i = min; i <= max; i++) {
        result += i;
    }

    return result;
}

console.log(sum_range(10, 0));
console.log(sum_range(0, 10));


/*
пользователь вводит стоимость товара, прекратить ввод, когда стоимость равна 0. Найти итоговую сумму
Для задачи использовать prompt 
Введите сумму: 100
Введите сумму: 10
Введите сумму: 0
супер! ваша итоговая сумма 110
*/

let prompt_value = prompt("Введите сумму:");
let res = 0;

prompt_value = Number(prompt_value);

while (prompt_value != 0) {
    res += prompt_value;
    prompt_value = prompt("Введите сумму:");
    prompt_value = Number(prompt_value);
}

console.log("Супер! Ваша итоговая сумма:", res);

/* 2 вариант*/
let res = 0;
while (true) {
    prompt_value = prompt("Введите сумму:");
    prompt_value = Number(prompt_value);

    if (prompt_value == 0) {
        break;
    }
    res += prompt_value;
}
console.log("Супер! Ваша итоговая сумма:", res);