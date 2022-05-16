function createGrid() {
let span = document.querySelectorAll('.sizeText');
let range = document.querySelector('.range');
let container = document.querySelector('.container');
let grid = range.value; //prompt('What size of grid do you want?')
let size = 500/grid;
span.forEach(span => (span.innerText = range.value))
container.style.border = '15px solid gray';
for (let i = 0; i < (grid*grid); i++) {
    let square = document.createElement('div');
    container.appendChild(square);
    square.classList = 'piece';
    square.style.flexBasis = `${size}px`;
}
}

createGrid();

function draw() {
    let color = document.querySelector('.colorPicker');
    let square = document.querySelectorAll('.piece');
    square.forEach( sq => sq.addEventListener( 'mouseover', () =>
    sq.style.backgroundColor = `${color.value}`
    ))
}
function drawtouch() {
    let color = document.querySelector('.colorPicker');
    let square = document.querySelectorAll('.piece');
    square.forEach( sq => sq.addEventListener( 'touchmove', () =>
    sq.style.backgroundColor = `${color.value}`
    ))
}

drawtouch();
draw();

function clear() {
    let clear = document.querySelector('.clear')
    clear.addEventListener('click', () => {
        let sqaure = document.querySelectorAll('.piece')
        sqaure.forEach(sq => sq.style.backgroundColor = 'white')
    })
}

clear()

function erase() {
    let erase = document.querySelector('.erase')
    erase.addEventListener('click', () => {
        let sqaure = document.querySelectorAll('.piece');
        sqaure.forEach(sq => sq.addEventListener ('mouseover', () => 
        sq.style.backgroundColor = 'white'))
    })
}

erase();

function pen() {
    let pen = document.querySelector('.pen')
    pen.addEventListener('click', draw)
}

pen()

function randomColor() {
    let sqaure = document.querySelectorAll('.piece');
        sqaure.forEach(sq => sq.addEventListener ('mouseover', () => {
        sq.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`}))
    }

function raindbow() {
    let raindbow = document.querySelector('.raindbow')
    raindbow.addEventListener('click', randomColor)
}

raindbow();

function changeGrid() {
    let span = document.querySelectorAll('.sizeText');
    let piece = document.querySelectorAll('.piece');
    piece.forEach(sq => {
        sq.remove()
    })
    let range = document.querySelector('.range');
    let container = document.querySelector('.container');
    let grid = range.value; //prompt('What size of grid do you want?')
    let size = 500/grid;
    span.forEach(span => (span.innerText = range.value))
    for (let i = 0; i < (grid*grid); i++) {
    let square = document.createElement('div');
    container.appendChild(square);
    square.classList = 'piece';
    square.style.flexBasis = `${size}px`;
}
draw()
}

function range() {
    let range = document.querySelector('.range');
    range.addEventListener('change', changeGrid)
}
range()
