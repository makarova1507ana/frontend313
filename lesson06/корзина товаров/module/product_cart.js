/*отображение списка товаров*/

let products;
let container_products = document.querySelector(".items");
let total_sum_container = document.querySelector('.total > span');
let clear_cart_btn = document.querySelector('.clear-cart');

function get_total_sum(products) {
    let total_sum = 0;
    products.forEach(product => {
        price = product.price;
        price = parseInt(price.replace('p.', ''));
        // console.log(price, typeof(price));
        //console.log(total_sum, typeof(total_sum));
        total_sum += price;
    });


    return total_sum.toString();

}

function clear_cart() {
    localStorage.removeItem('items'); // removeItem - удалить ключ вместе со значением
    location.reload();

}

function delete_product_from_storage(products, id) {
    //console.log(products, id, products[0].id);
    for (let i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            products.pop(i);
            break;
        }
    }
    localStorage.setItem('items', JSON.stringify(products));


}


document.addEventListener('DOMContentLoaded', () => {
    product = new Product('', '', 1); // для работы класса
    products = product.get_products();
    //console.log(products);
    if (products != null) {
        products.forEach(product => {
            product = new Product(product.name, product.price, product.count, product.id);
            product.add(container_products);
        });
        array_btns = document.querySelectorAll(".btn-add-to-cart");
        array_btns.forEach(element => {
            element.innerHTML = "удалить товар из корзины";
            element.className = "btn-delete-from-cart";

        });
        //console.log(products);
        total_sum = get_total_sum(products);
        //console.log(total_sum, typeof(total_sum));
        //console.log(total_sum_container);
        total_sum_container.innerHTML = total_sum;
    } else {
        container_products.innerHTML = 'Корзина пуста';
    }

});


clear_cart_btn.addEventListener('click', clear_cart);

document.addEventListener('click', function(event) {
    if (event.target && event.target.matches(".btn-delete-from-cart")) { // опредляем что была нажата кнопка добавить в корзину
        //console.log(event.target.id)

        delete_product_from_storage(products, event.target.id);
        location.reload();

    }
});