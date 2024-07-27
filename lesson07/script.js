// // Наследование
// class Animal { // класс Родитель
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     speak = () => { console.log(this.name + " говорит") };

// }

// /* class Dog
//  * получил свойства name, age от Animal
//  * получил метод(ы) speak от Родительского класса (Animal)
//  */
// class Dog extends Animal { // class Dog(класс потомка) наследуется от класса Animal 
//     bark = () => { console.log("Лаять") }; // новое действие 
// }

// animal = new Animal('Имя', 5); // class Animal 
// animal.speak();
// // animal.bark(); // приведет к ошибке, потому что этот метод bark есть только у потомка

// dog = new Dog("Чак", 5);
// dog.speak();
// dog.bark();








/*-----------------------задача---------------------------------*/
/*
Создайте базовый класс "Устройство"(имя,  стоимость, включить, выключить). 
Добавьте подклассы, представляющие различные устройства, такие как "Телевизор"(смореть каналы), 
"Смартфон" (звонить). 
*/
// class Electronics {
//     constructor(name, cost, on, of) {
//         this.name = name;
//         this.cost = cost;
//         // this.on = on;
//         // this.of = of;
//     }
//     turn_on() {
//         console.log(this.name + " включено");
//     }
//     turn_off() {
//         console.log(this.name + " выключено");
//     }
// }
// class Tv extends Electronics {

//     watchСhannels() {
//         console.log(this.name + "смотреть каналы");
//     }
// }

// class Smartphone extends Electronics {

//     call() {
//         console.log(this.name + "звонит");
//     }
// }

// device1 = new Electronics("TV", 50000, on, of);
// Electronics.watchСhannels();
// device2 = new Electronics("Smartphone", 80000, on, of);
// Electronics.call();





/*------------добавление потомкам новых свойств--------- */

class Electronics {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
        // this.on = on;
        // this.of = of;
    }
    turn_on() {
        console.log(this.name + " включено");
    }
    turn_off() {
        console.log(this.name + " выключено");
    }
}
class Tv extends Electronics {
    /* 
    марка
    общее кол-во каналов
    объекты каналов 
    channels = {1: 'channel1', 2: 'channel2'}
    */
    constructor(name, cost, mark) { //расширяем
        super(name, cost); //super() -  специальнаая функци, которая вызывает конструктор родительского класса
        this.mark = mark;
        this.total_channels = 3;
        this.channels = { 1: 'channel1', 2: 'channel2', 3: 'channel3' };
    }
    watchСhannels() {
        console.log(this.name + "смотреть каналы");
    }
}



device1 = new Tv("TV", 50000, 'mark1');
console.log(device1.name, device1.cost, device1.mark);
device1.watchСhannels();


class Smartphone extends Electronics {

    call() {
        console.log(this.name + "звонит");
    }
}

// device2 = new Electronics("Smartphone", 80000, on, of);
// Electronics.call();