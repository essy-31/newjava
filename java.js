// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((num) => num * 2);
// console.log(result);

// const celsius = [0, 10, 20, 30, 40];
// const fahrenheit = celsius.map((temp) => (temp * 9/5) + 32);
// console.log(fahrenheit);

// const names = ['john', 'jane', 'bob'];
// const result = names.map((name) => {
//     return name.substring(0, 1).toUpperCase() + name.substring(1);
// });
// console.log(result);

// const numbers = [
//     {id: 1, value: 10},
//     {id: 2, value: 20}
// ];
// const result = numbers.map((num) => {
//     return num.value;
// });
// console.log(result);

// const prices = [29.99, 10.50, 5.99, 100.00];

// const result = prices.map((price) => {
//     return "$" + price;
// });

// console.log(result);

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const result = numbers.filter((num) => {
//     return num % 2 !== 0;
// });

// console.log(result);

// const fruits = ['apple', 'banana', 'cherry', 'date'];

// const result = fruits.filter((fruit) => {
//     return fruit.length > 5;
// });

// console.log(result);

// const values = [0, 1, '', null, undefined, 'hello', false];

// const result = values.filter((value) => {
//     return Boolean(value);
// });

// console.log(result);

// const numbers = [10,20,30,40,50];

// const result = numbers.filter((num) => {
//     return num > 30;
// });

// console.log(result);

// const products = [
//     {item: 'book', price: 50},
//     {item: 'laptop', price: 1000}
// ];

// const result = products.filter((product) => {
//     return product.price > 100;
// });

// console.log(result);

// const products = [
//     {item: 'book', price: 50},
//     {item: 'laptop', price: 1000}
// ];

// const result = products.filter((product) => {
//     return product.price > 100;
// });

// console.log(result);

// const numbers = [1,2,3,4,5];

// const result = numbers.reduce((total, num) => {
//     return total + num;
// }, 0);

// console.log(result);

// const numbers = [1,2,3,4];

// const result = numbers.reduce((total, num) => {
//     return total * num;
// }, 1);

// console.log(result);

// const letters = ['a','b','a','c','b'];

// const result = letters.reduce((count, letter) => {
//     count[letter] = (count[letter] || 0) + 1;
//     return count;
// }, {});

// console.log(result);

// const numbers = [10,20,30,40,50];

// const total = numbers.reduce((sum, num) => {
//     return sum + num;
// }, 0);

// const average = total / numbers.length;

// console.log(average);

// const numbers = [1,2,3,4,5];

// const result = numbers
//     .map((num) => {
//         return num * num;
//     })
//     .filter((num) => {
//         return num % 2 === 0;
//     })
//     .reduce((sum, num) => {
//         return sum + num;
//     }, 0);

// console.log(result);

// const fruits = ['apple', 'banana', 'cherry'];

// const result = fruits
//     .map((fruit) => {
//         return fruit.toUpperCase();
//     })
//     .filter((fruit) => {
//         return fruit.length > 5;
//     })
//     .join(',');

// console.log(result);

// const celsius = [0,10,20,30];

// const result = celsius
//     .map((temp) => {
//         return (temp * 9/5) + 32;
//     })
//     .filter((temp) => {
//         return temp > 50;
//     })
//     .reduce((sum, temp, index, array) => {
//         return sum + temp / array.length;
//     }, 0);

// console.log(result);

// const people = [
//     {name: 'John', age: 30},
//     {name: 'Jane', age: 25}
// ];

// const ages = people.map((person) => {
//     return person.age;
// });

// const total = ages.reduce((sum, age) => {
//     return sum + age;
// }, 0);

// console.log(total / ages.length);

const words = ['hello', 'world', 'javascript'];

const result = words
    .map((word) => {
        return word.length;
    })
    .filter((length) => {
        return length > 5;
    })
    .reduce((sum, length) => {
        return sum + length;
    }, 0);

console.log(result);