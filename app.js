const tileDisplay = document.querySelector('.tile-container');
const keyBoard = document.querySelector('.key-container');
const messageDisplay = document.querySelector('.message-container');

const wordle = 'SUPER';
const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '<<',
];

let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex);
    guessRow.forEach((guess, guessIndex) => {
        const tileElelement = document.createElement('div');
        tileElelement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex);
        tileElelement.classList.add('tile');
        rowElement.append(tileElelement);
    });

    tileDisplay.append(rowElement);
})



keys.forEach(key => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = key;
    buttonElement.setAttribute('id', key);
    buttonElement.addEventListener('click', () => handleClick(key));
    keyBoard.append(buttonElement);
})


const handleClick = (letter) => {
    console.log('clicked', letter);
    if (letter === '<<') {
        deleteLetter();
        console.log('guessRows', guessRows);
        return;
    }
    if (letter === 'ENTER'){
        checkRow();
        console.log('guessRows', guessRows);
        return;
    }

    addLetter(letter);
    console.log('guessRows', guessRows);
}

const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6){
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = letter;
        guessRows[currentRow][currentTile] = letter; 
        tile.setAttribute('data', letter);
        currentTile++;
        console.log('guessRows', guessRows);
    }

}

const deleteLetter = (letter) => {
    if (currentTile > 0){
        currentTile--;
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = '';
        guessRows[currentRow][currentTile] = ''; 
        tile.setAttribute('data', '');
    }
}

const checkRow = (letter) => {
    const guess = guessRows[currentRow].join('');
    if (currentTile > 4){
        flipTile();
        console.log('guess is ' + guess, 'wordle is ' + wordle)
        if ( wordle == guess){
            showMessage('Magnificent');
            isGameOver = true;
            return;
        } else {
            if (currentRow >= 5){
                isGameOver = true;
                showMessage('Game over');
                return;
            }
            if (currentRow < 5) {
                currentRow++;
                currentTile = 0;
            }
        }
    }
}

const showMessage = (message) => {
    const messageElement = document.createElement('p');
    messageElement.textContent = message; 
    messageDisplay.append(messageElement);
    setTimeout(() => messageDisplay.removeChild(messageElement), 2000);
}

const flipTile = () => {

    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes;
    rowTiles.forEach((tile, index) => {
        const dataLetter = tile.getAttribute('data');

        if(dataLetter == wordle[index]){
            tile.classList.add('green-overlay');
        } else if (wordle.includes(dataLetter)) {
            tile.classList.add('yellow-overlay');
        } else {
            tile.classList.add('grey-overlay');
        }
    })


}