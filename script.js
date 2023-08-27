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
let divsColor = 'black'; //user can change that value with colorMenuList
let verticalDivs = verticalDivsInput.value;//user can change that value with verticalDivsInput
let horizontalDivs = horizontalDivsInput.value;//user can change that value with horizontalDivsInput
let divHeight = 1000/verticalDivs;
let divWidth = 2380/horizontalDivs;


let mouseDown = 0;
grid.onmousedown = ()=> {mouseDown=1;}; // 
grid.onmouseup = ()=> {mouseDown=0};

function createGrid() {
for(let i = 0 ; i<verticalDivs ;i++) {//creates grid
    let vertical = document.createElement('div');
    vertical.style.display = 'flex';
    grid.appendChild(vertical);

for(let j = 0 ; j<horizontalDivs ; j++) {
    let divs = document.createElement('div');
    divs.style.height = (`${divHeight}px`);
    divs.style.width = (`${divWidth}px`);;
    divs.style.borderWidth = '2px';
  //divs.style.borderStyle = 'solid';
    vertical.appendChild(divs);
    divs.addEventListener('click', ()=>{divs.style.backgroundColor = divsColor;})
    divs.addEventListener('mouseover' , ()=> {if(mouseDown===1){divs.style.backgroundColor =divsColor;}})
    clearButton.addEventListener('click',()=>{divs.style.backgroundColor = '';})
}}
}
createGrid();


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


densityMenu.addEventListener('keydown' ,(event)=> { //creates new grid size with new user values
    if(event.key==='Enter') {
        while(grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        if(verticalDivsInput.value>100) {verticalDivsInput.value=100};
        if(horizontalDivsInput.value>100) {horizontalDivsInput.value=100};
        verticalDivs=verticalDivsInput.value;
        horizontalDivs=horizontalDivsInput.value;
        divHeight = 1000/verticalDivs;
        divWidth =  2380/horizontalDivs;
        createGrid();
    }


})




    























