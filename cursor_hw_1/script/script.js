const firstProductPrice = 15.678;
const secondProductPrice = 123.965;
const thirdProductPrice = 90.2345;
console.log(`Price of the first product is: ${firstProductPrice}`);
console.log(`Price of the second product is: ${secondProductPrice}`);
console.log(`Price of the third product is: ${thirdProductPrice}`);

const maxPrice = Math.max(firstProductPrice, secondProductPrice, thirdProductPrice);
const minPrice = Math.min(firstProductPrice, secondProductPrice, thirdProductPrice);
console.log(`Max price is: ${maxPrice}, and min price is: ${minPrice}`);

const productsSum = (firstProductPrice + secondProductPrice + thirdProductPrice);
console.log(`Price of all products is: ${productsSum}`);

const roundedProductsSum = ((Math.floor(firstProductPrice)) + (Math.floor(secondProductPrice)) + (Math.floor(thirdProductPrice)));
console.log(`The sum of the cost of all goods, rounded down: ${roundedProductsSum}`);

const roundNearest100 = Math.round(roundedProductsSum / 100) * 100;
console.log(`Price rounded to the nearest 100: ${roundNearest100}`)

const evenNumber = roundedProductsSum % 2 === 0;
console.log(`The products price is even number: ${evenNumber}`);

const clientMoney = 500;
const clientsRest = (clientMoney - productsSum);
console.log(`The remaining amount, when paying for all goods, if the client pays UAH 500: ${clientsRest}`);

const avgPrice = ((firstProductPrice + secondProductPrice + thirdProductPrice) / 3).toFixed(2);
console.log(`Avarage price is: ${avgPrice}`);

const saleRandom = (Math.random() * 99 + 1).toFixed(0);
console.log(`Randon sale is: ${saleRandom}%`);

const priceAfterSale = (productsSum - (productsSum / 100 * saleRandom)).toFixed(2);
console.log(`Price of the products after random sale: ${priceAfterSale}`);

const netProfit = (priceAfterSale - productsSum / 2).toFixed(2);
console.log(`Net profit after sale: ${netProfit}`);

console.log(`Price of the first product is: ${firstProductPrice}
Price of the second product is: ${secondProductPrice}
Price of the third product is: ${thirdProductPrice}
Max price is: ${maxPrice}, and min price is: ${minPrice}
Price of all products is: ${productsSum}
The sum of the cost of all goods, rounded down: ${roundedProductsSum}
Price rounded to the nearest 100: ${roundNearest100}
The products price is even number: ${evenNumber}
The remaining amount, when paying for all goods, if the client pays UAH 500: ${clientsRest}
Avarage price is: ${avgPrice}\nRandon sale: ${saleRandom}%
Price of the products after random sale: ${priceAfterSale}
Net profit after sale: ${netProfit}`);