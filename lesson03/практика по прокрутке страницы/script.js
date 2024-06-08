// У нас есть событие -> пользователь прокрутил страниц  -> отправиться запрос на получение контента
let container = document.querySelector(".container");


const key = 'jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla';


async function get_image(Date) {
    console.log("get_image")
    base_url = 'https://api.nasa.gov/planetary/apod';
    api_key = '?api_key=' + key;
    date = '&date=' + Date;
    url = base_url + api_key + date;

    try { // ПЫТАЕМСЯ  получить ответ на запрос и отобразить изображения

        // отправить запрос
        // дождаться ответа
        let response = await fetch(url);
        data = await response.json(); // дождались ответа и преобразовали в объект
        if (data.code == 400) {
            throw new Error("Переданы неправльные данные "); // Перенаправлять в блок  catch (throw - бросать)
        } else {
            await display_img(data);
        }
    } catch (error) {
        alert(error.name + "   |   " + error.message);
    }
}

function display_img(data) {
    console.log("display_img")
        //data -> [{…}, {…}, ...]
    console.log(data.url);
    // и отобразить результат
    if (data.media_type === 'image') {
        console.log("data.url");
        container.innerHTML += `
            <h3>картинка дня ${data.date}</h3>
            <img src='${data.url}'></img>
            `; // создаем картинку с заголовком
    } else if (data.media_type === 'video') {

        container.innerHTML = `
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

function checkScroll() {
    console.log(window.scrollY, window.innerHeight)
    if (window.innerHeight - window.scrollY <= 150) {

        get_image("2024-05-30");

    }

};

window.addEventListener("scroll", checkScroll)
    // () => {

//     get_image("2024-05-30");
// });