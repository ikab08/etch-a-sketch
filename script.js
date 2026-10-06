const container = document.querySelector(".container");

function createGrid() {
    const totalSquares = 16*16;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-div");
        container.appendChild(square);
    }
}

createGrid();