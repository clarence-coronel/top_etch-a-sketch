let num = parseInt(prompt('Type a Number'));

const area = document.querySelector('.sketch');
const column = [];
const row = [];

for(let i = 1; i <= num; i++){

    let currentRow = i-1;

    row[currentRow] = document.createElement('div');
    row[currentRow].classList.add('test');
    row[currentRow].classList.add('row');
    area.appendChild(row[currentRow]);

    for(let j = 1; j <= num; j++){

        let currentCol = j-1
        
        column[currentCol] = document.createElement('div');
        column[currentCol].classList.add('test');
        column[currentCol].classList.add('column');
        row[currentRow].appendChild(column[currentCol]);
    }
    
}