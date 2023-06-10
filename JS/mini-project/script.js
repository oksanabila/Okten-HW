// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули
//
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули




// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
//



//=============================================  Index  ================================================================

function getUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://jsonplaceholder.typicode.com/users', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            let users = JSON.parse(xhr.responseText);
            displayUsers(users);
        }
    };

    xhr.send();
}

function displayUsers(users) {
    let usersList = document.getElementById('usersList');

    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        let userItem = document.createElement('div');
        let flex = document.createElement('div');
        let userName = document.createElement('div');
        let userID = document.createElement('div');
        let btnLink = document.createElement('a');

        userItem.classList.add('user-item');
        flex.classList.add('flex');
        userName.classList.add('user-item__name');
        userID.classList.add('user-item__id');
        btnLink.classList.add('btn');


        userName.innerText = user.name;
        userID.innerText = `ID: ${user.id}`;
        btnLink.href = `user-details.html?id=${user.id}`;
        btnLink.innerText = 'open detail page';

        flex.append(userName, userID);
        userItem.append(flex, btnLink);

        usersList.appendChild(userItem);
        // listItem.appendChild(link);
        // usersList.appendChild(listItem);
    }
}

getUsers();










//==========================================  UserDetails  =============================================================

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('id');

function getUserDetails() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/' + userId, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            let userDetails = JSON.parse(xhr.responseText);
            displayUserDetails(userDetails);
        }
    };

    xhr.send();
}

function displayUserDetails(userDetails) {
    let userInfo = document.getElementById('userInfo');


    userInfo.innerHTML = `
   <div class="user-info__wrap user-item">
        <div class="user-info__title"><h3>Main info</h3></div>
        <div>ID:</div>
        <div>${userDetails.id}</div>

        <div>Name:</div>
        <div>${userDetails.name}</div>

        <div>Username:</div>
        <div>${userDetails.username}</div>

        <div>Email:</div>
        <div>${userDetails.email}</div>
        <div>Phone:</div>
        <div>${userDetails.phone}</div>

        <div>Website:</div>
        <div>${userDetails.website}</div>
    </div>
    <div class="user-info__wrap user-item">
        <div class="user-info__title"><h3>Address info</h3></div>
        <div>Street:</div>
        <div>${userDetails.address.street}</div>

        <div>Suite:</div>
        <div>${userDetails.address.suite}</div>

        <div>City:</div>
        <div>${userDetails.address.city}</div>

        <div>ZIP Code:</div>
        <div>${userDetails.address.zipcode}</div>

        <div>Geo:</div>
        <div>Lat: ${userDetails.address.geo.lat}, Lng: ${userDetails.address.geo.lng}</div>
    </div>
    <div class="user-info__wrap user-item">
        <div class="user-info__title"><h3>Company info</h3></div>
        <div>Company name:</div>
        <div>${userDetails.company.name}</div>

        <div>Catch phrase:</div>
        <div>${userDetails.company.catchPhrase}</div>

        <div>BS:</div>
        <div>${userDetails.company.bs}</div>
    </div>
`;
    userInfo.appendChild(userWrap);
}

getUserDetails();
