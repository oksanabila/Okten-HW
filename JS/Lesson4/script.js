const pi = 3.14;
// const pi = Math.PI;

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б (S=a*b).
function rectangleArea(a, b) {
    let result = a * b;
    return result;
}

console.log(`Площа прямокутника: ${rectangleArea(5, 3)}`);
// ---------------------------------------------------------------------------------------------------------------------



// - створити функцію яка обчислює та повертає площу кола з радіусом r  (S = πr2)
function circleArea(r) {
    let result = pi * (r * r);
    return result;

}

console.log(`Площа круга: ${circleArea(2)}`);
// ---------------------------------------------------------------------------------------------------------------------



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r  (S = 2πr(h+r))
function cylinderArea(h, r) {
    let result = 2 * pi * r * (h + r);
    return result;
}

console.log(`Площа циліндра: ${cylinderArea(10, 3)}`);
// ---------------------------------------------------------------------------------------------------------------------



// - створити функцію яка приймає масив та виводить кожен його елемент
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>${array[i]}</div>`);
    }
}

printArray(listOfItems);
// ---------------------------------------------------------------------------------------------------------------------



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let textExample = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus, eligendi, nobis!';
function paragraphCreate(text) {
    document.write(`<p>${text}</p>`);
}

paragraphCreate(textExample);
// ---------------------------------------------------------------------------------------------------------------------



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listCreate(text) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

listCreate('Довільний текст для списку');
// ---------------------------------------------------------------------------------------------------------------------



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listCreateExtended(text, liCount) {
    document.write(`<ul>`);
    for (let i = 0; i < liCount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

listCreateExtended('Довільний текст для списку', 20);
// ---------------------------------------------------------------------------------------------------------------------



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createRandomArray(arguments) {
    document.write(`<ol>`);
    for (let i = 0; i < arguments.length; i++) {
        document.write(`<li>${arguments[i]}</li>`);
    }
    document.write(`</ol>`);
}

createRandomArray(listOfItems);
// ---------------------------------------------------------------------------------------------------------------------



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'Vasil`', age: 31},
    {id: 2, name: 'Petro', age: 30},
    {id: 3, name: 'Mukolai', age: 29},
    {id: 4, name: 'Olga', age: 28},
    {id: 5, name: 'Maksym', age: 30},
    {id: 6, name: 'Ganna', age: 31},
    {id: 7, name: 'Oleg', age: 28},
    {id: 8, name: 'Andrii', age: 29},
    {id: 9, name: 'Mariia', age: 30},
    {id: 10, name: 'Olga', age: 31},
    {id: 11, name: 'Maksym', age: 31}
];
function printArrayOfObj(array) {
    for(let elem of array) {
        document.write(`<div class="obj-line">ID: ${elem.id}, Name: ${elem.name}, AGE: ${elem.age}</div>`)
    }
}

printArrayOfObj(users);
// ---------------------------------------------------------------------------------------------------------------------



// - створити функцію яка повертає найменьше число з масиву
let numArray = [2,17,13,6,22,31,45,66,100,-18, 0];
function returnLowest(array) {
    let min = array[0];
    for (const item of array) {
        if(item < min) {
            min = item;
        }
    }
    // return min;
    console.log(min);
}

returnLowest(numArray);
// ---------------------------------------------------------------------------------------------------------------------



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    console.log(result);

}
sum([1,2,10]);
sum(numArray);
// ---------------------------------------------------------------------------------------------------------------------



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let index1Value, index2Value;
    console.log(arr);
    index1Value =  arr[index1];
    index2Value = arr[index2];

    arr[index1] = index2Value;
    arr[index2] = index1Value;
    console.log(arr);
}

swap([11,22,33,44],0,1);
swap(numArray, 8, 2);
// ---------------------------------------------------------------------------------------------------------------------



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let result = 0;
    for(let elem in currencyValues) {
        if(currencyValues[elem].currency === exchangeCurrency) {
            result = sumUAH / currencyValues[elem].value;
        }
    }
    console.log(result);
}

exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');

