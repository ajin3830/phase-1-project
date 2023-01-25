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
    .then(data => renderBehindName(data))
 }

 function renderBehindName(data) {
    let usageLang = []
    data.forEach( name => {
        const usages = name.usages.map(usage => usage.usage_full)
        console.log(usages)
        usages.forEach( usage => usageLang.push(usage))
    })
    console.log(usageLang)

 }

// function renderBehindName(data) {
    
//     data.forEach(name => usageLang.push(usage.usage_full))
//     console.log()
// }

// language, gender inside a table using iteration
// array1: name male
// array2: name female
// array3: name 








