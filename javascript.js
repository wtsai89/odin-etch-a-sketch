const GRID_WIDTH = 960;

let grid = document.querySelector("#grid");

function darken() {
    this.style.opacity = parseFloat(this.style.opacity) + 0.1;
}

function fillColor() {
    this.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    this.style.opacity = 0.1;
    this.removeEventListener("mouseenter", fillColor);
    this.addEventListener("mouseenter", darken);
}

function createGrid(squares) {
    let dim = Math.floor(GRID_WIDTH / squares);
    grid.style.width = `${dim * squares}px`;
    for (let i = 0; i < squares; i++) {
        for (let j = 0; j < squares; j++) {
            const cell = document.createElement("div");
            cell.style.height = `${dim}px`;
            cell.style.width = `${dim}px`;;
            cell.style.borderStyle = "solid";
            cell.style.borderWidth = "1px";
            cell.style.borderColor = "black";
            cell.style.boxSizing = "border-box";
            cell.addEventListener("mouseenter", fillColor);
            grid.appendChild(cell);
        }
    }   
}

createGrid(16);


let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    grid.innerHTML="";
    let squares = 1000;
    do {
        squares = parseInt(prompt("Enter the number of squares per side for the new grid (between 1-100)"));
    } while(squares < 1 || squares > 100);
    createGrid(squares);
})