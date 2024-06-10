let user = {
    name: 'Jhon', // свойство объекта name
    age: 34,
};

// method - метод  == функция, но она принадлжеит объекту

user.work = function() {
    console.log(user.name + ' work!');
}
n = 5;
n2 = 4;
n3 = 2;
console.log(typeof(user));
user.work();



class User {
    constructor(name, age) { // method - особый метод, который срабатывает в момент создания экзмепляра
        this.name = name; // this - указатель на экземпляр класса
        this.age = age;
    }
    work() { // method
        console.log(this.name, this.age);
    }
}

user1 = new User("Ivan", 30);
user2 = new User('Natasha', 18);
console.log(typeof(user1));
console.log(typeof(user2));
user1.work()
user2.work()