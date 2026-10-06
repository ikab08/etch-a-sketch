const container = document.querySelector(".container");
const btn = document.querySelector("#btn");
let number;

function createGrid(numberOfSquare) {
    const totalSquares = numberOfSquare*numberOfSquare;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-div");
        square.setAttribute("style",`flex: 0 0 calc(100%/${numberOfSquare}); height: calc(100%/${numberOfSquare}); border:1px solid burlywood;`);
        container.appendChild(square);
    }
}

createGrid(16);

btn.addEventListener("click", ()=>{
    number = prompt("Squares per side for the grid up to 100");
    if(number && number < 100){
        container.innerHTML = "";
        console.log(number);
        createGrid(number);
    } else {
        alert("Choose a correct number and less than 100");
    }
});