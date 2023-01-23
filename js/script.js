let num = parseInt(prompt('Type a Number'));

const AREA = document.querySelector('.sketch');
const column = [];
const row = [];

let active = false;

document.addEventListener('mousedown', () => active = true);
document.addEventListener('mouseup', () => active = false);
document.addEventListener('drag', () => active = false);

createSketch();

function createSketch(){
    
    
    for(let i = 1; i <= num; i++){

        let currentRow = i-1;
    
        row[currentRow] = document.createElement('div');
        row[currentRow].classList.add('test');
        row[currentRow].classList.add('row');
        AREA.appendChild(row[currentRow]);
    
        for(let j = 1; j <= num; j++){
    
            let currentCol = j-1;
            
            column[currentCol] = document.createElement('div');
            column[currentCol].classList.add('test');
            column[currentCol].classList.add('column');
            row[currentRow].appendChild(column[currentCol]);


                column[currentCol].addEventListener('mouseenter', changeBg);
                column[currentCol].addEventListener('mousedown', changeBg2);

            
        }
        
    }
}

function changeBg(){
    if(active) {
        this.style.backgroundColor = 'black';
    }
}

function changeBg2() {
    this.style.backgroundColor = 'black';
}


