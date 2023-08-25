const grid = document.querySelector('.grid');//creates grid
let body = document.querySelector('*');
let mouseDown = 0;
body.onmousedown = ()=> {mouseDown=1;};
body.onmouseup = ()=> {mouseDown=0};


for(let i = 0 ; i<16 ;i++) {
    let vertical = document.createElement('div');
    vertical.style.display = 'flex';
    grid.appendChild(vertical);

for(let j = 0 ; j<16 ; j++) {
    let divs = document.createElement('div');
    divs.style.height = '65px';
    divs.style.width = '149px';
    divs.style.borderWidth = '2px';
    divs.style.borderRadius = '0.3mm';
    divs.style.borderStyle = 'solid';
    vertical.appendChild(divs);
    divs.addEventListener('click', ()=>{divs.style.backgroundColor ='red';})
    divs.addEventListener('mouseover' , ()=> {if(mouseDown===1){divs.style.backgroundColor ='red';}})
}}
















