
const searchedname = document.querySelector("#card-title");
const predictedage = document.querySelector("#predicted-age")




document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
    //     let submittedname = e.
        fetchagify(e.target["name-search"].value)

      console.log(e);
    
    });
});




 function fetchagify(submittedname) {
 fetch(`https://api.agify.io?name=${submittedname}`)
    .then(response => response.json())
    .then(data => renderageprediction(data))
 }









