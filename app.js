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
        rowElement.append(tileElelement);
    });

    tileDisplay.append(rowElement);
})

const handleClick = () => {
    console.log('clicked')
}

keys.forEach(key => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = key;
    buttonElement.setAttribute('id', key);
    buttonElement.addEventListener('click', handleClick);
    keyBoard.append(buttonElement);
})

