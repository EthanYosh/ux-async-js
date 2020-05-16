window.onload = function () { // Run this once the page has loaded.
    // search
    document.querySelector("#searchButton").addEventListener("click", searchGithub);
    function searchGithub() {
        const searchUserText = document.querySelector("#searchUser").value;





        fetch("https://api.github.com/search/users?q=" + searchUserText)



        .then((resp) => resp.json())


        .then((result) => {
            let theList = result.items
            renderUserList(theList);
        });


        .catch(function(error) {
          console.log(JSON.stringify(error));
        });  








       
    }

    function renderUserList(githubUsers) {
        let html = "";
        html += "<ul>";
        for (let i = 0; i < githubUsers.length; i++) {
            let githubUser = githubUsers[i];
            html += "<li>";
            html += `<img src=${githubUser.avatar_url}/>`;
            html += `<strong>${githubUser.login}</strong>`;
            html += `<a target="_blank" href="${githubUser.html_url}">`;
            html += "</li>";
        }
        html += "</ul>";

        document.querySelector("#resultsContainer").innerHTML = html;
    }
}

// Obtain a list of users from the Github API that match searchUserText
        //  The final result will contain an array under the key 'items'
        // Pass this array to `renderUserList`