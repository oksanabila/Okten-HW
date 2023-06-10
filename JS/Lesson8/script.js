// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let usersArray = []

for(let i = 0; i < 10; i++) {
    usersArray.push(new User(i, `Vasil-${i}`, `surname-${i}`, `email-${i}@gmail.com`, `12345678${i}`));
}
console.log(usersArray);
// =====================================================================================================================



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredArray =  usersArray.filter(function(number) {
    return number.id % 2 === 0;
});
console.log(filteredArray);
// =====================================================================================================================



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
usersArray.sort((a, b) => a.id > b.id ? 1 : -1);
console.log(usersArray);

//по спаданню
usersArray.sort((a, b) => a.id < b.id ? 1 : -1);
console.log(usersArray);
// =====================================================================================================================



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {

    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}


let clientsArray = [
new Client(1, 'Vasil', 'Vasilenko', 'vasil@gmail.com', '+380991234567', ['item1', 'item2']),
new Client(2, 'Petro', 'Petrenko', 'petro@gmail.com', '+380990000000', ['item1']),
new Client(3, 'Mukola', 'Mukolajchenko', 'mukola@gmail.com', '+380939991122', ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']),
new Client(4, 'Olga', 'Olgivna', 'olga@gmail.com', '+380939990088', ['item1', 'item2', 'item3',]),
new Client(5, 'Maksym', 'Maksymovuch', 'maksym@gmail.com', '+380969660088', ['item1', 'item2']),
new Client(6, 'Ganna', 'Vasilenko', 'ganna@gmail.com', '+380969661111', ['item1', 'item2', 'item3', 'item4', 'item5']),
new Client(7, 'Oleg', 'Tkach', '0leg@gmail.com', '+3809221110066', ['item1', 'item2', 'item3']),
new Client(8, 'Mariia', 'Lementa', 'lementa-m@gmail.com', '+3809520001100', ['item1', 'item2']),
new Client(9, 'Olga', 'Tkachenko', 'olga-t@gmail.com', '+3809920000000', ['item1', 'item2']),
new Client(10, 'Zoriana', 'Fedorenko', 'zori@gmail.com', '+380990099123', ['item1', 'item2', 'item3', 'item4', 'item5'])
]

console.log(clientsArray);
// =====================================================================================================================



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clientsArray.sort((a, b) => a.order.length > b.order.length ? 1 : -1);
console.log(clientsArray);
// =====================================================================================================================




// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, brand, release, maxSpeed, engineCapacity) {
    this.model = model;
    this.brand = brand;
    this.release = release;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
       console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };
    this.info = function () {
        console.log(`модель - ${model}, виробник - ${brand}, рік випуску - ${release}, максимальна швидкість - ${maxSpeed}, об'єм двигуна - ${engineCapacity}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        this.release = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let randomDriver = {
    name: 'Oleg',
    age: 31,
    drivePoints: 6,
}

let newCar = new Car('Mokka', 'Opel', 2022, 200, '1.2л' );
console.log(newCar);

newCar.increaseMaxSpeed(111);
newCar.changeYear('2017');

console.log(newCar.release);

newCar.addDriver(randomDriver);
console.log(newCar);

newCar.drive();
newCar.info();
// =====================================================================================================================



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class carClass {
    constructor(model, brand, release, maxSpeed, engineCapacity) {
        this.model = model;
        this.brand = brand;
        this.release = release;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info() {
        console.log(`модель - ${this.model}, виробник - ${this.brand}, рік випуску - ${this.release}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}`)
    };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newValue) {
        this.release = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
let newCarFromClass = new carClass('Stonic', 'KIA', 2023, 230, '1.5л' );
console.log(newCarFromClass);
newCarFromClass.info();

newCarFromClass.increaseMaxSpeed(12);
newCarFromClass.drive();

newCarFromClass.changeYear('2022');
newCarFromClass.addDriver(randomDriver);
// =====================================================================================================================



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, footSize) {
       this.name = name;
       this.age = age;
       this.footSize = footSize;
}
let cinderellas = [
    new Cinderella("Анна", 20, 36),
    new Cinderella("Віра", 22, 37),
    new Cinderella("Дарія", 19, 34),
    new Cinderella("Єва", 21, 38),
    new Cinderella("Жанна", 23, 36),
    new Cinderella("Зоя", 20, 39),
    new Cinderella("Ірина", 18, 37),
    new Cinderella("Катерина", 24, 35),
    new Cinderella("Лариса", 22, 38),
    new Cinderella("Марія", 25, 36)
]
console.log(cinderellas);
// =====================================================================================================================



// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let prince = new Prince("Олег", 28, 34);

console.log(prince);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i = 0; i < cinderellas.length; i++) {
    let cinderellaThis = cinderellas[i];
    if (cinderellaThis.footSize === prince.foundShoe) {
        console.log("Принц знайшов свою попелюшку:", cinderellaThis);
        break;
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let foundCinderella = cinderellas.find(function(cinderella) {
    return cinderella.footSize === prince.foundShoe;
});
console.log(foundCinderella);

if (foundCinderella) {
    console.log("Принц знайшов свою попелюшку:", foundCinderella);
} else {
    console.log("Попелюшка не знайдена.");
}

