let container = document.querySelector('.container');
let div;

function createGrid(x,rgb) {
    if (x > 100) return 'too big';
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            div = document.createElement('div');
            div.classList.add('grid');
            container.appendChild(div);
        };
    };
    let grid = document.querySelectorAll('.grid');
    let dimension = 900 / x;
    grid.forEach(element => {
        element.style.width = `${dimension}px`;
        element.style.height = `${dimension}px`;
        
        element.addEventListener('mouseover', (e) => {
            if(rgb == false)e.target.style.backgroundColor = 'black';
            else e.target.style.backgroundColor = 'rgb(12,100,80)';
        });
    });
    console.log(960 / x);
};

createGrid(16,false);

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    let grid = document.querySelectorAll('.grid');
    let gridValue = prompt('How many grid do you want?');
    grid.forEach(element => {
        container.removeChild(element);
    });
    createGrid(gridValue,false);
});

let rgb = document.querySelector('.rgb');
rgb.addEventListener('click', () => {
    let grid = document.querySelectorAll('.grid');
    let gridValue = prompt('How many grid do you want?');
    grid.forEach(element => {
        container.removeChild(element);
    });
    createGrid(gridValue,true);
});
