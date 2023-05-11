let container = document.querySelector(".container");
let row = 5;
let col = 5;
for(let i = 0; i < row; i++){
    let rowContainer = document.createElement('div');
    rowContainer.classList.add("row")
    for(let j = 0; j < col; j++){
        let div = document.createElement('div');
        div.classList.add("box")
        rowContainer.appendChild(div)
        }
    container.appendChild(rowContainer)
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}


let boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    let styles = window.getComputedStyle(box);
    let backgroundColour
    let brightness = 1;
    box.addEventListener("mouseover", function(e){ 
        backgroundColour = styles.getPropertyValue("background-color")
        console.log(backgroundColour)
    })
    
    box.addEventListener("mouseout", function(e){
        if(backgroundColour == "rgb(0, 0, 0)"){
            e.target.style.background = randomColor();
        }
        else{
           let filter = styles.getPropertyValue("filter")
           brightness -= 0.2
           e.target.style.filter = `brightness(${brightness})` 
        }
        
        
        
    })
});