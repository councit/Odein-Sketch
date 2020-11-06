function createGrid(numLength){
    
    let gridSelector = document.querySelector(".grid");
    
    clearGrid();
    gridSelector.style.gridTemplateRows = `repeat(${numLength}, 50px)`
    gridSelector.style.gridTemplateColumns = `repeat(${numLength}, 50px)`
 
    for(let i=0; i < numLength * numLength; i++){
        gridSelector.innerHTML += `<div class="grid-square"></div>`
    }
    
}

function colorGridSquare(event){
    const colors = ["rgba(131,58,180,1)","rgba(253,29,29,0.5270308807116597)","rgba(252,176,69,1)"]
    let randColor = colors[Math.floor(Math.random() * 3)];

    event.target.style.backgroundColor = `${randColor}`
    console.log(event.target);
    console.log(randColor)
}

function clearGrid(){
    let gridSelect = document.querySelector('.grid');
    let childNodes = gridSelect.getElementsByTagName('div');

    gridSelect.style.backgroundColor ="white"

    for(let i=0; i < childNodes.length; i++){
        childNodes[i].style.backgroundColor = "white";
    }
}
function submitGridInput(){
    let inputSelect = document.querySelector('.user-input');
    let gridSelect = document.querySelector('.grid');

    gridSelect.innerHTML = "";
    if(inputSelect.value < 21){
        createGrid(inputSelect.value);
    }
   
}



//Event Listeners & Init

document.querySelector('.grid').addEventListener("mouseover",(event) => {
    colorGridSquare(event)
})

document.querySelector('.clr-btn').addEventListener('click', () => {
    clearGrid();
})

document.querySelector('.grid-btn').addEventListener('click', () => {
    submitGridInput();
})
