
const result = "a" + "\n" + "b";
const techUsedDescriptions =
 [
    ["Phaser 3 library (gamedev), Classes, es6", "Index.html", "Style", "b0e3", , , ],
    ["Simple Java GUI","Java interface to OpenCV library (image processing)", , , , , ],
    ["Primary Components: BrowserRouter, Route, Switch, Context","Style", , , , , ],
    ["Pure js","Style (flexbox mainly)", , , , , , ]
  ];

const techUsedContainer = document.querySelectorAll(".tech_used_container"); 
const techUsedDescriptionText = document.querySelectorAll(".tech_used_description_text"); 

for(let i = 0; i < techUsedContainer.length; i++) {  
    for(let j = 0; j < ((techUsedContainer[i].querySelectorAll(".tech_used")).length); j++) { 
        techUsedContainer[i].querySelectorAll(".tech_used")[j].addEventListener("mouseover", function(event) {
            console.log("belka:"+ i + "element w belce:" + j);
            //techUsedDescriptionText[i].style.visibility = "visible";
            techUsedDescriptionText[i].style.opacity="1"
            
            techUsedDescriptionText[i].textContent = techUsedDescriptions[i][j];

        })
        techUsedContainer[i].querySelectorAll(".tech_used")[j].addEventListener("mouseout", function(event) {
            techUsedDescriptionText[i].style.opacity="0"

        })
  
    }
  
}


