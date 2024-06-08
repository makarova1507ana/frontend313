/* Написать код для получение даты по нажатию кнопки. Дату отобразить в консоли */
let btn = document.querySelector("button");
let form = document.getElementById("dateForm");
let container = document.querySelector(".result-container");
const key = 'jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla';

function get_date() {
    get_images(form.startDate.value, form.endDate.value);
}

async function get_images(startDate, endDate) {
    base_url = 'https://api.nasa.gov/planetary/apod';
    api_key = '?api_key=' + key;
    startdate = '&start_date=' + startDate;
    enddate = '&end_date=' + endDate;
    url = base_url + api_key + startdate + enddate;

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
    //data -> [{…}, {…}, ...]
    for (let i = 0; i < data.length; i++) {
        // и отобразить результат
        if (data[i].media_type === 'image') {
            console.log(i, data[i]);
            container.innerHTML += `
            <h3>картинка дня ${data[i].date}</h3>
            <img src='${data[i].url}'></img>
            `; // создаем картинку с заголовком
        } else if (data[i].media_type === 'video') {

            container.innerHTML = `
        <h3>видео дня</h3>
        <iframe width="560" height="315" src="${data[i].url}" 
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
}

btn.addEventListener("click",
    (event) => {
        event.preventDefault(); // предотвращаем отправку формы 
        get_date()
    });