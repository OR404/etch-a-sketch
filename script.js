const grid = document.querySelector('.grid');
const clearButton = document.querySelector('#clear-button');
const colorButton = document.querySelector('#change-color');
const changeDensityButton = document.querySelector('#change-density');
const colorMenu = document.querySelector('.color-menu');
const densityMenu = document.querySelector('.density-menu');
const colorMenuList = document.querySelectorAll('.color-menu>li');
const verticalDivsInput = document.querySelector('.vertical-divs-input');
const horizontalDivsInput = document.querySelector('.horizontal-divs-input');
let colorMenuStatus = false;
let densityMenuStatus = false;
let divsColor = 'black';
let verticalDivs = 16;
let horizontalDivs = 16;

const divWidth = 100 / horizontalDivs ;////will need to calculate wanted ratio tomorow
const divHeight = 100 / verticalDivs ;//will need to calculate wanted ratio tomorow


let mouseDown = 0;
grid.onmousedown = ()=> {mouseDown=1;};
grid.onmouseup = ()=> {mouseDown=0};


for(let i = 0 ; i<verticalDivs ;i++) {//creates grid
    let vertical = document.createElement('div');
    vertical.style.display = 'flex';
    grid.appendChild(vertical);

for(let j = 0 ; j<horizontalDivs ; j++) {
    let divs = document.createElement('div');
    divs.style.height = "65px";
    divs.style.width = "149px";
    divs.style.borderWidth = '2px';
  divs.style.borderStyle = 'solid';
    vertical.appendChild(divs);
    divs.addEventListener('click', ()=>{divs.style.backgroundColor = divsColor;})
    divs.addEventListener('mouseover' , ()=> {if(mouseDown===1){divs.style.backgroundColor =divsColor;}})
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
    li.addEventListener('click' , ()=> {divsColor=li.textContent;});
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

changeDensityButton.addEventListener('click' ,()=>{//open and close density menu
    if(!densityMenuStatus) {
        densityMenu.style.display = 'flex';
        densityMenu.style.visibility = 'visible';
        densityMenuStatus = true;
    }
    else {
        densityMenu.style.display= 'none';
        densityMenu.style.visibility = 'hidden';
        densityMenuStatus = false;
    }

} )



    























