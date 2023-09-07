const technologies = document.querySelectorAll(".technology");
const technologiesDescriptionText = document.querySelector(".technologies_description_text");
const technologiesDescription = document.querySelector(".technologies_description");
const descriptions = ["I know how to create responsive website using Flexbox and Media queries", "I create my apps in es6, and i use OOP in javascript", "I use  html 5 capabilities", "Two years of work experience", "Two years of work experience", "Two years of work experience", "I create apps in React, but im still learning"];
for(let i = 0; i < technologies.length; i++) {
   technologies[i].addEventListener("mouseover", function(event) {
    technologiesDescriptionText.textContent = descriptions[i];
    technologiesDescription.classList.add("visible");
    //setVisibleTechDescription();
});
    technologies[i].addEventListener("mouseout", function(event) {
    technologiesDescription.classList.remove("visible");

});

}
function setVisibleTechDescription() {

    
}
function setInvisibleTechDescription() {
   
}
