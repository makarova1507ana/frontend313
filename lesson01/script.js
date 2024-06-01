btn = document.querySelector('button');
container_img = document.querySelector('.img'); // контейнер, где будем размещать картинку

function get_image() {
    console.log("btn is clicked");
    // создаем XHR
    xhr = new XMLHttpRequest();
    base_url = 'https://api.nasa.gov/planetary/apod'
    api_key = '?api_key=' + 'jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla'
    date = '&date=' + '2024-05-31'
    url = base_url + api_key + date

    // отправляем запрос
    xhr.open('GET', url, true); // open(метод, адрес, асинхронный ли это запрос?)

    // В ответ вернеться
    xhr.onreadystatechange = function() {
        if (xhr.status === 200) {
            data = JSON.parse(xhr.responseText); // JSON Получили и преобразовали в объект
            console.log(data, typeof(data));
            console.log(data.url);
            container_img.innerHTML = `
            <h3>картинка дня</h3>
            <img src='${data.url}'></img
            `; // создаем картинку с заголовком
        }
    }

    xhr.send();
}

// СЛУШАЕМ событие клик по объекту btn
// btn.addEventListener('click', (event) => {
//     alert("На меня нажали !");

// })


// //  ---------------2 способ--------------- //
// btn.addEventListener('click', function show() {
//     alert("На меня нажали !");

// })

// ---------------3 способ--------------- //
btn.addEventListener('click', get_image);