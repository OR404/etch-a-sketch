const grid = document.querySelector('.grid');//creates grid

for(let i = 0 ; i<16 ;i++) {

    let vertical = document.createElement('div');
    vertical.style.display = 'flex';
    grid.appendChild(vertical);

for(let j = 0 ; j<16 ; j++) {
    let horizontalDiv = document.createElement('div');
    horizontalDiv.style.height = '65px';
    horizontalDiv.style.width = '149px';
    horizontalDiv.style.borderWidth = '2px';
    horizontalDiv.style.borderRadius = '0.3mm';
    horizontalDiv.style.borderStyle = 'solid';
    vertical.appendChild(horizontalDiv);
}
}



