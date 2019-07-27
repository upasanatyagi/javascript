function makeGrid(height, width) {
    const canvasArea = document.getElementById("pixelCanvas");
    let grid = '';

    // Loop for the rows
    for (let row = 0; row < height; row++) {
        grid += '<tr class="row-' + row + '">';
        // Loop for the cells
        for (let column = 0; column < width; column++) {
            grid += '<td class="cell" id="row-' + row + 'cell-' + column + '"></td>';
        }
        grid += '</tr>';
    }
    // Add grid into canvasArea
    canvasArea.innerHTML = grid;

    // Add click event to grid cells
    addClickEventToCells();
}

// Gets values for height and width from form and call makeGrid function with these values.
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

// Add click events to all cells
function addClickEventToCells() {
    // Get the color
    const colorPicker = document.getElementById("colorPicker");
    // Get all the cells
    const cells = document.getElementsByClassName('cell');
    const gridSize = cells.length
    for (let cellNo = 0; cellNo < gridSize; cellNo++) {
        // Listen to the click event
        cells[cellNo].addEventListener("click", function (event) {
            let clickedCell = event.target;
            // Update color
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}

// On submittion of form element
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};


