function dataCheck (){
    let data = fetch("https://api.github.com/users/memisemre/repos")
    .then(response=>response.json())
    .then(function(data){
        for(const [key,value] of Object.entries(data)){
            function commitCheck(){
                let commits = fetch("https://api.github.com/repos/memisemre/GitHub-Api/commits")
                .then(res=>res.json())
                .then(function(res){
                    console.log(res)
                    const [commitKey,commitValue] = Object.entries(res)
                    console.log(commitValue)
                    console.log(commitValue[1].html_url)
                    document.querySelector('.repo-areas').innerHTML += `<div class="repo-area">
                    <h1>${value.name}</h1>
                    <div class="links">
                        <div class="github-link">
                            <a href="${value.html_url}" target="_blank" >GitHub</a>
                        </div>
                        <div class="page-link">
                            <a href="https://memisemre.github.io/${value.name}/" target="_blank" >GitHub Page</a>
                        </div>
                        <div class="latest-commit">
                            <a href="${commitValue[1].html_url}" target="_blank" >Latest Commit's</a>
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
