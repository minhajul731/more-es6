// using filter()
const numbers = [10, 2, 50, 40, 9, 60, 12, 15, 30];
const numberFilter = numbers.filter(number => number > 20);
console.log(numberFilter);

// filter using in object 
const products = [
    { name: 'mobile phone', price: 50000, color: 'black' },
    { name: 'Ac remote', price: 400, color: 'white' },
    { name: 'smart watch', price: 2500, color: 'black' },
    { name: 'sunscream', price: 500, color: 'orange' },
    { name: 'pen', price: 10, color: 'orange' },
    { name: 'bottole', price: 45, color: 'red' },
];

const productColors = products.filter(product => product.color == 'black');
console.log(productColors);

// using find() 
const productColor = products.find(product => product.color == 'black');
console.log(productColor);