let openRequest = indexedDB.open('kinopoisk_2_0', 1); // создали / установили соединение БД

// Срабатывает при создании IndexDB и обновлении
openRequest.onupgradeneeded = function() {
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('favoriteMovies')) {
        db.createObjectStore('favoriteMovies', { keyPath: 'id' });
    }
    if (!db.objectStoreNames.contains('WatchedInfoMovie')) {
        db.createObjectStore('WatchedInfoMovie', { keyPath: 'id' });
    }
};

//если была какая-то ошибка
openRequest.onerror = function() {
    console.error("Error", openRequest.error);
};
/* -----------------------------*/


/* -----Для каких-либо действий используем------ */
openRequest.onsuccess = function(event) {
    getAllmovies();
};


/* ------------- добавления данных в БД----------------*/
function addMovie(db, movie) {
    let transaction = db.transaction("favoriteMovies", "readwrite");
    let objectStore = transaction.objectStore("favoriteMovies");
    let request = objectStore.add(movie); // запись в БД

}

/* ------------- чтения данных в БД----------------*/
function getAllmovies() {
    db = openRequest.result;
    let transaction = db.transaction("favoriteMovies", "readonly");
    let objectStore = transaction.objectStore("favoriteMovies");
    let request = objectStore.getAll();

    request.onsuccess = function(event) {
        let movies = request.result;
        if (movies) {
            movies.forEach(function(movie) {
                console.log($('div#fMovie'));
                $('div#fMovie').append(`<div class=movie></div>`);
                for (let key in movie) {
                    if (key != 'N/A') {
                        $('.movie').append(`<b>${key}</b> <span>${movie[key]}</span><br>`);
                    }
                }
                $('div#fMovie').append('<hr>');
            });


            /*
                ${
                    movie.forEach(function(key){
                        
                    })
                    } */
        }
    };
}

// 
// Обработку кнопки "добавить в избранное"
// запись в БД
//  добавить кнопку отрытия списка всех избранных фильмов
// показ из БД избранных
// и удаление из БД