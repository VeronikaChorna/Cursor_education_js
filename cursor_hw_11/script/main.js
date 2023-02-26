let stringLength = Number(prompt("Please enter number:"));
while (Number.isInteger(stringLength) === false) {
    numberN = Number(prompt("It is not a correct value, please enter an integer number:"));
}

async function getRandomChinese(length) {
    let result = '';
    let i = 0;
    while(i < length) {
        let data = Date.now();
        let sign = data.toString().slice(-length);
        let newSign = String.fromCharCode(sign);
        result += newSign;
        i++;
        await new Promise((resolve)=>{
            setTimeout(function(){resolve()}, 50);
        });
    }
    return result;
}

getRandomChinese(stringLength).then((value) => {
    document.getElementById("output").innerHTML = value;
});