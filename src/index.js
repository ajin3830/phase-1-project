const searchedName = document.querySelector("#card-title");
const predictedAge = document.querySelector("#age-prediction")
const nameCount = document.querySelector("#name-count");
const predictedAgeSentence = document.querySelector("#predicted-age-sentence");
const predictionsList = document.querySelector("#nationality-predictions-list");
const nameUsageLang = document.querySelector("#name-usage-languages");
const hideCards = document.querySelector(".hide");
const behindNameShow = document.querySelector(".name-information-cards");
const audio = document.querySelector("audio");
let aboutMe = document.querySelector("h2");
let button = document.querySelector("button");

aboutMe.addEventListener("mouseleave", () => {
    aboutMe.className = aboutMe.className = "hide"
});

button.addEventListener("mouseover", () => {
    aboutMe.className = aboutMe.className = "title"
});  

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector("#name-usage-languages").innerHTML = "";
        document.querySelector("#nationality-predictions-list").innerHTML = "";
        audio.play();
        fetchAgify(e.target["name-search"].value);
        fetchBehindName(e.target["name-search"].value);
        fetchNationalize(e.target["name-search"].value);
    });
});

function displayNameInformationCards() {  
    if (hideCards.className === "hide") {
        hideCards.className = "name-information-cards-container"
    };
};

 function fetchAgify(submittedName) {
    fetch(`https://api.agify.io?name=${submittedName}`)
    .then(response => response.json())
    .then(data => {
        renderAgify(data);
    })
 }
  
function renderAgify(data) {
    searchedName.textContent = data.name;
    predictedAge.textContent = data.age;
    nameCount.textContent = data.count;
}

function fetchNationalize(submittedName) {
    fetch(`https://api.nationalize.io?name=${submittedName}`)
    .then(response => response.json())
    .then(data => renderNationalize(data))
}

function renderNationalize(data) {
    const countries = data.country;
    function toPercent(number, float) {
        let percent = parseFloat(number * 100).toFixed(float) + "%";
        return percent;
    };
    countries.forEach(country => {
                const probability = country.probability;
                const li = document.createElement('li');
                li.textContent = ('Country: ' + country.country_id + '; Probabability: ' + (toPercent(probability, 2)));
                predictionsList.appendChild(li);
    });
}

 function fetchBehindName(submittedName) {
     fetch(`https://www.behindthename.com/api/lookup.json?name=${submittedName}&key=to101934583`)
    .then(resp => resp.json())
    .then(data => renderBehindName(data))
 }

 function renderBehindName(data) {
    data.forEach( name => {
        const usages = name.usages.map(usage => usage.usage_full)
        usages.forEach(usage => {
            const li = document.createElement('li');
            li.textContent = usage;
            nameUsageLang.appendChild(li);
        });

    });
    displayNameInformationCards();
}       









