let container = document.querySelector('.container');
let grid = 16; //prompt('What size of grid do you want?')
let size = 500/grid;
for (let i = 0; i < (grid*grid); i++) {
    let square = document.createElement('div');
    container.appendChild(square);
    square.classList = 'piece';
    square.style.flexBasis = `${size}px`
}
let square = document.querySelectorAll('.piece');
square.forEach(sq => sq.addEventListener('mouseout', () => {
    sq.style.backgroundColor = 'blue'
}))
//console.log(container.addEventListener('mouseover', (e) => console.log(e)));

