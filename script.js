function SketchApp() {
    const containerGrid = document.querySelector(".container-grid");
    const displayGridSize = document.querySelector(".display-grid-size");
    const resetGridBtn = document.querySelector(".reset-grid-btn");

    function colorSquare(hover) {
        if (hover.target.classList.value === "grid-item") {
            hover.target.style.backgroundColor = "gray";
        }
    }

    function clearGrid(event) {
        containerGrid.textContent = "";
        let newSize = prompt(
            "How big would you like your sketch pad?\n(e.g., typing in any number such as 10 => 10x10 grid)\nNote: Cannot be greater than 100 or less than 16."
        );

        if (newSize > 100 || newSize < 16) return clearGrid();
        createGrid(newSize);
        eventListeners();
    }

    function eventListeners() {
        const allSquares = document.querySelectorAll(".container-grid div");
        allSquares.forEach((square) => {
            square.addEventListener("mouseover", colorSquare);
        });
    }

    const createGrid = (size) => {
        displayGridSize.textContent = `Grid Size: ${size} x ${size}`;
        displayGridSize.style.fontSize = "24px";

        containerGrid.setAttribute(
            "style",
            `display: grid; grid-template-columns: repeat(${size}, auto); 
        grid-template-rows: repeat(${size}, auto);`
        );

        for (let i = 1; i <= size * size; i++) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("grid-item");
            containerGrid.appendChild(newSquare);
        }
    };

    createGrid(16);
    resetGridBtn.addEventListener("click", clearGrid);
    eventListeners();
}

SketchApp();
