// TODO:
// Instead of just changing the color of a square from black to white (for example), 
// have each pass through with the mouse change it to a completely random RGB value. Then try 
// having each pass just add another 10% of black to it so that only after 10 passes is the square 
// completely black.

const GRID = document.querySelector('.grid');
const SELECTOR = document.querySelector('.gridSelector');
const INDICATOR = document.querySelector('.rangeIndicator');
const BTNS = document.querySelectorAll('.color, .rgb, .eraser');
const COLORPICKER = document.querySelector('#colorPicker');
const CLEAR = document.querySelector('.clear');

let column;
let row;
let coloredCtr = 0;
let divNum = 0;
let color = COLORPICKER.value;


COLORPICKER.addEventListener('change', () => color = COLORPICKER.value);

const MODES = ['COLOR_MODE', 'RGB_MODE', 'ERASER_MODE'];
let currentMode = MODES[0];

let num = parseInt(SELECTOR.value);
createGrid();

INDICATOR.textContent = SELECTOR.value + ' x ' + SELECTOR.value;


let active = false;

window.addEventListener('mousedown', () => active = true);
window.addEventListener('mouseup', () => active = false);

BTNS[0].style.color = '#222121';
BTNS[0].style.backgroundColor = 'white';
BTNS.forEach((btn) => btn.addEventListener('click', select));

SELECTOR.addEventListener('change', change);
CLEAR.addEventListener('click', change);


function randColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++){
        color+= letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function select(e){

    BTNS.forEach((btn) => btn.style.backgroundColor = 'transparent');
    BTNS.forEach((btn) => btn.style.color = 'white');

    e.target.style.backgroundColor = 'white';
    e.target.style.color = '#222121';

    if(e.target.getAttribute('data-mode') == MODES[0]){
        console.log('COLOR');
        currentMode = MODES[0];

    }else if(e.target.getAttribute('data-mode') == MODES[1]){
        console.log('RGB');
        currentMode = MODES[1];
    }else{
        console.log('ERASER');
        currentMode = MODES[2];
    }
}

function change() {
    num = parseInt(SELECTOR.value);
    INDICATOR.textContent = SELECTOR.value + ' x ' + SELECTOR.value;

    let del = document.querySelectorAll('.row');
    del.forEach((d) => d.parentNode.removeChild(d));
    createGrid();  
}

function createGrid(){
    
    
    for(let i = 1; i <= num; i++){
    
        row = document.createElement('div');
        row.classList.add('row');
        GRID.appendChild(row);
    
        for(let j = 1; j <= num; j++){
    
            let currentCol = j-1;
            
            column = document.createElement('div');
            column.classList.add('column');
            divNum++;
            column.setAttribute('data-no',`no${divNum}`);   
            column.addEventListener('mouseover', changeBg);
            column.addEventListener('mousedown', changeBg);

            row.appendChild(column);
            
        }
        
    }
}

function changeBg(e){

    if(e.type === 'mouseover' && !active) { //if our cursor is not hovering AND mouse is not down it will simply return and nothing would happen in the grid
        return;
    }

    if(currentMode == MODES[0]){ //if current mode is equal to color mode
        e.target.style.backgroundColor = color;
    }else if(currentMode == MODES[1]){
        e.target.style.backgroundColor = randColor();
    }else if(currentMode == MODES[2]){
        e.target.style.backgroundColor = 'white';
    }
    
    console.log(e.target.getAttribute('data-oldColor'));
    console.log(e.target.getAttribute('data-currentColor'));
    console.log(e.target.getAttribute('data-no'));


}


