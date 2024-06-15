// class User {
//     constructor(name, age) { // method - особый метод, который срабатывает в момент создания экзмепляра
//         console.log("Начало работы конструктора");
//         this.name = name; // this - указатель на экземпляр класса
//         this.age = age;
//         console.log(this, this.age, this.name);
//         console.log("Конец работы конструктора");
//     }

//     work() { // method
//         console.log('Работает', this.name, this.age);
//     }
// }
// // user1 - экземпляр класса User
// user1 = new User("Ivan", 30);
// user2 = new User('Natasha', 18);
// // console.log(typeof(user1));
// // console.log(typeof(user2));
// user1.work()
// user2.work()





/* ------------------------Задача------------------------ */

/*
Создайте класс, представляющий товар или продукт, 
хранящий информацию о его названии, цене, количестве на складе.
Создайте метод show, где вы будете показывать основую информацию о товаре
*/

// class Product {
//     constructor(product_name, cost, count) {
//         this.count = count;
//         this.product_name = product_name;
//         this.cost = cost;
//     }

//     show() {
//         console.log(this.count, this.product_name, this.cost);
//     }
// }

// let melon = new Product( "Дыня", "50rub", 20);

// product1 = new Product("Шоколадные конфетки", "20p.", 50);
// product2 = new Product("Леденцы", "10p.", 40);
// product3 = new Product("С начинкой", "50p.", 30);
// melon.show();




/*отображение списка товаров*/

class Product {
    // amount_objects = 1 // общее свойство классов

    constructor(name, price, count, id) {
        this.id = id //this.get_id();
        this.name = name;
        this.price = price;
        this.count = count;
        this.img = 'item.webp'
    }

    // get_id() {
    //     Product.amount_objects += 1;
    //     return Product.amount_objects;
    // }

    add(container_items) {
        // console.log(this.name, this.price, this.number);
        container_items.innerHTML += `  <span class="item" id="item-${this.id}">
            <table>
                <tr>
                    <th class="title"> ${this.name}</th>
                </tr>
                <tr>
                    <td class="image"> <img src="${this.img}"> </td>
                    <td class="price"> ${this.price}</td>
                </tr>
                <tr>
                    <td> <button class="btn-add-to-cart" id="${this.id}"> Добавить товар в корзину </button></td>
                    <td class="count">  ${this.count}</td>
                </tr>
            </table>
        </span>`
    }

    save_to_local_storage() {
        // console.log('Saving to local storage');
        items = localStorage.getItem('items');
        // console.log(typeof(items), items);
        if (typeof(items) === 'object') {
            items = [];
            items.push(this);
        } else {
            items = JSON.parse(items);
            items.push(this);
        }
        localStorage.setItem('items', JSON.stringify(items));
    }
}


function count_items() {
    items = localStorage.getItem('items');
    items = JSON.parse(items);
    count = items.length;
    amount_el = document.querySelector('.amount-at-cart');
    amount_el.innerHTML = `${count}`;
}


items = document.querySelector(".items");
// //
product1 = new Product("Шоколадные конфетки", "20p.", 50, 1);
product1.add(items);


product2 = new Product("Леденцы", "30p.", 10, 2);
product2.add(items);

product3 = new Product("печенье", "50p.", 1, 3);
product3.add(items);



products = {
    '1': product1,
    '2': product2,
    '3': product3
};

document.addEventListener("click", function(event) {
    //console.log(event);
    console.log(event.target);
    if (event.target && event.target.matches(".btn-add-to-cart")) { // опредляем что была нажата кнопка добавить в корзину
        //console.log(event.target.id)
        products[event.target.id].save_to_local_storage();
    }
    count_items();
})