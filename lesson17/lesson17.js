/*
1. Выполнять поиск по названию фильма/ по жанрам/ по году выпуска/ и т.д.
2. Пагинацию
3. Возможность посмотреть информацию по фильму 
4. Возможность добавить фильм в список избраннного
*/


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
        },
        error: function(error) { // если какая-то ошибка
            console.log(error);
        }
    })
})