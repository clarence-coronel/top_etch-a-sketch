//TODO once i meet the requirements lagyan undo functionality? yung huling stroke mawawala. not sure if babagay since may eraser na

let num;

const AREA = document.querySelector('.sketch');
let column;
let row;

let coloredCtr = 0;
let divNum = 0;

let active = false;

window.addEventListener('mousedown', () => active = true);
window.addEventListener('mouseup', () => active = false);


createSketch();

function createSketch(){
    
    
    for(let i = 1; i <= num; i++){

        let currentRow = i-1;
    
        row = document.createElement('div');
        row.classList.add('test');
        row.classList.add('row');
        AREA.appendChild(row);
    
        for(let j = 1; j <= num; j++){
    
            let currentCol = j-1;
            
            column = document.createElement('div');
            column.classList.add('test');
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

    if(e.type === 'mouseover' && !active) {
        return;
    }

    e.target.setAttribute('data-oldColor', e.target.getAttribute('data-currentColor'));
    e.target.setAttribute('data-currentColor', 'black');

    e.target.style.backgroundColor = 'black';

    console.log(e.target.getAttribute('data-oldColor'));
    console.log(e.target.getAttribute('data-currentColor'));
    console.log(e.target.getAttribute('data-no'));


}


