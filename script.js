let container = document.querySelector('.container');
let div;

function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            div = document.createElement('div');
            div.classList.add('grid');
            container.appendChild(div);
        };
    };
};

createGrid(2);