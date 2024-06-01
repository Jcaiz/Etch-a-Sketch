let gridSize;

const btn = document.querySelector(".colorButton");
const grid = document.querySelector(".etchGrid");

function generateGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {    

        const square = document.createElement("div");
            square.style.backgroundColor = ("red");
    square.style.length = `${500 / gridSize}px`;
    square.style.width = `${500 / gridSize}px`;
        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "blue";
        });
        grid.appendChild(square);
    }

}

// btn.addEventListener("click", (e) => {
//     generateGrid(4);
// })

generateGrid(4);
