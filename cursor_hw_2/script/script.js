let numberN = Number(prompt("Please enter the first number:"));
while (Number.isInteger(numberN) === false) {
    numberN = Number(prompt("It is not a correct value, please enter an integer number:"));
}

let numberM = Number(prompt("Please enter the last number (the number must be greater than the previous one):"));
while (Number.isInteger(numberM) === false) {
    numberM = Number(prompt("It is not a correct value, please enter an integer number:"));
}

let skipEvenNumbers = confirm("Should to skip even numbers?") ? true : false;
console.log(`Should to skip even numbers: ${skipEvenNumbers}.`);


let sum = 0;
for (let i = numberN; i <= numberM; i++) {
    if (skipEvenNumbers) {
        if ((i % 2) != 0){
            sum += i;
        }
    } else {
        sum += i;
    }
}

console.log(`Sum of your numbers = ${sum}.`);



