function createGrid(){
let container = document.querySelector('.container');
let grid = 16; //prompt('What size of grid do you want?')
let size = 500/grid;
for (let i = 0; i < (grid*grid); i++) {
    let square = document.createElement('div');
    container.appendChild(square);
    square.classList = 'piece';
    square.style.flexBasis = `${size}px`;
}
container.style.border = '15px solid gray';
}

createGrid();

let color = function color(){
    let color = document.querySelector('.colorPicker');
    return color.value;
}

function draw(){
    let color = document.querySelector('.colorPicker');
    let square = document.querySelectorAll('.piece');
    square.forEach( sq => sq.addEventListener( 'mouseover', () =>
    sq.style.backgroundColor = `${color.value}`
    ))
}

draw();

function clear(){
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


