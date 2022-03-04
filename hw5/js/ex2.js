const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// An array of odd numbers
const odd =array.filter(x => x % 2 == 1);

// An array of numbers divisible by 2
const two =array.filter(x => x % 2 == 0);

// An array of numbers divisible by 3 squared
const square =array.filter(x => x % 3 === 0).map(y => y * y);

// d.	An array with the sum of the following: square the numbers divisible by 5
const sum =array.filter(x => x % 5 === 0).map(y => y * y).reduce((sum, y) => sum + y, 0);


console.log(odd);
console.log(two);
console.log(square);
console.log(sum);
console.log(array);