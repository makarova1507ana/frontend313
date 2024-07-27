/* 
Создать классы Device, TV, Smartphone
ориентируясь на шаблон 
https: //www.figma.com/design/wFwBGb89iYoPhaFVc4jbNS/%D0%9F%D0%BE%D1%81%D1%82%D1%8B-jsonplaceholder?node-id=28-24&t=l6wQx47kY2NkmtT9-1
Отображение на страницах пока можете не делать 
*/
//


class Device {
    constructor(name, price, image = 'images/device.png') {
        this.name = name;
        this.price = price;
        this.image = image;
    }
    display() {
        let block_devices;
        block_devices = document.querySelector('.devices');
        document.querySelector('.devices').innerHTML += `
        <div class="device">
            <h5>${this.name}</h5>
            <img src="${this.image}">
            <p>Price: ${this.price}</p>
        </div>`
    }
}

class TV extends Device {

    constructor(name, price, image, diagonal, is_smartTV) { //расширяем
        super(name, price, image);
        this.diagonal = diagonal;
        this.is_smartTV = is_smartTV;
    }

}


class Smartphone extends Device {
    constructor(name, price, image, screen, os) { //расширяем
        super(name, price, image);
        this.screen = screen;
        this.os = os;
    }

}

tv = new TV('tv1', 50000, 'images/tv.jpg', '24" (61 см)', true)
smartphone = new Smartphone('smartphone1', 500, 'images/smartphone.png', '8" (10 см)', 'Android')

tv.display();
smartphone.display();