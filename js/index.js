document.addEventListener('DOMContentLoaded', init)
function init (){
const searchForm = document.getElementById('github-form');
// const search = document.getElementById('search')
searchForm.addEventListener('submit', searchUser);
}

function searchUser(e) {
    e.preventDefault();
    const search = document.querySelector('#search').value
    // console.log(e.target)
    // let inputName = e.target.value;
    // console.log(inputName)
    fetch(`https://api.github.com/search/users?q=${search}`)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => renderUsers(data))
}

function renderUsers(userArr){
    let userList = document.getElementById('user-list')
    userArr.items.forEach(element => {
        let li = document.createElement('li')
        li.textContent = element.login
        userList.appendChild(li)
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = element.avatar_url
        let para = document.createElement('p')
        para.textContent = element.url
        div.append(img, para)
        li.append(div)
        li.addEventListener('click', ()=> {
            let user = element.login
            // console.log(user)
            fetch(`https://api.github.com/users/${user}/repos`)
        .then(response => response.json())
        .then(data => displayRepos(user, data))
        })
    })};
    function displayRepos(user, data){
        // console.log(data.filter(data => user == data.owner.login)[0].owner.repos_url)
        console.log(data)
        let reposUrl = data.filter(data => user == data.owner.login)
        console.log(reposUrl)
        // [0].owner.repos_Url
        user.href = reposUrl

    }
