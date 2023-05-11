
let container = document.querySelector(".container");
let row = 5;
let col = 5;
createGrid(row,col);

function createGrid(i,j){
    for(i = 0; i < row; i++){
        let rowContainer = document.createElement('div');
        rowContainer.classList.add("row")
        for(j = 0; j < col; j++){
            let div = document.createElement('div');
            div.classList.add("box")
            rowContainer.appendChild(div)
            }
        container.appendChild(rowContainer)
    }
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

function listenBoxes(){
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        let styles = window.getComputedStyle(box);
        let backgroundColour
        let brightness = 1;
        box.addEventListener("mouseover", function(e){ 
            backgroundColour = styles.getPropertyValue("background-color")
          
        })
        
        box.addEventListener("mouseout", function(e){
            if(backgroundColour == "rgb(0, 0, 0)"){
                e.target.style.background = randomColor();
            }
            else{
               let filter = styles.getPropertyValue("filter")
               brightness -= 0.2
               e.target.style.filter = `brightness(${brightness})` 
               if(brightness<=0){
                brightness=1.2;
               }
            }
        })
    });
}
listenBoxes()


let button = document.querySelector("#button");
console.log(button)
button.addEventListener("click",function(){
    chooseGrid();
})


function chooseGrid(){
    do{
        row = prompt("How many rows do you want?")
        col = prompt("How many columns?")
    }
    while(row > 100 || col > 100)
    
    deleteGrid()
    createGrid(row,col)
    listenBoxes()
}

function deleteGrid(){
    let rowContainer = document.querySelectorAll(".row");
    rowContainer.forEach(row => {
        container.removeChild(row)
    });
}
