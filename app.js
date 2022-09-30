function dataCheck (){
    let data = fetch("https://api.github.com/users/memisemre/repos")
    .then(response=>response.json())
    .then(function(data){
        for(const [key,value] of Object.entries(data)){
            document.querySelector('.repo-container').innerHTML += `<div class="repo-area">
            <h1>${value.name}</h1>
            <div class="links">
                <div class="github-link">
                    <a href="${value.html_url}" target="_blank"">GitHub</a>
                </div>
                <div class="page-link">
                    <a href="https://memisemre.github.io/${value.name}/" target="_blank">Page Link</a>
                </div>
             </div>
        </div>`
        }
    })
}
dataCheck()