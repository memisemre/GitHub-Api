function dataCheck (){
    let data = fetch("https://api.github.com/users/memisemre/repos")
    .then(response=>response.json())
    .then((data)=>{
        for(const [key,value] of Object.entries(data)){
            function commitCheck(){
                let commits = fetch("https://api.github.com/repos/memisemre/GitHub-Api/commits")
                .then(res=>res.json())
                .then((res)=>{
                    const [commitKey,commitValue] = Object.entries(res)
                    document.querySelector('.repo-cards-area').innerHTML += `<div class="repo-card">
                    <h1 class="repo-name">${value.name}</h1>
                    <div class="github-links d-flex">
                        <div class="github">
                            <a href="${value.html_url}" target="_blank"><img src="./img/github-logo.png" alt=""></a>
                        </div>   
                        <div class="github-page">
                            <a href="https://memisemre.github.io/${value.name}/" target="_blank"><img src="./img/page.png" alt=""></a>
                        </div>
                        <div class="github-latest-commit">
                            <a href="${commitValue[1].html_url}" target="_blank"> <img src="./img/commit-git.png" alt=""></a>
                        </div>
                    </div>
                </div>`
                })
            }
            commitCheck();
        }
    })
}
dataCheck();