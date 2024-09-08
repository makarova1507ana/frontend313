let namedb = 'testdb2';
let version = 1;
let openRequest = indexedDB.open(namedb, version); //создали БД

// Срабатывает при создании IndexDB и обновлении
openRequest.onupgradeneeded = function() {
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('books')) { // если хранилище == таблица "books"  не существует
        db.createObjectStore('books', { keyPath: 'id' }); // создаём хранилище
    }
};

//если была какая-то ошибка
openRequest.onerror = function() {
    console.error("Error", openRequest.error);
};

openRequest.onsuccess = function(event) {
    let db = openRequest.result;
    // продолжить работу с базой данных, используя объект db

    /*Создания объекта в БД */
    // создать транзакция == запрос -> создает объект -> прозводите тип транзации 
    let transaction = db.transaction('books', 'readwrite');
    let object_store = transaction.objectStore('books');
    let addRequest = object_store.add({
        id: 1,
        name: 'Ivan'
    })
};