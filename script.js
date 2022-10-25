function SketchApp() {
    const containerGrid = document.querySelector(".container-grid");
    const displayGridSize = document.querySelector(".display-grid-size");
    const gridSizeBtn = document.querySelector(".change-grid-btn");
    const clearGridBtn = document.querySelector(".clear-grid-btn");

    // Global variable to store current size of grid. Will be overwritten every time createGrid() gets called.
    let currentSize;

    function colorSquare(hover) {
        if (hover.target.classList.value === "grid-item") {
            hover.target.style.backgroundColor = "gray";
        }
    }

    function clearGrid() {
        containerGrid.textContent = "";
        createGrid(currentSize);
        callEventListeners();
    }

    function changeGrid() {
        let newSize = parseInt(
            prompt(
                "Enter New Grid Size:\n(Note: Must be between 16 and 100, inclusive.)"
            )
        );

        if (newSize > 100 || newSize < 16) return changeGrid();
        clearGrid();
        createGrid(newSize);
        callEventListeners();
    }

    const callEventListeners = () => {
        const allSquares = document.querySelectorAll(".container-grid div");
        allSquares.forEach((square) => {
            square.addEventListener("mouseover", colorSquare);
        });
    };

    const createGrid = (size) => {
        currentSize = size;

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

        return currentSize;
    };

    //Default Grid Size will start at 16.
    createGrid(16);
    callEventListeners();
    gridSizeBtn.addEventListener("click", changeGrid);
    clearGridBtn.addEventListener("click", clearGrid);
}

SketchApp();
