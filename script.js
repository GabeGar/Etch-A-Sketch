const containerGrid = document.querySelector(".container-grid");
const sizeButton = document.createElement("button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

function colorSquare(hover) {
    if (hover.target.classList.value === "grid-item") {
        hover.target.style.backgroundColor = "gray";
    }
}

const createGrid = (size) => {
    rows = size;
    cols = size;

    containerGrid.setAttribute(
        "style",
        `display: grid; grid-template-columns: repeat(${cols}, auto); 
        grid-template-rows: repeat(${rows}, auto);`
    );

    for (let i = 1; i <= rows * cols; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("grid-item");
        containerGrid.appendChild(newSquare);
    }
};

createGrid(30);

const allSquares = document.querySelectorAll(".container-grid div");

allSquares.forEach((square) => {
    square.addEventListener("mouseover", colorSquare);
});
