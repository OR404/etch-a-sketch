const grid = document.querySelector('.grid');
const clearButton = document.querySelector('#clear-button');

const colorButton = document.querySelector('#change-color');
const colorMenu = document.querySelector('.color-menu');
const colorMenuList = document.querySelectorAll('.color-menu>li');
let colorMenuStatus = false;
let color = 'red';

let mouseDown = 0;
grid.onmousedown = ()=> {mouseDown=1;};
grid.onmouseup = ()=> {mouseDown=0};


for(let i = 0 ; i<16 ;i++) {//creates grid
    let vertical = document.createElement('div');
    vertical.style.display = 'flex';
    grid.appendChild(vertical);

for(let j = 0 ; j<16 ; j++) {
    let divs = document.createElement('div');
    divs.style.height = '65px';
    divs.style.width = '149px';
    divs.style.borderWidth = '2px';
  //divs.style.borderStyle = 'solid';
    vertical.appendChild(divs);
    divs.addEventListener('click', ()=>{divs.style.backgroundColor = color;})
    divs.addEventListener('mouseover' , ()=> {if(mouseDown===1){divs.style.backgroundColor =color;}})
    clearButton.addEventListener('click',()=>{divs.style.backgroundColor = '';})
}}


colorMenuList.forEach(li=>{//select different color functionality
    li.style.backgroundColor = li.textContent;

    li.addEventListener('mouseover', ()=>{
        li.style.borderStyle = 'solid';
        li.style.borderColor = 'black';
        li.style.borderWidth = '1mm';
    });
    li.addEventListener('mouseout' , ()=>{li.style.borderStyle = 'none';});
    li.addEventListener('click' , ()=> {color=li.textContent;});
});

colorButton.addEventListener('click' ,()=>{//open and close color menu
    if(!colorMenuStatus) {
    colorMenu.style.display= 'block';
    colorMenuStatus = true;
}
    else {
        colorMenu.style.display= 'none';
        colorMenuStatus = false;
    }
});

    























