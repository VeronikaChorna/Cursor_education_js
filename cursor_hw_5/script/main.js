//1-------------------------------------------------------------------------------------------------------------
function getRandomArray(length, min, max) {
    let numbersArr = [];
    let number;
    for (let i = 0; i < length; i++) {
        number = (Math.random() * (max - min) + min).toFixed(0);
        numbersArr.push(Number(number));
    }
    return numbersArr;
}

console.log('1. An array of random integers', getRandomArray(15, 1, 100));
 
//2-------------------------------------------------------------------------------------------------------------
function getModa(numbers) {
    const wholeNumbers = numbers.filter(number => Number.isInteger(number));
    const count = {};
    wholeNumbers.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    maxValue = 0;
    let result;
    for (const [key, value] of Object.entries(count)) {
        if (value > maxValue) {
            maxValue = value;
        }
      }
    result = Object.keys(count).filter(key => count[key] === maxValue);
    return result;
    }
console.log('2. Moda of an random array: ', getModa(getRandomArray(15, 1, 50)));

//3-------------------------------------------------------------------------------------------------------------
function getAverage(arr) {
    const newArr = arr.slice();
    let sum = 0;
    for (let item of newArr) {
        if (Number.isInteger(item)) {
            sum += item;
        }
    }
    let avg = sum /newArr.length;
    return Number(avg.toFixed(2));
}

console.log('3. Avarage of arguments:', getAverage(getRandomArray(15, 1, 100)));

//4-------------------------------------------------------------------------------------------------------------
function getMedian(numbers) {
    let medianIndex;
    let arr = [];
    const sorted = numbers.sort((a, b) => (a - b));
    for (let item of sorted) {
        if (Number.isInteger(item)) {
            arr.push(item);
        }
    }
    medianIndex = Math.floor(arr.length / 2);
    const median = arr.length % 2 === 0 ? ((arr[medianIndex - 1] + arr[medianIndex]) / 2) : arr[medianIndex];
    return median;
}
console.log('4. Median: ', getMedian(getRandomArray(16, 1, 100)));


//5-------------------------------------------------------------------------------------------------------------
function filterEvenNumbers(numbers) {
    const skipEvenNumbers = numbers.filter((item) => ((item % 2) != 0));
    return skipEvenNumbers;
}

console.log('5. Filter (skip) even numbers:', filterEvenNumbers(getRandomArray(15, 1, 100)));


//6-------------------------------------------------------------------------------------------------------------
function countPositiveNumbers(numbers) {
    const positiveNumbers = numbers.filter((item) => typeof item === 'number' && isFinite(item) && item > 0);
    return positiveNumbers.length;
}

console.log('6. Count positive numbers:', countPositiveNumbers(getRandomArray(15, -50, 50)));


//7-------------------------------------------------------------------------------------------------------------
function getDividedByFive(numbers) {
    let numbersDividedByFive = numbers.filter((item) => ((item % 5) == 0));
    return numbersDividedByFive;
}

console.log('7. Numbers that can be divided by 5:', getDividedByFive(getRandomArray(15, 1, 100)));



