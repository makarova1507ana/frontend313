//const descData = require("./module");
//import { Product } from "./module/product.js";


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