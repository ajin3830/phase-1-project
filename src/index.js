const searchedName = document.querySelector("#card-title");
const predictedAge = document.querySelector("#age-prediction")
const nameCount = document.querySelector("#name-count");
const nameUsageLang = document.querySelector("#name-usage-languages");
const predictedAgeSentence = document.querySelector("#predicted-age-sentence");
//let displayDivs= false;
const behindNameDiv = document.querySelector(".hide");
const behindNameShow = document.querySelector(".name-information-cards");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector("#name-usage-languages").innerHTML = "";
        fetchAgify(e.target["name-search"].value)
        fetchBehindName(e.target["name-search"].value)
    });
});

    function displayBehindTheName() {  
        console.log(behindNameDiv)
        console.log(behindNameShow)
        if (behindNameDiv.className === "hide") {
            behindNameDiv.className = "name-information-cards-container"
    }}


 function fetchAgify(submittedName) {
    fetch(`https://api.agify.io?name=${submittedName}`)
    .then(response => response.json())
    .then(data => {
        renderAgify(data);
    })
 }
  
function renderAgify(data) {
    
    // const predictedAge = document.querySelector("#facts-list > li:nth-child(1)")
    searchedName.textContent = data.name
    predictedAge.textContent = data.age
    nameCount.textContent = data.count
    // console.log(searchedName)
    // console.log(predictedAge)
    console.log(nameCount)
    // console.log(data)
}

 function fetchBehindName(submittedName) {
     fetch(`https://www.behindthename.com/api/lookup.json?name=${submittedName}&key=ju257858736`)
    .then(resp => resp.json())
    .then(data => renderBehindName(data))
 }

 function renderBehindName(data) {
    // let usageLang = []
    //newDiv = document.createElement('div')
    //layout.appendChild(newDiv)
    data.forEach( name => {
        const usages = name.usages.map(usage => usage.usage_full)
        console.log(usages)
        // usages.forEach( usage => usageLang.push(usage))
        usages.forEach(usage => {
            const li = document.createElement('li')
            li.textContent = usage
            nameUsageLang.appendChild(li)
        })

    })
    displayBehindTheName()
}       


        // function renderLangList(usageLang) {
        //     // console.log(usageLang)
        //     usageLang.forEach( language => {
        //     })
        // }
        // renderLangList(usageLang)

    
    // console.log(usageLang)


    // console.log()
    // function usageLangToList(usageLang) {
    //     console.log(usageLangToList())
    // }

// function renderBehindName(data) {
    
//     data.forEach(name => usageLang.push(usage.usage_full))
//     console.log()
// }

// language, gender inside a table using iteration
// array1: name male
// array2: name female
// array3: name 








