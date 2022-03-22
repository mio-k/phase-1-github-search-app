const searchForm = document.getElementById('github-form');
document.addEventListener('submit', searchUser);

function searchUser(e) {
    e.preventDefault();
    let inputName = e.target.value;
    // fetch(`https://api.github.com/search/users?q=${inputName}`)
    // .then (response => console.log(response.json()))
    // .then ()
    // }
    fetch(`https://api.github.com/search/users?q=${inputName}`, {
        method: "GET",
        headers:
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "username": e.target.login.value,
            "avatar": e.target.avatar_url,
            "profile": e.target.url,
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))

}