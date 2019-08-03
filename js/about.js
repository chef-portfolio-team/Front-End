class Panel {
  constructor(panelElement){ console.log ("constructor",panelElement)
    this.panelContent = panelElement.querySelector(".panel-content");
    this.buttonsGroup = panelElement.querySelector(".panel-buttons");
    this.openButton = panelElement.querySelector(".panel-btn-open");
    this.closeButton = panelElement.querySelector(".panel-btn-close");
    
    this.buttonsGroup.addEventListener('click', this.togglePanel.bind(this))
    
    // this.buttonsGroup.addEventListener('click', () => {
    //   this.togglePanel()
    // } )

  } 

  togglePanel(){
    this.openButton.classList.toggle("hide-btn");
    this.closeButton.classList.toggle("hide-btn");
    this.panelContent.classList.toggle("toggle-on");
  }
}

const panels = document.querySelectorAll(".panel");
console.log("panels",panels)
panels.forEach( (panelElement) => {
  return new Panel(panelElement);
})

let header = document.querySelectorAll(".aSection");
for (var i = 0; i < header.length; i++)
 (function(i) {
   header[i].addEventListener("mouseover", function(event) {
     event.target.style.background = "#DCDCDC";
   });
 })(i);
let headerOut = document.querySelectorAll(".aSection");
for (var i = 0; i < headerOut.length; i++)
 (function(i) {
   headerOut[i].addEventListener("mouseout", function(event) {
     event.target.style.background = "black";
   });
 })(i);