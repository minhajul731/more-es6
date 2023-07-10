const friends = ['rahim', 'nasir', 'rifat', 'sudipto', 'imran', 'habib'];
const friendLength = friends.map(friend => friend.length);
// console.log(friendLength);

const products = [
    { name: 'mobile phone', price: 50000, color: 'black' },
    { name: 'Ac remote', price: 400, color: 'white' },
    { name: 'sunscream', price: 500, color: 'orange' },
    { name: 'bottole', price: 45, color: 'red' },
];

const productInfo = products.map(product => product.name);
// console.log(productInfo);

// products.map(product => console.log(product));

// forEach
products.forEach(product => console.log(product));