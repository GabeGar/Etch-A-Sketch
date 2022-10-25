const createGridSize = (rows, cols) => {
    const containerGrid = document.querySelector(".container-grid");
    containerGrid.setAttribute(
        "style",
        `display: grid; grid-template-columns: repeat(${cols}, auto); 
        grid-template-rows: repeat(${rows}, auto);
        border: 1px solid black;`
    );

    for (let i = 1; i <= rows * cols; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("grid-item");
        containerGrid.appendChild(newSquare);
    }
};

createGridSize(16, 16);
