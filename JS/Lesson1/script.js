// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log


let h = 'hello';
let o = 'owu';
let com = 'com';
let ua = 'ua';
let one = 1;
let ten = 10;
let almostThousand = -999;
let pi = 3.14;
let two = 2.7;
let sixteen = 16;
let yes = true;
let no = false;

console.log(h);
console.log(o);
console.log(com);
console.log(ua);
console.log(one);
console.log(ten);
console.log(almostThousand);
console.log(pi);
console.log(two);
console.log(sixteen);
console.log(yes);
console.log(no);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)


let firstName = 'Оксана';
let middleName = 'Русланівна';
let lastName = 'Біла';
let person = `${firstName} ${middleName} ${lastName}`;

console.log(person);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.


let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let promptFirstName = prompt('Input first name', 'str');
let promptMiddleName = prompt('Input middle name', 'str');
let promptLastName = prompt('Input last name', 'str');

console.log(promptFirstName);
console.log(promptMiddleName);
console.log(promptLastName);