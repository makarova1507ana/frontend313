/*
Задача:

Напишите JavaScript-код для валидации формы:
Поле "Имя" должно быть заполнено и содержать только буквы.+



Поле "Электронная почта" должно быть заполнено и содержать правильный формат адреса электронной почты.
повторить Электронная почта (input type="email") - нельзя делать вставку
Поле "Пароль" должно быть
Пароль должен содержать не менее 8 символов. Это минимальное требование для обеспечения базовой безопасности, но рекомендуется использовать пароли длиной 12 и более символов.
нельзя копировать
Пароль должен содержать символы как минимум из трёх из следующих четырёх категорий:
Заглавные буквы (A-Z)
Строчные буквы (a-z)
Цифры (0-9)
Специальные символы (например, !, @, #, $, %, ^, &, *)

При успешной валидации формы выводите сообщение "Форма успешно отправлена!" и предотвращайте отправку формы (для тестирования).
При наличии ошибок валидации отображайте соответствующие сообщения об ошибках под соответствующими полями.

*/
let form = document.forms.register;
let input_name = form.elements.name;
let input_email = form.elements.email;
let input_repeat_email = form.elements.repeat_email;
let btn_submit = form.elements.btn_submit;

function createErrorElement(text, element) {
    let errorElement = document.getElementById('error' + element.id);
    if (!errorElement) { // если элемент не был создан (null)
        errorElement = document.createElement('div');
    }

    errorElement.textContent = text;
    errorElement.style.color = "red";
    errorElement.setAttribute('id', 'error' + element.id);

    element.after(errorElement);
}

function validateName() {
    var regex = /[^A-zА-я]+/;

    if (regex.test(input_name.value)) {
        createErrorElement("Поле 'Имя' должно содержать только буквы.", input_name)
        return false;
    }
    if (input_name.value == '') {
        createErrorElement("Поле 'Имя' Не должно быть пустым.", input_name)
        return false;

    }
    return true;
}


function validateEmail() {
    if (input_email.value == '') {
        createErrorElement("Поле 'email' Не должно быть пустым.", input_email)
        return false;

    }
    return true;
}

function validateForm() {
    if (!(validateName() && validateEmail())) {
        return false
    }
}


input_name.addEventListener('change', validateName);
input_email.addEventListener('change', validateEmail);
input_repeat_email.addEventListener('change', validateEmail);
input_repeat_email.addEventListener('paste', function(event) {
    event.preventDefault();
    createErrorElement('нельзя вставлять, напишите сами', input_repeat_email);
});

form.addEventListener('submit', function(event) {
    validateForm();
    event.preventDefault(); // чтобы страница не обновлялась
});