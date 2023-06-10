// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)


//=============================================  Users  ================================================================

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

        let listItem = document.createElement('li');
        let link = document.createElement('a');
        link.href = `user-details.html?id=${user.id}`;
        link.innerText = `id ${user.id} : ${user.name}`;

        listItem.appendChild(link);
        usersList.appendChild(listItem);
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

    let userWrap = document.createElement('section');
    userWrap.classList.add('user-wrap');

    userWrap.innerHTML = `
<h3>Main info</h3>
<div class="grid">
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

<h3>Address info</h3>
<div class="grid">
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

<h3>Company info</h3>    
<div class="grid">
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
