// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strArray = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let i in strArray) {
    console.log(`Довжина '${strArray[i]}' -  ${strArray[i].length} символів`);
}
// =====================================================================================================================



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
for (let i in strArray) {
    strArray[i] = strArray[i].toUpperCase();
}
console.log(strArray);
// =====================================================================================================================



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
for (let i in strArray) {
    strArray[i] = strArray[i].toLowerCase();
}
console.log(strArray);
// =====================================================================================================================



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtStr = ' dirty string   ';
//варіант 1
// dirtStr = dirtStr
//     .replace(' ', '')
//     .slice(0, 12);

// варіант 2
dirtStr = dirtStr.trim();
console.log(dirtStr);
// =====================================================================================================================



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let strPoem = 'Ревуть воли як ясла повні';
strPoem = strPoem.split(' ');
console.log(strPoem);
// =====================================================================================================================



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numArray = [10,8,-7,55,987,-1011,0,1050,0];
numArray = numArray.map(value => value + '')
console.log(numArray);
// =====================================================================================================================



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
function  sortNums(nums, direction) {
    if (direction === 'ascending') {
        nums = nums.sort( (a, b) => a - b );
        console.log(nums);
    } else if (direction === 'descending') {
        nums = nums.sort( (a, b) => a - b );
        nums = nums.reverse();
        console.log(nums);
    } else {
        console.log('Невірно заданий direction');
    }
}
sortNums(nums,'ascending');
sortNums(nums,'descending');
sortNums(nums,'dsf');
// =====================================================================================================================



// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => a.monthDuration > b.monthDuration ? 1 : -1);
console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let newCoursesArray = coursesAndDurationArray.filter(function(number) {
    return number.monthDuration > 5;
});
console.log(newCoursesArray);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
})
console.log(coursesAndDurationArray);
// =====================================================================================================================



//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
];

// - знайти піковий туз (spade, ace)
let spadeAce = cards.filter(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

// - всі шістки
let allSix = cards.filter(card => card.value === '6');
console.log(allSix);

// - всі червоні карти
let allRed = cards.filter(card => card.color === 'red');
console.log(allRed);

// - всі буби (diamond)
let allDiamond = cards.filter(card => card.cardSuit === 'diamond');
console.log(allDiamond);

// - всі трефи від 9 та більше (clubs)
let clubsNinePlus = cards.filter(card => card.cardSuit === 'clubs' && (card.value  >= '9' || parseInt(card.value) >= 9));
console.log(clubsNinePlus);
// =====================================================================================================================



//  Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {spades:[], diamonds:[], hearts:[], clubs:[]}

let newCardsObj = cards.reduce((accumulator, user) => {
    if (user.cardSuit === 'spade') {
        accumulator.spades.push(user);
    } else if (user.cardSuit === 'diamond') {
        accumulator.diamonds.push(user);
    } else if (user.cardSuit === 'heart') {
        accumulator.hearts.push(user);
    } else if (user.cardSuit === 'clubs') {
        accumulator.clubs.push(user);
    }
    return accumulator;

}, {spades:[], diamonds:[], hearts:[], clubs:[]});
console.log(newCardsObj);
// =====================================================================================================================

//
//
// //  взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// // --написати пошук всіх об'єктів, в який в modules є sass
// let includesSass = coursesArray.filter(value => value.modules.includes('sass'));
// console.log(includesSass);
//
// // --написати пошук всіх об'єктів, в який в modules є docker
// let includesDocker = coursesArray.filter(value => value.modules.includes('docker'));
// console.log(includesDocker);