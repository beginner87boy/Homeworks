

// Task 1 Given a non-empty array of integers, return the result of multiplying the values together in order. 


// const arr = [1, 2, 3, 4];


// function getSum (arr) {
  
//   return arr.reduce(function(product, n){
//       return product * n;
//   }, 1)
// }
// console.log(getSum(arr))



// Task 1 end


//// Task 2 Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

// const numbers = [1, 2, 2];
// const getSum = numbers.reduce((a,b)=>a+b**2, 0);
// console.log(getSum);


// function getSum(arr) {
//     for(i = 0; i < arr.length; i++) {
//         productSum = arr[i] * arr[i];
//         console.log(productSum);
//     }
// }


// getSum(arr);

// console.log(getSum);



// Task 2 end

/// Task 3. You get an array of numbers, return the sum of all of the positives ones.

// var array = [1, -12, 2, -13, 3, 5, -11, -14, -15];


// function positiveSum(arr) {
//   var sum = 0;
//   for(var i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//      sum += arr[i];
//    }
//   }
//  return sum;
//  }

//  console.log(positiveSum(arr));

//     sum = array.reduce(function (c, a) {
//         return a > 0 ? c + a : c;
//     }, 0);

// console.log(sum);

// positive = array.filter(function (a) { return a >= 0; }),
//     sum = positive.reduce(function (a, b) { return a + b; });

// console.log(sum);

 /// Task 3. end



 //// Task 4. Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// const arr = ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// const arr = ['hello', 'world', 'this', 'is', 'great'];
// console.log(arr.join(' '));

//// Task 4. end


//// Task 5. Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]

// var num = 35231,
//     arr = String(num).split("").reverse().map(Number);

// console.log(arr); 

//// Task 5. end



///// Task 6. You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.


// Examples (input -> output)
// [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


const arr1 = [1, 3, 5, 7, 9, 11, 12];
const arr2 = [1, 2, 3, 4, 5, 10, 12];

 
 const getNewArr = arr1.filter((number)=> !arr2.includes(number)).concat(arr2).sort((a,b)=>a-b);

 console.log(getNewArr);

 //// Task 6 end
