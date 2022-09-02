const { formSubmission } = require("./scriptHelper");
let string = "hello"

window.addEventListener('load', function(){
    const form = this.document.querySelector("form")
    // add variables back
    
        this.alert("as;kdjfhkjhjdshfiasdbfisadubf")
    form.addEventListener('submit', function(event){
    alert("a;skdjfh")
    formSubmission(string)
 })

let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});


