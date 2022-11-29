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

