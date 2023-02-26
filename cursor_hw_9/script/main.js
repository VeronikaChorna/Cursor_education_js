const divsAmound = 25;

function generateBlocks() { 
    const container = document.querySelector(".container");
    for (let i = 0; i < divsAmound; i++) {
       div = document.createElement('div');
       div.id = 'block' + i;
       div.style.backgroundColor = "#" + setDivBg();
       div.className = 'box';
       container.prepend(div);
    }   
}

const setDivBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }

function generateBlocksInterval() {
    setInterval(() => {
        for (let i = 0; i < divsAmound; i++) {
            let b = document.getElementById('block' + i);
            b.style.backgroundColor = "#" + setDivBg();
        }
    }, 1000);
}

generateBlocks();
document.getElementById("clickMe").onclick = generateBlocksInterval;