//create divs for the board
let createBoard = function(num) {
    let correctGridNum = num * num;
    let gridContainer = document.getElementById('grid-container');
    while (correctGridNum >= 0) {
        let newDiv = gridContainer.appendChild(document.createElement('div'));
        newDiv.setAttribute('class', 'grid')
        correctGridNum--;
    }
    
}
createBoard(16);