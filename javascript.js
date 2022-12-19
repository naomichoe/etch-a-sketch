//create divs for the board
const createGrid = function(num) {
    let correctGridNum = num * num;
    let gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    
    while (correctGridNum > 0) {
        let newDiv = gridContainer.appendChild(document.createElement('div'));
        newDiv.setAttribute('class', 'grid')
        correctGridNum--;
    }
}

createGrid(16);

// // mouseover event











// const resizeBtn = document.querySelector(".resize-btn");
const defaultSize = 16;
const grid = document.getElementById('grid')
const clearBtn = document.getElementById('clear-btn')



//create divs for the board
function createGrid(num) {
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

//test grid
// createGrid(16);

function changeColor(e) {
    e.target.style.backgroundColor = "gray";
}

//everything works until I choose a number then the createGrid function gets called but the new grid size is off - must fix
function changeGridSize() {
    let gridSize = prompt('Enter a number between 1-99');
    if (gridSize < 1 | gridSize > 99) {
        alert('Enter appropiate number');
    }
    return createGrid(gridSize);
}

//need to figure out how to clear the entire grid onclick of the clear btn
function clearGrid(e) {
    grid.innerHTML = ''
}


//default grid on load but don't know how to remove it once a number is entered
// window.onload = () => {
//     createGrid(defaultSize);
// }


//once I finish and fix the above then the original project is complete
//extra credit is to change the color from black to random RGB value