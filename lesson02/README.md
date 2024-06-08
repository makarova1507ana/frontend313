Разница между этими двумя способами назначения обработчика события на кнопку заключается в передаче параметров и контексте вызова функции.

1. **`btn.addEventListener('click', () => get_image());`**:
    - Здесь используется стрелочная функция, которая при клике вызывает `get_image()` без параметров.
    - Это полезно, если вам нужно вызвать `get_image` с определенными параметрами, так как внутри стрелочной функции вы можете передать любые аргументы.
    - В данном случае `get_image` будет вызвана без параметров, и будут использоваться значения по умолчанию (`key = 'jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla', date_ = '2024-05-20'`).

2. **`btn.addEventListener('click', get_image);`**:
    - Здесь функция `get_image` назначается как обработчик события напрямую.
    - При клике на кнопку функция `get_image` будет вызвана с аргументом события `event`, которое передается автоматически браузером. Это не совсем то, что нужно в вашем случае, так как `get_image` ожидает аргументы `key` и `date_`, а не объект события.
    - Это может привести к ошибке, если внутри `get_image` эти параметры будут использоваться без проверки.

Если ваша функция `get_image` должна вызываться без аргументов или с фиксированными аргументами, рекомендуется использовать стрелочную функцию, чтобы избежать непредсказуемого поведения и ошибок:

```javascript
btn.addEventListener('click', () => get_image());
```

Или, если вы хотите передать параметры:

```javascript
btn.addEventListener('click', () => get_image('jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla', '2024-05-20'));
```

Вот обновленный код с учетом использования стрелочной функции:

```javascript
const btn = document.querySelector('button');
const container_img = document.querySelector('.img'); // контейнер, где будем размещать картинку
const container_video = document.querySelector('.video'); // контейнер, где будем размещать video

// 1 вариант 
async function get_image(key = 'jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla', date_ = '2024-05-20') {
    console.log(typeof(key), typeof(date_));
    const base_url = 'https://api.nasa.gov/planetary/apod';
    const api_key = '?api_key=' + key;
    const date = '&date=' + date_;
    const url = base_url + api_key + date;

    try {
        // отправить запрос
        const response = await fetch(url);

        // обработка ответа
        const data = await response.json(); // дождались ответа и преобразовали в объект
        await display_img(data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

function display_img(data) {
    // Очищаем контейнеры перед отображением нового контента
    container_img.innerHTML = '';
    container_video.innerHTML = '';

    // и отобразить результат
    if (data.media_type === 'image') {
        container_img.innerHTML = `
            <h3>картинка дня</h3>
            <img src='${data.url}'></img>
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
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // месяцы в Date начинаются с 0
    const day = String(today.getDate()).padStart(2, '0');

    get_image('jUsYymkf0vV58o8oJUSsls07GhfVpBW1HmURrBla', `${year}-${month}-${day}`);
}

get_today();
btn.addEventListener('click', () => get_today());
```

Этот код гарантирует, что при клике на кнопку будет вызвана функция `get_today`, которая затем вызывает `get_image` с правильными параметрами.