let container = document.querySelector('.container');
let div;

function createGrid(x) {
    if(x>100) return 'too big';
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            div = document.createElement('div');
            div.classList.add('grid');
            container.appendChild(div);
        };
    };
    let grid = document.querySelectorAll('.grid');
    let dimension = 960/x;
    grid.forEach(element => {
        element.style.width = `${dimension}px`;
        element.style.height = `${dimension}px`;
        element.addEventListener('mouseover',(e)=>{
            console.log(e);
            e.target.style.backgroundColor = 'black';
        });
    });
    console.log(960/x);
};

createGrid(10);