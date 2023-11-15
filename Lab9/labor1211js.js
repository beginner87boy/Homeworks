//  Practice Array methods

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Task 1 Array.filter() Filter the list of inventors for those who were born in the 1500's

const inventors1500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(inventors1500);

// Task 1 end




/// Task 2 Array.map() Give us an array of the inventors first and last names.

const inventorsNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(inventorsNames);

/// Task 2 end




//// Task 3 Array.sort() Sort the inventors by birthdate, oldest to youngest.

const inventorsBirthdays = inventors.sort((a, b) => a.year - b.year);
console.log(inventorsBirthdays);

//// Task 3 end




///// Task 4  Array.reduce() How many years did all the inventors live all together ?

const totalLive = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log(totalLive);

///// Task 4 end



///// Task 5 Array.every() Did all inventors live at least 45 years ?

const allLived45Year = inventors.every(inventor => inventor.passed - inventor.year >= 45);
console.log(allLived45Year);

///// Task 5 end




///// Task 6 Array.some() At least one inventor lived for 45 years?

const oneLived45 = inventors.some(inventor => inventor.passed - inventor.year >= 45);
console.log(oneLived45);

///// Task 6 end