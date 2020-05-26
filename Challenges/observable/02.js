/**
 * Iterate through all element in a collection
 */

const arr = [10, 20, 30, 40, 50, 60];

console.log('before');
arr.forEach(function cb(x) {
    console.log(x);
});
console.log('after');