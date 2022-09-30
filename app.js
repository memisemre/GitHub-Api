function dataCheck (){
    let data = fetch("https://api.github.com/users/memisemre/repos")
    .then(response=>response.json())
    .then(function(data){
        for(const [key,value] of Object.entries(data)){
            document.querySelector('.repo-area').innerHTML += `<div class="repo-container">
            <h3 class="repo-name"> ${value.name}</h3>
            <a href="${value.html_url}" target="_blank" class="link">Click</a>
            <a href="https://memisemre.github.io/${value.name}/" target="_blank" class="link">Page</a>
        </div>`
        }
    })
}
dataCheck()