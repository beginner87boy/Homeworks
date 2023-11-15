//### Task 1: Function Basics
// Task 1.1 Create a function named `greetUser` that takes a user's name as an argument and prints a personalized greeting.

function greetUser(name) {
  console.log(`Hello, ${name}! Welcome to the class.`);
}
greetUser("Teacher");

// Task 1.1 end

// Task 1.2 Write a function `calculateArea` that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

function calculateArea(length, width) {
  return length * width;
}
let area = calculateArea(5, 4);
console.log("Area", area);

// Task 1.2 end

//1.3 Implement a function `isEven` that checks if a given number is even. Return `true` if it is, otherwise `false`.

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(7));

// Task 1.3 end


///### Task 2: Array Manipulation
/// Task 2.1 Create an array named `fruits` containing at least five different fruit names. Write a function `displayFruits` that prints each fruit in the array.

let fruits = ["Lemon", "Pear", "Apple", "Kiwi", "Banana"];

function displayFruits() {
  for (let fruit of fruits) {
    console.log(fruit);
  }
}

displayFruits();

/// Task 2.1 end

///2.2 Implement a function `reverseArray` that reverses the elements of an array. Test it with both numeric and string arrays.

function reverseArray(arr) {
  return arr.reverse();
}

let numericArray = [7, 5, 13, 50, 41];
console.log(reverseArray(numericArray));

/// Task 2.2 end


/// Task 2.3 Write a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

let numbersArray = [9, 20, 15, 23, 25, 52, 98, 70];
console.log(filterEvenNumbers(numbersArray));

/// Task 2.3 end


////#### Task 3: Object and Methods
//// Task 3.1 Define an object `person` with properties `name`, `age`, and `city`. Write a function `displayPersonInfo` that prints the information in a readable format.

let person = {
  name: "Omer",
  f_name: "Hasanov",
  age: 36,
  city: "Baku"
};


function displayPersonInfo() {
  console.log(`Name: ${person.name}, Surname: ${person.f_name} Age: ${person.age}, City: ${person.city}`);
}


displayPersonInfo();

//// Task 3.1 end


//// Task 3.2 Extend the `person` object by adding a method `haveBirthday` that increments the age by 1 each time it's called.

let persone = {

  age: 40,
};

function displayPersoneInfo() {

  console.log(`Age: ${persone.age}`);
}

persone.haveBirthday = function () {
  this.age += 1;
};

persone.haveBirthday();
displayPersoneInfo();

//// Task 3.2 end

////3.3 Create an object `car` with properties `make`, `model`, and `year`. Write a method `displayCarInfo` that prints the car's information.

const cars = {
  make: 'Hyundai',
  model: 'Santa-Fe',
  year: 2012,

  displeyCarInfo: function () {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
};

cars.displeyCarInfo();

//// Task 3.3 end

/////#### Task 4: Advanced Array Methods
/////4.1 Create an array of numbers and use the `map` function to square each element. Print the resulting array.

/////4.2 Given an array of strings, use the `filter` function to create a new array containing only strings with more than 5 characters.

/////4.3 Write a function `calculateTotal` that takes an array of prices and uses the `reduce` function to calculate the total cost.