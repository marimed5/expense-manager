
//Q1 
/*
const URL = "https://jsonplaceholder.typicode.com/albums";

function fetchAlbums() {
    fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        const albums = data.filter((album) => album.title != null)
        .map((album) => ({id: album.id, title: album.title}));
        console.log(albums);
    })
}
fetchAlbums();
*/


//Q2 Using fetch method
/*
const URL = "https://jsonplaceholder.typicode.com/posts";

function fetchPosts() {
    fetch(URL).then((posts) => {
        return posts.json();
    }).then((data) => {
        const filtered = data.filter((user) => user.title != null);
        console.log(filtered.sort((a,b) => a.id - b.id));
    })
}
fetchPosts();
*/


//Q3
/*
const URL = "https://jsonplaceholder.typicode.com/users";

function fetchUsers() {
    fetch(URL).then((users) => {
        return users.json();
    }).then((data) => {
        const filtered = data.filter((user) => user.email != null)
        const numPhones = filtered.reduce((sum, user) => {
            if (user.phone != null) {
                return sum+1;
            }
            else {
                return sum;
            }
        }, 0);
        console.log(numPhones);
    })
}
fetchUsers();
*/


//Q5
/*
const URL = "https://jsonplaceholder.typicode.com/todos";

function fetchTodos() {
    fetch(URL).then((todos) => {
        return todos.json();
    }).then((data) => {
        const filtered = data.filter((user) => user.completed == false);
        console.log(filtered.map((user) => {
            return ({id: user.id, title: user.title});
        }))
    })
}
fetchTodos();
*/