// получить доступ к элементы формы
// 
// найти формы
document.forms

//найти конкретную форму (по имени)             <form name="main" class="main-form" action="#">
document.forms.main // document.querySelector('.main-form')

// найти все элементы формы
document.forms.main.elements

// найти  элемент формы | для обращения по id должен быть id 
//| для обращения по name обязательно name
document.forms.main.elements.input_1 // нашли по id     <input tabindex="2" value="" id="input_1" type="text" name="nameInput" class="main-form__input" placeholder="Введите что-то..." autocomplete="off" autofocus>




/*
Создать форму с полем "введите предпологаемую стоимость: " 

* вам нужно создать форму 
* поле соответсвующего типа 
* сделать проверку на валидную стоимость.

валидная стоимость: 
* >= 0


в файле simple_game.html
 */





/* События элементов формы:
*   - фокус focus
*   - потеря фокуса Блюр blur !!! только если был Фокус
*   - ввод значений input * не для всех элементов!!!
*   - изменения change *не для всех элементов!!!
*   - очистка clear
*   - события горячих клавиш (копирование вставка)

*/


//*   - фокус focus (Клик, по TAB, задать через JS .focus()) & потеря фокуса Блюр blur


let input_1 = document.forms.main.elements.input_1;
let input_2 = document.forms.main.elements.input_2;

document.forms.main.elements.check_1.focus(); // задания фокуса через команду


input_1.addEventListener('focus', () => {
    input_1.placeholder = 'Элемент в фокусе';
});



input_1.addEventListener('blur', () => {
    input_1.placeholder = 'Элемент НЕ в фокусе';
});


input_2.addEventListener('focus', () => {
    input_2.placeholder = 'Элемент в фокусе';
});

input_2.addEventListener('blur', () => {
    input_2.placeholder = 'Элемент НЕ в фокусе';
});



// input  change

// input происходит при любых измениях в содержании(value) элемента 
input_1.addEventListener('input', () => {
    input_1.style.backgroundColor = 'green';
});

// без input  change не сработает 
input_1.addEventListener('change', () => {
    input_1.style.backgroundColor = 'lightyellow';
    input_1.style.color = 'black';
});