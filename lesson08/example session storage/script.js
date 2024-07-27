/*
 Создайте поля имя, email, password. Должна быть сделана валидация для этих полей.
Поле "Email" должно быть непустым и содержать правильный формат email адреса.
Поле "Password" должно быть не менее 8 символов длиной, и как минимум 1 цифра,  и как минимум один спецсимвол. 

1. Сделать валидацию поле email +
2. Сделать валидацию поле Password +
3. отправка значений на валидацию (нажатие на кнопку) -> сохранение данных формы, кроме пароля 
4. При неверно введеных значения -> перезагрузка страницы ->  загрузке данных формы, кроме пароля 
*/
window.onload = function() {
    loadFormData();
};

function saveFormData() {
    sessionStorage.setItem('name', document.getElementById('name').value.trim());
    sessionStorage.setItem('email', document.getElementById('email').value.trim());
}

function loadFormData() {
    let passwordError = document.getElementById('errorPassword');
    passwordError.innerHTML = sessionStorage.getItem('passwordError');

    document.getElementById('name').value = sessionStorage.getItem('name');

    document.getElementById('email').value = sessionStorage.getItem('email');
}

function validateForm() {
    //alert('Valid Form'); // для отладки
    let password = document.getElementById('password');

    password = password.value;
    //проверка пароля
    if (password.length < 8 || !/\d/.test(password) || !/[!@#$%;:()+-_><|^&*\]\[]/.test(password)) {
        sessionStorage.setItem('passwordError', 'Пароль должен быть не менее 8 символов длиной, и как минимум 1 цифра,  и как минимум один спецсимвол.');
    }
    saveFormData();
}