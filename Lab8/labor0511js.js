// tapsiriq 1 baslandi. Salam adini daxil edin Masal kimi gorsensin.

// function checkWord (word) {
//   let result = "";
//   for (let i = [word.lenght - 1]; i >= 0; i--){
//     result += word [i]
//     }
//     return result;
// }

// console.log(checkWord("salam"));

// tapsiriq 1 bitdi



// tapsiriq 2 baslandi. 'Never give up' cumlesinde e herfi nece defe istifade olunub.

// function calculateLetter (sentence) {
//   let repeat = 0
//   for(let i = 0; i < sentence.lenght ; i++) {
//     if(sentence[i] == "e"){
//       repeat++
//     }

//   }
//   return repeat;
// }

// console.log(calculateLetter("Never give up"))

// tapsiriq 2 bitdi.


/// tapsiriq 3 basladi. capacity

const cars = [
  {
    color: "red",
    type: "mercedes",
    capacity: 5,
    price: 110,
  },
  {
    color: "blue",
    type: "BMW",
    capacity: 2,
    price: 95,
  },
  {
    color: "white",
    type: "Hyundai",
    capacity: 7,
    price: 35,
  },
  {
    color: "brown",
    type: "KIA",
    capacity: 6,
    price: 40,
  },
  {
    color: "yellow",
    type: "Ford",
    capacity: 4,
    price: 30,
  }
]

// const sizeCars = cars.map ((car) =>{
//   if (car.capacity<=3) {
//     console.log (`small ${car.type}`)
//   }


// else if (car.capacity<=5) {
//   console.log (`medium ${car.type}`)
// }

// else  {
//   console.log (`large ${car.type}`)
// }
// })

// console.log (sizeCars)
///Tapsiqi 3-un 1-ci suali bitdi

///3-cu tapsiriq 2-ci sual. Qirmizi rengli masinlara 30% endirim

const discountedCars = cars.filter((car)=>car.color=="red").map((car)=>{ 
  let discounted = car.price - (car.price*30)/100;
    console.log (`New Price ${discounted}$ car model ${car.type}`)
  })
console.log(discountedCars)

///3-cu tapsirigin 2-ci suali bitdi.
///Tapsiriq 3 bitdi
