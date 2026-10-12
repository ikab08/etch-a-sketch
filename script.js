const container = document.querySelector(".container");

const btnNew = document.querySelector("#btnNew");
const btnColor = document.querySelector("#btnColor");
const btnDark = document.querySelector("#btnDark");

let squareColor = "dark";

function createGrid(numberOfSquare) {
    const totalSquares = numberOfSquare*numberOfSquare;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-div");
        fragment.appendChild(square);
        square.setAttribute("style",`flex: 0 0 calc(100%/${numberOfSquare}); height: calc(100%/${numberOfSquare}); border:1px solid burlywood;`);  
    }
    container.replaceChildren(fragment);
}

function paint(square) {
    if(squareColor == "colorise") {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
        const level = Math.min(Number(square.dataset.darkness || 0) + 1, 10);
        square.dataset.darkness = level;
        square.style.backgroundColor = `rgba(0, 0, 0, ${level / 10})`;
    }
}
container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-div")) {
        paint(event.target);
    }
});

btnColor.addEventListener("click",()=> { squareColor = "colorise";});
btnDark.addEventListener("click",()=> { squareColor = "dark"; });

btnNew.addEventListener("click", ()=>{
    const input = prompt("Squares per side for the grid up to 100?");
    if (input === null) return;

    const numOfSize = Number.parseInt(input, 10);
    if(Number.isInteger(numOfSize) && numOfSize >= 1 && numOfSize <= 100){
        createGrid(numOfSize);
    } else {
        alert("Please enter a whole number between 1 and 100");
    }
});

createGrid(16);