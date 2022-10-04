function dataCheck (){
    let data = fetch("https://api.github.com/users/memisemre/repos")
    .then(response=>response.json())
    .then(function(data){
        for(const [key,value] of Object.entries(data)){
            document.querySelector('.repo-areas').innerHTML += `<div class="repo-area">
            <h1>${value.name}</h1>
            <div class="links">
                <div class="github-link">
                    <a href="${value.html_url}">GitHub</a>
                </div>
                <div class="page-link">
                    <a href="https://memisemre.github.io/${value.name}/">GitHub Page</a>
                </div>
                <div class="latest-commits">
                    <a href="#">Latest Commit's</a>
                </div>
            </div>
        </div>`
        }
    })
}
dataCheck();