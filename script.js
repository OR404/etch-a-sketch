const grid = document.querySelector('.grid');//creates grid
const body = document.querySelector('*');
const clearButton = document.querySelector('#clear-button');
const colorButton = document.querySelector('#change-color');
const colorMenu = document.querySelectorAll('.color-menu>li');
let mouseDown = 0;
let color = 'red';

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
    divs.style.borderRadius = '0.2mm';
    //divs.style.borderStyle = 'solid';
    vertical.appendChild(divs);
    divs.addEventListener('click', ()=>{divs.style.backgroundColor = color;})
    divs.addEventListener('mouseover' , ()=> {if(mouseDown===1){divs.style.backgroundColor =color;}})
    clearButton.addEventListener('click',()=>{divs.style.backgroundColor = '';})
}}



colorMenu.forEach(li=>{
    li.style.backgroundColor = li.textContent;

    li.addEventListener('mouseover', ()=>{
        li.style.borderStyle = 'solid';
        li.style.borderColor = 'black';
        li.style.borderWidth = '1mm';
    });
    li.addEventListener('mouseout' , ()=>{
        li.style.borderStyle = 'none';
    });

    li.addEventListener('click' , ()=> {color=li.textContent;});
});

console.log(color);





















