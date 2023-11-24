// Task 1. Write program that will reverse string: 'Hello world' => 'dlrow olleH' 

const reverseString = (str) => str.split("").reverse().join("");
 console.log(reverseString("hello world"))

// function reverseString(str) {

//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//       newString += str[i];
//   }
//   return newString;
// }

// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);

// Task 1 end



// Task 2 Write program to repeat every character in string 3 times: 'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'   




// Task 2 end




// Task 3 Write program to repeat given string n times: 'Hello world', 3 => 'Hello worldHello worldHello world'

const mood = 'Hello world';

console.log(`${mood.repeat(3)}`);



// Task 3 end




///Task 4: Write program to find the first not repeated character: 'abacddbec' => 'e'   

// function firstNotRepeatedChar(str) {
//   var arra1 = str.split('');
//   var result = '';
//   var ctr = 0;
 
//   for (var x = 0; x < arra1.length; x++) {
//     ctr = 0;
//      for (var y = 0; y < arra1.length; y++) 
//     {
//       if (arra1[x] === arra1[y]) {
//         ctr+= 1;
//       }
//     }
//      if (ctr < 2) {
//       result = arra1[x];
//       break;
//     }
//   }
//   return result;
// }
// console.log(firstNotRepeatedChar('abacddbec'));

/// Task 4 end




/// Task 5 Write program to find the first repeated character: 'abacddbec' => 'a'   

// function firstRepeatString(str)
// {    
//     let a = new Set();
     
//     for(let i = 0; i <= str.length - 1; i++)
//     {
//         let b = str[i];
 
//         if (a.has(b))
//             return b;
         
//         else
//             a.add(b);
//     }
//     return '\0';
// }
 
// let str = "abacddbec";
// console.log(firstRepeatString(str));


/// Task 5 end





/// Task 6 Write program to find the count of each character: 'abacddbec' => {a: 2, b: 2, c: 1, d: 3, e: 1}  


// let str = 'abacddbec'
  
// let result = {} 
// for(let i = 0;i< str.length;i++){ 
//   let ch = str.charAt(i) 
//   if(!result[ch]){ 
//     result[ch] =1; 
//   } 
//   else{ 
//     result[ch]+=1 
//   } 
// } 
// console.log("abacddbec",result)

/// Task 6 end




////Task 7 Write program that truncates string in a given length: 'Hello world', 5 => 'Hello...' 

// let str = "Hello world";  
// let firstString = str.substring(0, 5); 
// console.log(firstString);  

//// Task 7 end






//// Task 8 Write program that truncates string in a given length, but it should not break the word: 'Hello world, nice talking to you', 20 => 'Hello world, nice...' 

text_truncates = function(str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
console.log(text_truncates('Hello world, nice talking to you',20))


//// Task 8 end




//// Task 9 Create a program to calculate the sum of the elements in an array of numbers: [1, 2, 3, 4, 5] => 15 

let myNumbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < myNumbers.length; i++ ) {
  sum += myNumbers[i];
}

console.log(sum)


//// Task 9 end





/////Task 10: Create a program to calculate the average of the elements in an array of numbers: [1, 2, 3, 4, 5] => 3 ededi orta

const array = [1, 2, 3, 4, 5];
const average = array.reduce((a, b) => a + b, 0) / array.length;
console.log(average);

///// Task 10 end




///// Task 11 Create a program to find the maximum number in an array of numbers: [1, 2, 3, 4, 5] => 5 

console.log(Math.max(1, 2, 3, 4, 5));

///// Task 11 end




///// Task 12 Create a program to find the minimum number in an array of numbers: [1, 2, 3, 4, 5] => 1  

console.log(Math.min(1, 2, 3, 4, 5));


///// Task 12 end



///// Task 13 Create a program to find the second largest number in an array of numbers: [1, 2, 3, 4, 5] => 4 ikinci en boyuk eded

const secondLargeNumber = (data) => {
  first = data[0];
  second = data[0];
  for (var i = 0; i < data.length; i++) {
    if (first < data[i]){
      second = first;
      first = data[i];
    }else if (second < data[i]){
      second = data[i];
    }
  }
  console.log(" ",second);
 }
 
 const arr = [1, 2, 3, 4, 5];
 secondLargeNumber(arr);

///// Task 13 end



///// Task 14 Create a program to find the second smallest number in an array of numbers: [1, 2, 3, 4, 5] => 2  ikinci en kicik eded

function findSecondMinimum(arrey) {
 
  let min = Infinity;
  let secondMin = Infinity;

  for (let i = 0; i < arrey.length; i++) {
    if (arrey[i] < min) {
      secondMin = min;
      min = arrey[i];
    } else if (arrey[i] < secondMin && arrey[i] !== min) {
      secondMin = arrey[i];
    }
  }

  return secondMin;
}

const arrey = [1, 2, 3, 4, 5];
const secondMin = findSecondMinimum(arrey);
console.log(secondMin); 



///// Task 14 end



///// Task 15 Create a program to find the count of each element in an array of numbers: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] => {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}  

 
const eachElement = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5].reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});

console.log(eachElement)

///// Task 15 end



///// Task 16 Create a program to find the sum of the odd numbers in an array of numbers: [1, 2, 3, 4, 5] => 9 tek ededlerin cemi


var a = 0;
var b = [1, 2, 3, 4, 5];
for(var i = 0; i<b.length; i++){
   if(b[i]%2 !== 0){
   a += b[i]
   }
}
console.log(a);




///// Task 16 end




