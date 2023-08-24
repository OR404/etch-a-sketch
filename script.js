const grid = document.querySelector('.grid');

for(let i = 0 ; i<15 ;i++) {

    let verticalDiv = document.createElement('div');
    verticalDiv.style.display = 'flex';
    grid.appendChild(verticalDiv);
for(let j = 0 ; j<15 ; j++) {

    let horizontalDiv = document.createElement('div');
    horizontalDiv.style.height = '70px';
    horizontalDiv.style.width = '170px';
    horizontalDiv.style.backgroundColor = 'grey';
    horizontalDiv.style.borderStyle = 'solid';
    verticalDiv.appendChild(horizontalDiv);


}


}