const searchedname = document.querySelector("#card-title");
const predictedage = document.querySelector("#predicted-age")

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
    //     let submittedname = e.
        fetchAgify(e.target["name-search"].value)
        fetchBehindName(e.target["name-search"].value)
        console.log(e);
    
    });
});

 function fetchAgify(submittedName) {
    fetch(`https://api.agify.io?name=${submittedName}`)
    .then(response => response.json())
    .then(data => console.log(data))
 
 }
 
 function fetchBehindName(submittedName) {
     fetch(`https://www.behindthename.com/api/lookup.json?name=${submittedName}&key=ju257858736`)
    .then(resp => resp.json())
    .then(data => console.log(data))
 }

 
// language, gender inside a table using iteration








