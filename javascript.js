const resizeBtn = document.querySelector(".resize-btn");

//create divs for the board
const createGrid = function(num) {
    const correctGridNum = num * num;
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
 
    for (let i = 0; i < correctGridNum; i++) {
        const newDiv = gridContainer.appendChild(document.createElement('div'));
        newDiv.setAttribute('class', 'grid');
        newDiv.addEventListener('mouseover', changeColor);
    }
}

createGrid(16);

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

