

// Task 1 Write a function findNeedle() that takes an array full of junk but containing one "needle"



const myArr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

function findNeedle (array) {

  return "found the needle at position" + array.indexOf("needle");

}

findNeedle(myArr);

console.log(findNeedle(myArr));


// Task 1 end


//// Task 2 Write a function that adds two arrays

const arr1 = [1, 1, 1, 1];
const arr2 = [2, 2, 2, 2];

function  findSum(array1,array2) {
  return array1.concat(array2).reduce((a,b)=>a+b, 0);
}

console.log(findSum(arr1,arr2))

/// Task 2 end


//// Task 3 Given a array of digits, you should replace any digit below 5 with '0' and any digit 5 and and above with '1'. Return

const num = [1, 4, 6, 10, 20, 2]

function squareWave(num) {
  
return num.map((num)=>num>5 ? 1 : 0);
  }

console.log(squareWave(num));

///// Task 3 end


