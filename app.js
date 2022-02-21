const tileDisplay = document.querySelector('.tile-container')
const keyBoard = document.querySelector('.key-container')

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
]

let currentRow = 0;
let currentTile = 0;

const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

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
    addLetter(letter);
}

const addLetter = (letter) => {

    const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
    tile.textContent = letter;
}