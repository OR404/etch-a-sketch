const grid = document.querySelector('.grid');
const clearButton = document.querySelector('#clear-button');
const colorButton = document.querySelector('#change-color');
const densityMenuBtn = document.querySelector('#change-density');
const colorMenu = document.querySelector('.color-menu');
const densityMenu = document.querySelector('.density-menu');
const colorMenuList = document.querySelectorAll('.color-menu>li');
const countInput = document.querySelector('.density-menu input');
const countBtnSubmit = document.querySelector('.density-menu button')

let userColor = 'black';

// Offset: content + margin + padding + border
let gridHeight = grid.innerHeight;
let gridWidth = grid.innerWidth;

let mouseDown = 0;
grid.onmousedown = ()=> { mouseDown=1; };
grid.onmouseup = ()=> { mouseDown=0 };

function createGrid(widthCount = 16) {
    for(let i = 0; i < countInput.value; i++) {
        let vertical = document.createElement('div');
        vertical.classList.add('grid-vertical-item');
        grid.appendChild(vertical);

        for(let j = 0; j < countInput.value; j++) {
            let pixel = document.createElement('div');
            pixel.classList.add('grid-horizontal-item');

            pixel.style.width = gridWidth / widthCount;

            vertical.appendChild(pixel);
            pixel.addEventListener('mouseover' , ()=> { if(mouseDown){ pixel.style.backgroundColor = userColor; } } )
            clearButton.addEventListener('click',()=>{ pixel.style.backgroundColor = ''; })
        }
    }
}
createGrid();

const toggleMenuOf = ( menu )=>{
    if(!menu){
        console.error('A menu was not provided at toggleMenuCallback');
        return;
    }
    let visibility = menu.style.visibility;
    (visibility === 'hidden' || !visibility) ? visibility = 'visible' : visibility = 'hidden';
    menu.style.visibility = visibility; // Update visibility on node
}

colorMenuList.forEach(li=>{ // Set background of color choice to itself
    li.style.backgroundColor = li.textContent;
    li.addEventListener('click' , ()=> { userColor = li.textContent; });
});
colorButton.addEventListener('click' , () => { toggleMenuOf(colorMenu) });

densityMenuBtn.addEventListener('click' , () => { toggleMenuOf(densityMenu) });

const changeGridSize = () => {
    grid.innerHTML = ''; // Reset grid

    if( (countInput.value < 16 || countInput.value > 100) ){
        alert('This value is too big, please enter a value between 16-100');
        return;
    }

    createGrid(countInput.value);
}
countInput.addEventListener('keydown' ,(event)=> {
    if(event.key==='Enter') {
        changeGridSize();
    }
})
countBtnSubmit.onclick = () => { changeGridSize() };




    























