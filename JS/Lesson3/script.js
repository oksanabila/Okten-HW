// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i = 0; i < 10; i++) {
    document.write("<div>Довільний текст</div>");
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(let i = 0; i < 10; i++) {
    document.write(`<div>Довільний текст + індекс [${i}]</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write("<h1>Довільний текст</h1>");
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let e = 0;
while (e < 20) {
    document.write(`<h1>Довільний текст + індекс [${e}]</h1>`);
    e++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for(let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write(`</ul>`);

// ---------------------------------------------------------------------------------------------------------------------

//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let product of products) {

    document.write(`<div class="product-card">
                            <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
                            <img src="${product.image}" alt="">
                      </div>`);
}
// ---------------------------------------------------------------------------------------------------------------------

//     є масив
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for(let user of users) {
    if(user.status === true) {
        document.write(`<div>Користувач зі статусом <b>true</b>: ${user.name}, ${user.status} <br></div>`);
    }
}

for(let user of users) {
    if(user.status === false) {
        document.write(`<div>Користувач зі статусом <b>false</b>: ${user.name}, ${user.status} <br></div>`);
    }
}

for(let user of users) {
    if(user.age > 30) {
        document.write(`<div>Користувач <b>віком від 30</b>: ${user.name}, ${user.age} <br></div>`);
    }
}





// ---------------------------------------Additional Tasks--------------------------------------------------------------
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let diffArray = [1, 2, 3, 4, 5, 'шість', 'сім', 'вісім', "дев'ять", 'десять', 100, false, true, 'anything1', 'anything2'];
console.log(diffArray);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArray = [];

emptyArray[0] = '1';
emptyArray[1] = 2;
emptyArray[2] = undefined;
emptyArray[3] = true;
emptyArray[4] = 'alarm';
emptyArray[5] = false;
console.log(emptyArray);
// ---------------------------------------------------------------------------------------------------------------------



// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let numArray = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
i = 0;
console.log('1. перебрати його циклом while');
while (i < numArray.length) {
    console.log(numArray[i]);
    i++;
}
console.log('');


// 2. перебрати його циклом for
console.log('2. перебрати його циклом for');
for(let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}
console.log('');


// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('3. перебрати циклом while та вивести  числа тільки з непарним індексом');
i = 0;
while (i < numArray.length) {
    if(i % 2 !== 0) {
        console.log(`Непарний індекс: ${numArray[i]}`);

    }
    i++;
}
console.log('');


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('4. перебрати циклом for та вивести  числа тільки з непарним індексом');
for(let i = 0; i < numArray.length; i++) {
    if(i % 2 !== 0) {
        console.log(`Непарний індекс: ${numArray[i]}`);

    }
}
console.log('');


// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('5. перебрати циклом while та вивести  числа тільки парні  значення');
i = 0;
while (i < numArray.length) {
    if(i % 2 === 0) {
        console.log(`Парний індекс: ${numArray[i]}`);
    }
    i++;
}
console.log('');


// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('6. перебрати циклом for та вивести  числа тільки парні  значення');
for(let i = 0; i < numArray.length; i++) {
    if(i % 2 === 0) {
        console.log(`Парний індекс: ${numArray[i]}`);
    }
}
console.log('');


// 7. замінити кожне число кратне 3 на слово "okten"
console.log('7. замінити кожне число кратне 3 на слово "okten"');
for(let i = 0; i < numArray.length; i++) {
    if(i % 3 === 0 && i > 0) {
        numArray[i] = 'okten'
    }
}
console.log(numArray);
console.log('');


// 8. вивести масив в зворотньому порядку.
console.log('8. вивести масив в зворотньому порядку.');
for(let i = numArray.length - 1; i >= 0; i--) {
    console.log(numArray[i]);
}
console.log('');


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

numArray = [2,17,13,6,22,31,45,66,100,-18];
console.log('9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)');
//1
i = numArray.length - 1;
while (i >= 0) {
    console.log(numArray[i]);
    i--;
}
console.log('');


//2
for(let i = numArray.length - 1; i >= 0; i--) {
    console.log(numArray[i]);
}
console.log('');


//3
i = numArray.length - 1;
while (i >= 0) {
    if(i % 2 !== 0) {
        console.log(`Непарний індекс: ${numArray[i]}`);

    }
    i--;
}
console.log('');


//4
for(let i = numArray.length - 1; i >= 0; i--) {
    if(i % 2 !== 0) {
        console.log(`Непарний індекс: ${numArray[i]}`);

    }
}
console.log('');


//5
i = numArray.length - 1;
while (i >= 0) {
    if(i % 2 === 0) {
        console.log(`Парний індекс: ${numArray[i]}`);
    }
    i--;
}
console.log('');

//6
for(let i = numArray.length - 1; i >= 0; i--) {
    if(i % 2 === 0) {
        console.log(`Парний індекс: ${numArray[i]}`);
    }
}
console.log('');

//7
for(let i = numArray.length - 1; i >= 0; i--) {
    if(i % 3 === 0 && i > 0) {
        numArray[i] = 'okten'
    }
}
console.log(numArray);




// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
