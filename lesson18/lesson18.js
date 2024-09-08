/*
1. Выполнять поиск по названию фильма/ по жанрам/ по году выпуска/ и т.д.
2. Пагинацию
3. Возможность посмотреть информацию по фильму 
4. Возможность добавить фильм в список избраннного
*/
/* Пагинация
к кнопке поиске после клика добавить вызов setupPagination()
$("#btn_search").click()
setupPagination -адаптировать под работу с запросом  и под страницу с фильмами
*/

/*class="pagination" сделаем кнопки пагинации*/
function setupPagination(total_movies, itemsPage, title, start) {
    let max_pages = 10;
    let end;
    $('.pagination').empty(); // очищаем содержание контейнер
    let countPages = Math.ceil(Number(total_movies) / itemsPage); // Math.ceil() округляем всегда до большего значения
    if (countPages >= max_pages) {
        if (start + max_pages <= countPages) {
            end = start + max_pages;
        } else {
            end = countPages;
        }
    } else {
        end = countPages;
    }
    for (let i = start; i < end; i++) {
        $(".pagination").append(`<button>${i}</button>`)
    }
    $("button").click(function() {
        // отправить запрос https://www.omdbapi.com/?apikey=23f82659&s=${title}$page=${Number($(this).text())}
        if (start + max_pages > countPages) {
            start = countPages - max_pages;
        } else {
            start = Number($(this).text());
        }
        console.log(start);

        $.ajax({ // отправили запрос
            url: `https://www.omdbapi.com/?apikey=23f82659&s=${title}&page=${ Number($(this).text())}`,
            method: 'GET',
            dataType: 'json',
            success: function(data) { // получили данные 
                console.log(data);
                setupPagination(total_movies, itemsPage, title, start);
                // Отображение данных на странице
                display_movie(data.Search);
            },
            error: function(error) { // если какая-то ошибка
                console.log(error);
            }
        })
    });
}
/* 
    Выполнять поиск по названию фильма/ 
    1. Обработка поля поиска (ввод и получение информации) 
    2. Отправить запрос по апи, для получения информации о фильмах (пример запроса https://www.omdbapi.com/?apikey=23f82659&s=matrix)
    3. Отобразить инфомарцию на странице index.html

*/
function display_info(movie) {
    console.log(movie);
    //*html (верстку) для информации о фильме из запроса */
    $(`#${movie.imdbID}`).append(`
        <div class="info">
            <b>Runtime: </b>${movie.Runtime}
            
            <b>Awards: </b>${movie.Awards}
            <b>Actors: </b>${movie.Actors}
            <b>Director: </b>${movie.Director}

        </div>`);
}

function add_action() {
    $("button.info").click(function() {

        //console.log($(this).parent().attr('id'));
        let id = $(this).parent().attr('id');
        $.ajax({ // отправили запрос
            url: `https://www.omdbapi.com/?apikey=23f82659&i=${id}`,
            method: 'GET',
            dataType: 'json',
            success: function(data) { // получили данные 
                console.log(data);
                // Отображение данных на странице
                display_info(data);
            },
            error: function(error) { // если какая-то ошибка
                console.log(error);
            }
        })
    })
}

function display_movie(movies) {
    $(".list_movies").empty();
    movies.forEach(function(movie) {
        $(".list_movies").append(`
        <div id=${movie.imdbID} class="movie">
            <h3>${movie.Title}</h3>
            <img src="${movie.Poster}" class="poster">
            <h4>${movie.Year}</h4>
            <button class="info">info</button> <button class="add_to_favorite">add to favorite</button>
            
            </div>
    `);
    })
    add_action();
}

function display_results(data) {

    if (data.Response === 'True') {

        // показ инфо о кол-во найденных фильмах
        let total_result = data.totalResults;
        $(".total_results").text(`results: ${total_result}`);
        // показ найденных фильмов
        display_movie(data.Search);
        // позже добавим пагинация
    } else {
        //  console.log(typeof($('body').find('.error').length));
        if ($("body").find('.error').length === 0) {
            $(".total_results").after(`<div class="error">${data.Error}</div>`);
        }
    }
}

$("#btn_search").click(() => {

    //    Обработка поля поиска (ввод и получение информации) 
    // При клике на кнопку нужно сохранить значение, которое пользователь ввел в поле поиска
    let title = $('input[type="search"]').val();

    $.ajax({ // отправили запрос
        url: `https://www.omdbapi.com/?apikey=23f82659&s=${title}`,
        method: 'GET',
        dataType: 'json',
        success: function(data) { // получили данные 
            console.log(data);
            // Отображение данных на странице
            display_results(data);
            setupPagination(data.totalResults, 10, title, 1);
            /* Добавить фнукцию установки пагнации */
        },
        error: function(error) { // если какая-то ошибка
            console.log(error);
        }
    })
})