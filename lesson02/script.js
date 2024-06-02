btn = document.querySelector('button');
container_img = document.querySelector('.img'); // контейнер, где будем размещать картинку
container_video = document.querySelector('.video'); // контейнер, где будем размещать video

// 1 вариант 
async function get_image(key, date_) {
    key = 'jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla'
    date_ = '2024-05-20'
    base_url = 'https://api.nasa.gov/planetary/apod';
    api_key = '?api_key=' + key;
    date = '&date=' + date_;
    url = base_url + api_key + date;

    // отправить запрос
    // дождаться ответа
    let response = await fetch(url);
    // fetch(url) -> будет возвращать  Promise в состояние ожидания
    //await fetch(url) ->  Будет возвращать Response Ответ сервера (успешно или ошибку)

    // обработка ответа
    //console.log(response, typeof(response)); // Response
    data = await response.json(); // дождались ответа и преобразовали в объект
    // console.log(data, typeof(data));
    display_img(data);
}

function display_img(data) {
    // и отобразить результат
    if (data.media_type === 'image') {
        container_img.innerHTML = `
            <h3>картинка дня</h3>
            <img src='${data.url}'></img
            `; // создаем картинку с заголовком
    } else if (data.media_type === 'video') {

        container_video.innerHTML = `
        <h3>видео дня</h3>
        <iframe width="560" height="315" src="${data.url}" 
        title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
            `; // создаем видео с заголовком
    }
}

function get_today() {
    // получение изображения за сегодняшний день
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1; // месяцы в Date начинаются с 0
    let day = today.getDate();
    console.log(today);
    console.log(year);
    console.log(month);
    console.log(day);

    get_image('jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla', `${year}-${month}-${day}`)
}
get_today();
btn.addEventListener('click', get_image);

// 2 вариант
// function get_image() {
//     base_url = 'https://api.nasa.gov/planetary/apod'
//     api_key = '?api_key=' + 'jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla'
//     date = '&date=' + '2024-05-31'
//     url = base_url + api_key + date

//     // отправить запрос
//     // дождаться ответа
//     response = fetch(url).then(
//         response => {
//             console.log(response, typeof(response));
//             return response.json();
//         }
//     )

//     // обработка ответа
//     response.then(
//         data => {
//             console.log(data, typeof(data));
//             // и отобразить результат

//             container_img.innerHTML = `
//             <h3>картинка дня</h3>
//             <img src='${data.url}'></img
//             `; // создаем картинку с заголовком
//         }
//     )

// }
// btn.addEventListener('click', get_image('jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla', '2024-05-31'));




/*--------------------------------про асинхронность--------------------------------*/
// function f1() {
//     console.log('1');
// }

// function f2() {
//     console.log('2');
// }

// function f3() {
//     console.log('3');
// }
// // синхронное выполнение
// f1();
// f2();
// f3();



//  then как дожидание
// async function f1() {
//     fetch('https://api.nasa.gov/planetary/apod?api_key=jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla&date=2024-05-31')
//         .then(data => {
//             console.log('1')
//         });
// }

// async function f2() {
//     console.log('2');
// }

// async function f3() {
//     console.log('3');
// }
// // асинхронное выполнение
// f1();
// f2();
// f3();

// async function f1() {
//     let res = await fetch('https://api.nasa.gov/planetary/apod?api_key=jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla&date=2024-05-31')
//     console.log('1');
//     return res.json();

// }

// async function f2(data) {
//     console.log('2');
//     console.log(data);
// }

// async function f3() {
//     fetch('https://api.nasa.gov/planetary/apod?api_key=jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla&date=2024-05-31')
//         .then(data => {
//             console.log('3');
//         })
// }
// // асинхронное выполнение

// res = await f1();
// f3();
// f2(res);