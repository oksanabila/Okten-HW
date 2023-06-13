// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.


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
   <div class="user-info__wrap data-item">
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
    <div class="user-info__wrap data-item">
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
    <div class="user-info__wrap data-item">
        <div class="user-info__title"><h3>Company info</h3></div>
        <div>Company name:</div>
        <div>${userDetails.company.name}</div>

        <div>Catch phrase:</div>
        <div>${userDetails.company.catchPhrase}</div>

        <div>BS:</div>
        <div>${userDetails.company.bs}</div>
    </div>
`;
}

getUserDetails();


function getUserPosts() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${userId}/posts`, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            let userPosts = JSON.parse(xhr.responseText);
            displayUserPostTitles(userPosts);
        }
    };

    xhr.send();
}

//функція відображення постів юзера. додатково - відключення кнопки
function displayUserPostTitles (userPosts) {
    let postList = document.getElementById('postList');

    for(let post of userPosts) {
        let postItem = document.createElement('a');
        let pseudoLink = document.createElement('span');
        postItem.classList.add('post-item', 'data-item');
        postItem.innerText = post.title;
        postItem.href = `post-details.html?id=${post.id}`;

        pseudoLink.classList.add('pseudo-link');
        pseudoLink.innerText = 'See more';
        postItem.appendChild(pseudoLink);
        postList.appendChild(postItem);
    }
    btnShow.classList.add('btn_disabled');
    btnShow.setAttribute('disabled', '');
}

// додавання події для кнопки відображення постів
let btnShow = document.getElementById('showPostTitle');
btnShow.addEventListener("click", getUserPosts);

