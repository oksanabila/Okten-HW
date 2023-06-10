// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let f1 = document.forms.f1;
let resultBlock= document.getElementById('formResults');

f1.onsubmit = function (ev) {
    ev.preventDefault();
    let resultObj= {
        name: this.name.value,
        surName: this.surName.value,
        age: this.age.value,
    }

    let title = document.getElementById('resultsTitle');

    let name = document.createElement('p');
    let surName = document.createElement('p');
    let age = document.createElement('p');

    name.classList.add('res-item');
    surName.classList.add('res-item');
    age.classList.add('res-item');

    name.innerText = `${Object.keys(resultObj)[0]}: ${resultObj.name}`;
    surName.innerText = `${Object.keys(resultObj)[1]}: ${resultObj.surName}`;
    age.innerText = `${Object.keys(resultObj)[2]}: ${resultObj.age}`;

    title.classList.remove('d-none');
    resultBlock.appendChild(name);
    resultBlock.appendChild(surName);
    resultBlock.appendChild(age);
};
// =====================================================================================================================



// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let counter = document.getElementById('counter');

window.onload = function () {
    let currentNum = localStorage.getItem('number');
    currentNum = parseInt(currentNum);

    let newNum = currentNum + 1;
    counter.innerText = newNum.toString();
    localStorage.setItem('number', newNum);
};
// =====================================================================================================================



// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої
// потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

function saveSessionInfo() {
    let currentDate = new Date();
    let sessions = JSON.parse(sessionStorage.getItem('sessions')) || [];

    sessions.push({
        date: currentDate.toLocaleDateString(),
        time: currentDate.toLocaleTimeString()
    });

    localStorage.setItem('sessions', JSON.stringify(sessions));
    console.log(sessions);
}
// =====================================================================================================================



// зробити масив на 100 об'єктів та дві кнопки prev next при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів При натисканні prev виводяться попередні 10 об'єктів
// Створюємо масив з 100 об'єктів
let objList = [];
for (let i = 1; i <= 100; i++) {
    objList.push({ id: i, name: `Об'єкт номер ${i}` });
}
console.log(objList);

let prevBtn = document.getElementById('prevButton');
let nextBtn = document.getElementById('nextButton');
let objContainer = document.getElementById('objectContainer');
let startIndex = 0;
let endIndex = 9;

function showObj() {
    objContainer.innerHTML = '';
    for (let i = startIndex; i <= endIndex; i++) {
        let obj = objList[i];
        console.log(obj);
        console.log(startIndex);
        console.log(endIndex);
        let objElement = document.createElement('div');
        objElement.classList.add('obj-item');
        objElement.innerText = `${Object.keys(obj)[0]}: ${obj.id}, ${Object.keys(obj)[1]}: ${obj.name}`;
        objContainer.appendChild(objElement);
    }
}
function prevPage() {
    if (startIndex > 0) {
        startIndex -= 10;
        endIndex -= 10;
        showObj();
    }
}
function nextPage() {
    if (endIndex < objList.length - 1) {
        startIndex += 10;
        endIndex += 10;
        showObj();
    }
}

prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);

showObj();
// =====================================================================================================================




// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let text = document.getElementById('text');
function removeText() {
    text.classList.add('d-none');
}
// =====================================================================================================================




//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let f2 = document.forms.f2;
f2.onsubmit = function (ev) {
    ev.preventDefault();
    let age = this.age.value;
    if(age < 18) {
        alert('Увага! Вік користувача менший за 18 років!');
    } else if (age > 140) {
        alert('стільки не живуть');
    } else {
        alert('все окей :)');
    }
};
// =====================================================================================================================




// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

// userTable.innerHTML = `
//             <tr>
//                 <td>ID:</td>
//                 <td>${userDetails.id}</td>
//             </tr>
//             <tr>
//                 <td>Name:</td>
//                 <td>${userDetails.name}</td>
//             </tr>
//             <tr>
//                 <td>Username:</td>
//                 <td>${userDetails.username}</td>
//             </tr>
//             <tr>
//                 <td>Email:</td>
//                 <td>${userDetails.email}</td>
//             </tr>
//             <tr>
//                 <td>Phone:</td>
//                 <td>${userDetails.phone}</td>
//             </tr>
//             <tr>
//                 <td>Website:</td>
//                 <td>${userDetails.website}</td>
//             </tr>
//             <tr>
//                 <td>Company:</td>
//                 <td>${userDetails.company.name}</td>
//             </tr>
//             <tr>
//                 <td>City:</td>
//                 <td>${userDetails.address.city}</td>
//             </tr>
//             <tr>
//                 <td>Street:</td>
//                 <td>${userDetails.address.street}</td>
//             </tr>
//             <tr>
//                 <td>Suite:</td>
//                 <td>${userDetails.address.suite}</td>
//             </tr>
//             <tr>
//                 <td>ZIP Code:</td>
//                 <td>${userDetails.address.zipcode}</td>
//             </tr>
//             <tr>
//                 <td>Geo:</td>
//                 <td>Lat: ${userDetails.address.geo.lat}, Lng: ${userDetails.address.geo.lng}</td>
//             </tr>
//         `;