/* -----------минмиальный шаблон для создания БД и хранилища с 1 записью----------- */
let namedb = 'testdb1';
let version = 1;
$(document).ready(function() {
    let openRequest = indexedDB.open(namedb, version); // создали / установили соединение БД

    // Срабатывает при создании IndexDB и обновлении
    openRequest.onupgradeneeded = function() {
        let db = openRequest.result;
        if (!db.objectStoreNames.contains('users')) { // если хранилище == таблица "users"  не существует
            db.createObjectStore('users', { keyPath: 'id' }); // создаём хранилище
        }
    };

    //если была какая-то ошибка
    openRequest.onerror = function() {
        console.error("Error", openRequest.error);
    };
    /* -----------------------------*/


    /* -----Для каких-либо действий используем------ */
    openRequest.onsuccess = function(event) {
        let db = openRequest.result;
        getAllUser(db);

        $('button').click(
            function(e) {

                let id_user = $('input#id').val();
                let name_user = $('input#name').val();
                user = {
                    id: id_user,
                    name: name_user
                }
                addUser(db, user);
                $(".users").empty();
                getAllUser(db);
            });

    }
});

/* -------------ПРИМЕР добавления данных в БД----------------*/
function addUser(db, user) {
    let transaction = db.transaction("users", "readwrite");
    let objectStore = transaction.objectStore("users");
    let request = objectStore.add(user); // запись в БД
    /* можно заменить или убрать вообще
        request.onsuccess = function(event) {
            console.log("Пользователь успешно добавлен:", user);
        };

        request.onerror = function(event) {
            console.log("Ошибка при добавлении пользователя:", event);
        };*/
}

/* -------------ПРИМЕР чтения данных в БД----------------*/
function getAllUser(db) {
    let transaction = db.transaction("users", "readonly");
    let objectStore = transaction.objectStore("users");
    let request = objectStore.getAll();

    request.onsuccess = function(event) {
        let users = request.result;
        if (users) {
            console.log("Пользователь найден:", users);

            users.forEach(user => {
                $('.users').append(`
                        <div class="user">
                        <b>id: </b>${user.id}
                        <b>name: </b>${user.name}
                        </div>`);
            });
        } else {
            console.log("Пользователь не найден");

        }
    };

    request.onerror = function(event) {
        console.log("Ошибка при запросе пользователя:", event);
    };
}

function getUserById(db, userId) {
    let transaction = db.transaction("users", "readonly");
    let objectStore = transaction.objectStore("users");
    let request = objectStore.get(userId);

    request.onsuccess = function(event) {
        if (request.result) {
            console.log("Пользователь найден:", request.result);
        } else {
            console.log("Пользователь не найден");
        }
    };

    request.onerror = function(event) {
        console.log("Ошибка при запросе пользователя:", event);
    };
}