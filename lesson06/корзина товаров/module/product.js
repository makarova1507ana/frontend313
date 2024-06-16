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




    get_products() {
        let items = localStorage.getItem('items');
        items = JSON.parse(items);
        return items;
    }
}