//Print odd number using anonymous function and IIFE Function.
// Anonymous Functions:
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const squaresOfEvenNumbers = numbers.filter(ele => ele % 2 != 0);
console.log(squaresOfEvenNumbers);
// IIFE Function:
(function(array){
for(var i = 0 ; i< array.length ; i++){
if(array[i]%2!=0){
console.log(array[i])
} 
}
})([0,1,2,3,4,5,6,7,8,9,10])

// converting the string to the upper case:
// Anonymous Function:
function toTitleCase(str) {
return str.toLowerCase().split(' ').map(function (word) {
return (word.toUpperCase());
}).join(' ');
}
console.log(toTitleCase("all is well"));
// IIFE Function:
(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  })("all is well");

// sum of all array:
// Anonyumous
function sumArray(array){
    let sum = 0 
    for (let i = 0; i <array.length; i += 1) {
    sum += array[i]
    }
    console.log(sum);
    return sum
  }
  sumArray([1,2,3,4,5,6,7,8,9,10]);
//   IIFE
(function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
    sum = sum + array[i];
    }
    console.log (sum);
    })([1,2,3,4,5,6,7,8,9,10])
// Return all the prime number in array
// Anonyumous Function:
const newArray = [1,2,3,4,5,6,7,8,9,10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};


const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);
// IIFE Function:
(function(numArray){
numArray = numArray.filter((number) => {
for (var i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) return false;
}
return true;
});
console.log(numArray);
})([1,2,3,4,5,6,7,8,9,10])

// Return all palidrome in array:
// Anonyumous
const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);
console.log(getAllPalindromes(["hello", "noon"]));
// IIFE
(function (arr, n)
{
for (let i = 0; i < n; i++)
{
let ans = isPalindrome(arr[i]);
if (ans == false)
return false;
}
return true;
    
})([1,2,3] , 3)

// Remove duplicates from an Array
// Anonymous:
const dup=[1,1,2,3,4]
function dup(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }
//   IIFE
(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])

// Rotate an array by k times
(function(array , k){
k = k % a.length;
if(k < 0){
k += a.length;
}
reverse(a, 0, a.length - k - 1);
reverse(a, a.length - k, a.length - 1);
reverse(a, 0, a.length - 1);
})([1,2,3,4] , 2)
    
// ==============================================
// Arrow Function:
//Print odd number using anonymous function and IIFE Function.
oddNumbers = (array) => {
for(var i = 0 ; i< array.length ; i++){
if(array[i]%2!=0){
console.log(array[i])
} }
}
// Convert all the strings to title caps in a string array
titleCase = (str) => {
str = str.toLowerCase().split(' ');
for (var i = 0; i < str.length; i++) {
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
} 
return str.join(' ');
}    
// Sum of all numbers in an array
sum = (array)=>{
var sum = 0;
for(var i = 0 ; i< array.length ; i++){
sum = sum + array[i];
}
return sum;
}
// Return all the prime numbers in an array
primeNumber = (numArray) => {
numArray = numArray.filter((number) => {
for (var i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) return false;
}
return true;
});
console.log(numArray);
}
// Return all the palindromes in an array
Palindrome = (arr, n) =>
{
for (let i = 0; i < n; i++)
{
let ans = isPalindrome(arr[i]);
if (ans == false)
return false;
}
return true;
}