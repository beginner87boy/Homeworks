const numbers = [3, 11, 4] ;

// function getSum (arr) {
//     let result = 0;
//     for (let i = 0; i < arr.lenght; i++) {
//         result += arr[i];
//         // result = result + arr [i];
//     }
//     return result;
// }

// console.log("val", getSum(numbers));

// numbers[0];

// numbers.map(function (item){
// let sum = 0;
// sum += item;

// return sum;
// })

// let result = numbers.reduce((acc, curr) => acc + curr);  // cemleyir

numbers.reduce((acc, curr) => console.log(acc,curr)); // ilk ededleri ayirir digerlerini ekranda gosterir
// console.log(result)