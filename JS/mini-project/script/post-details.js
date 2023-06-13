// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let urlParams = new URLSearchParams(window.location.search);
let postId = urlParams.get('id');
let author;
function getPostDetails() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${postId}`, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            let postDetails = JSON.parse(xhr.responseText);
            displayUserDetails(postDetails);
        }
    };

    xhr.send();
}

function displayUserDetails(postDetails) {
    getAuthor(postDetails.userId);

    let postTitle = document.getElementById('postTitle');
    let postId = document.getElementById('postId');
    let postBody = document.getElementById('postBody');

    postTitle.innerText = postDetails.title;
    postId.innerText = postDetails.id;
    postBody.innerText = postDetails.body;
}

getPostDetails();

//Отримання об'єкта автора коментаря
function getAuthor(id) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${id}`, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            author = JSON.parse(xhr.responseText);
            displayAuthor(author);
            fillBacklink(author);
        }
    };
    xhr.send();
}

//Вивід імені автора коментаря
function displayAuthor(author) {
    let postAuthor = document.getElementById('postAuthor');
    postAuthor.innerText = author.name;
}

// заповнення посилання на попередню сторінку
function fillBacklink(author) {
    let backPage = document.getElementById('backPage');
    backPage.href = `user-details.html?id=${author.id}`;
}

//Отримання масива об'єктів коментарів
function getComments() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${postId}/comments`, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            let comments = JSON.parse(xhr.responseText);
            displayComments(comments);
        }
    };
    xhr.send();
}

//Вивід коментарів
function displayComments(comments) {
    let commentsWrap = document.getElementById('comments');

    for(let comment of comments) {
        let commentItem = document.createElement('div');
        let commentName = document.createElement('h4');
        let flex = document.createElement('div');
        let commentEmail = document.createElement('div');
        let commentId = document.createElement('div');
        let commentBody = document.createElement('p');

        commentItem.classList.add('comment', 'data-item');
        commentName.classList.add('comment__name');
        flex.classList.add('flex');
        commentEmail.classList.add('comment__email');
        commentId.classList.add('comment__id');
        commentBody.classList.add('comment__body');

        commentName.innerText = comment.name;
        commentEmail.innerText = comment.email;
        commentId.innerText = `ID: ${comment.id}`;
        commentBody.innerText = comment.body;

        flex.append(commentEmail, commentId);
        commentItem.append(commentName, flex, commentBody);
        commentsWrap.appendChild(commentItem);
    }
}

getComments();

