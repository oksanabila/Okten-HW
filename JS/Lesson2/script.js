// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let randomArray = [12, -0, 'string', null, 15, true, 'ivan', undefined, NaN, false]
for (let i in randomArray) {
    console.log(randomArray[i]);
}
// ---------------------------------------------------------------------------------------------------------------------


// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bookObj1 = {
    title: 'The Shining',
    pageCount: 447,
    genre: 'horror novel'
}

let bookObj2 = {
    title: 'Invisible Monsters',
    pageCount: 297,
    genre: 'transgressive fiction'
}

let bookObj3 = {
    title: 'Go Like Hell: Ford, Ferrari, and Their Battle for Speed and Glory at Le Mans',
    pageCount: 336,
    genre: 'history'
}

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.
let bookObj4 = {
    title: 'Джордж і незламний код',
    pageCount: 344,
    genre: 'Дитяча Література',
    authors: [
        {
            name: 'Люсі Гокінґ',
            age: 53,
        },
        {
            name: 'Стівен Гокінґ',
            age: 76,
        }
    ]
}

let bookObj5 = {
    title: 'Це зробила вона',
    pageCount: 104,
    genre: 'Дитяча Література',
    authors: [
        {
            name: 'Тамара Гундорова',
            age: 67,
        },
        {
            name: 'Валентина Вздульська',
            age: 39,
        },
        {
            name: 'Олександра Орлова',
            age: 39,
        },
        {
            name: 'Вікторія Амеліна',
            age: 37,
        },
        {
            name: 'Юлія Стахівська',
            age: 37,
        }
    ]
}

let bookObj6 = {
    title: 'Шість головоломок для дона Ісидро Пароді',
    pageCount: 224,
    genre: 'Художня Література',
    authors: [
        {
            name: 'Хорхе Луї Борхес',
            age: 86,
        },
        {
            name: 'Адольфо Біой Касарес',
            age: 84,
        }
    ]
}
// ---------------------------------------------------------------------------------------------------------------------


// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача
let users = [
    {
        name: 'Jessica Hardin',
        username: 'jess_hard0306',
        password: 'zD&5a0o54a##',
    },
    {
        name: 'Franklin Bauer',
        username: 'frank_B',
        password: '$1dVw4JrEF59',
    },
    {
        name: 'Tangy Taura',
        username: 'tangy_taura1993',
        password: '3Sr232Ez*VEY',
    },
    {
        name: 'Aron O`Brien',
        username: 'aron-o-brien',
        password: '1s2zJVOn6B&0',
    },
    {
        name: 'Alvin Key',
        username: 'key-alvin2023',
        password: '378maX26&X2Y',
    },
    {
        name: 'Malakai Schroeder',
        username: 'malakai-schroeder0904',
        password: '1L0%4e@Jo3J*',
    },
    {
        name: 'Patricia Church',
        username: 'patricia-church2020',
        password: 'U15zW*9iz@1h',
    },
    {
        name: 'Tianna Harrell',
        username: 'harrell-tian',
        password: 'pp@Hkk4Y8214',
    },
    {
        name: 'Claudia Maddox',
        username: 'maddox_claudia9898',
        password: 'q757X83^!Hwp',
    },
    {
        name: 'Azaline Dou',
        username: 'dou-azalie3435',
        password: '78X^!azalie3435',
    },
]
for (let user of users) {
        console.log(user.password);
}


// ---------------------------------------------------------------------------------------------------------------------


// Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
// інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Введіть рандомне число');
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Не вірно');
}
// ---------------------------------------------------------------------------------------------------------------------


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).
let time = Math.floor(Math.random() * 60);
if (time >= 0 && time <= 14) {
    console.log(`Число відноситься до першої чверті години (${time})`);
} else if (time >= 15 && time <= 29) {
    console.log(`Число відноситься до другої чверті години (${time})`);
} else if (time >= 30 && time <= 44) {
    console.log(`Число відноситься до третьої чверті години (${time})`);
} else {
    console.log(`Число відноситься до четвертої чверті години (${time})`);
}
// ---------------------------------------------------------------------------------------------------------------------


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).
let day = Math.floor(Math.random() * 32);
if (day > 0 && day <= 10) {
    console.log(`Це перша декада місяця (${day})`);
} else if (day > 10 && day <= 20) {
    console.log(`Це друга декада місяця (${day})`);
} else {
    console.log(`Це третя декада місяця (${day})`);
}
// ---------------------------------------------------------------------------------------------------------------------


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekDay = +prompt('Введіть порядковий номер тижня');
switch (weekDay) {
    case 1:
        console.log(`В понеділок: ранкова йога, планування тижня та плідна робота`);
        break;
    case 2:
        console.log(`У вівторок: ранкова кава, робота весь день, вечірня прогулянка`);
        break;
    case 3:
        console.log(`У середу: все як і у вівторок, тільки ввечері - квіз в Оплесках`);
        break;
    case 4:
        console.log(`У четвер: ще робота, ввечері зустріч з друзями`);
        break;
    case 5:
        console.log(`П'ятниця розпочнеться зі стоматолога, а потім робота)`);
        break;
    case 6:
        console.log(`Вся субота піде на відпочинок на природі. Можливо, трекінг. Прибрати хату`);
        break;
    case 7:
        console.log(`Неділя: дивитись Мандалорця та їсти смаколики`);
        break;
    default:
        console.log('Розкладу немає')

}
// ---------------------------------------------------------------------------------------------------------------------


// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let num1 = +prompt('Введіть перше будь-яке число');
let num2 = +prompt('Введіть друге будь-яке число');
if (num1 === num2) {
    console.log('Введені числа є однаковими');
} else if(num1 > num2) {
    console.log(num1);
} else if(num1 < num2){
    console.log(num2);

}
// ---------------------------------------------------------------------------------------------------------------------


// - є змінна х2, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х2 являється
// falsy (хибноподібні, тобто приводиться до false)
let arrayIndex = Math.floor(Math.random() * randomArray.length)
let x2 = randomArray[arrayIndex];
if (x2 === false || x2 === null || isNaN(x2) || x2 === undefined || x2 === 0 || x2 === -0) {
    console.log(x2);
    x2 = 'default';
}
console.log(x2);
// ---------------------------------------------------------------------------------------------------------------------


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let item of coursesAndDurationArray) {
    if (item.monthDuration > 5) {
        console.log("Супер");
    }
}
