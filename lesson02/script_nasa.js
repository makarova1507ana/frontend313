btn = document.querySelector('button');
container_img = document.querySelector('.img'); // контейнер, где будем размещать картинку
container_video = document.querySelector('.video'); // контейнер, где будем размещать video

// 1 вариант 
async function get_image(key = 'jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla', date_ = '2024-05-20') {
    console.log(typeof(key), typeof(date_));
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
    await display_img(data);
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

    get_image('jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla', `${year}-${month}-${day}`)
}
get_today();
btn.addEventListener('click', get_image);