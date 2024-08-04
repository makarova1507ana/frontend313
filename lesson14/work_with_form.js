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



// работа с select
select = document.forms.main.elements.select_1 // обращаемся к элементу
value_of_select = document.forms.main.elements.select_1.value // обращаемся к выбраному значению элементу
index_of_select = document.forms.main.elements.select_1.selectedIndex // обращаемся к индексу выбранного значения элементу


// создание нового option
// <option value='2' selected>1</option>
// new Option(text, value, defaultSelected, selected)
let newOption = new Option('1', '2', true, true);
select.append(newOption); // добавляем в тег select


// мультивыбор

let options = document.forms.main.elements.select_1.options; // получаем все options в select

options = Array.from(options);
let selected_options = options.filter(option => option.selected); // получили список выбранных options

selected_options = selected_options.map(option => option.value);


//очистка clear
document.forms.main.elements.clearbtn.addEventListener('click', () => {
    input_1.value = '';
    input_2.value = '';
    document.forms.main.elements.radio_1.checked = true;
    document.forms.main.elements.check_1.checked = false;
    document.forms.main.elements.file_1.value = '';

    select.options[0].selected = true;
    select.options[1].selected = true;
    select.options[2].selected = false;


});

//copy -копировать  paste - вставить cut -вырезать - контекстное меню и горячие клавиши

input_1.addEventListener('paste', function(event) {
    alert('нельзя вставку делать');
    event.preventDefault(); // отмена действия
});
document.forms.main.addEventListener('copy', () => {
    console.log('copy');
});

document.forms.main.addEventListener('cut', () => {
    console.log('cut');
});





// submit - отправка формы на сервер
document.forms.main.addEventListener('submit', function(event) {
    console.log('submit');
    event.preventDefault(); // отмена действия в данном случае, чтобы страница не отправлялась  

});