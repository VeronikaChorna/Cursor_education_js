const generator = document.getElementById('generator');
const currentNumber = document.getElementById('current-number');

const textToChange = document.getElementById('text-test');
const btnUp = document.getElementById('btn-up');
const btnDown = document.getElementById('btn-down');

//-------------------------------------------------------------------------
const idGenerator = createIdGenerator();
function *createIdGenerator() {
    for (let i = 1; i < Infinity; i++) {
        yield i;
    }
}

generator.onclick = () => {
    currentNumber.innerHTML = idGenerator.next().value;
  };


// -------------------------------------------------------------------------
const fontGenerator = newFontGenerator(14);
function* newFontGenerator(fontSize) {
    let currSize = fontSize;
    let newSize = yield currSize;
    for (let i = 0; i < Infinity; i++) {
        if (newSize === 'up') {
            currSize += 2;
            newSize = yield currSize;
        }
        if (newSize === 'down') {
            currSize -= 2;
            newSize = yield currSize;
        }
    }
}
btnUp.onclick = () => {
    textToChange.style.fontSize = fontGenerator.next('up').value + 'px';
  };

btnDown.onclick = () => {
   textToChange.style.fontSize = fontGenerator.next('down').value + 'px';
 };

 