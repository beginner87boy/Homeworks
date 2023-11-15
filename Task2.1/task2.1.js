const persons = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

// Task1.1 (MAP) Get the array of all names
const res = persons.map(p => ({
  name: p.name,

}));

console.log(res);

//Task 1.1 end


// Task1.2 (MAP) Get the array of all heights

const hay = persons.map(p => ({
  height: p.height,

}));

console.log(hay);

//Task 1.2 end

// Task1.3 (MAP) Get the array of objects with just name and height properties

const man = persons.map(p => [{
  name: p.name,
  height: p.height

}]);

console.log(man);

//Task 1.3 end

// Task1.4 (MAP) Get the array of all first names

const vay = persons.map(p => ({
  f_names: p.f_names,

}));

console.log(vay);

//Task 1.4 end

/// Task 2.1 (FILTER) Get characters with a mass greater than 100

const greaterPersons = persons.filter(
  (person) => person.mass > 100
);

console.log(greaterPersons);


/// Task 2.1 end


/// Task 2.2 (FILTER) Get characters with a height of less than 200

const long = persons.filter(
  (person) => person.height >= 200
);

console.log(long);


/// Task 2.2 end

/// Task 2.3 (FILTER) Get all male characters


const malePersons = persons.filter(
  (person) => person.gender === "male"
);

console.log(malePersons);


/// Task 2.3 end


/// Task 2.4 (FILTER) Get all fmale characters


const femalePersons = persons.filter(
  (person) => person.gender === "female"
);

console.log(femalePersons);


/// Task 2.3 end


//// Task 3.1 (SORT) Sort by mass

const sortMass = persons.sort((a, b) => parseInt(a.mass) - parseInt(b.mass));
console.log(sortMass);

//// Task 3.1 end

//// Task 3.2 (SORT) Sort by height

const sortHeight = persons.sort((a, b) => parseInt(a.height) - parseInt(b.height));
console.log(sortHeight);


//// Task 3.2 end


//// Task 3.3 (SORT) Sort by name

const sortName = persons.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortName);

//// Task 3.3 end

//// Task 3.4 (SORT) Sort by gender

const sortGender = persons.sort((a, b) => a.gender.localeCompare(b.gender));
console.log(sortGender);


//// Task 3.4 end


///// Task 4.1 (EVERY) Does every character have blue eyes?

const BlueEyes = persons.every(person => person.eye_color === 'blue');
console.log(BlueEyes);

///// Task 4.1 end


///// Task 4.2 (EVERY)  Does every character have a mass of more than 40?

const mass40 = persons.every(person => parseInt(person.mass) > 40);
console.log(mass40);

///// Task 4.2 end

///// Task 4.3 (EVERY)  Is every character shorter than 200?

const lenght200 = persons.every(person => parseInt(person.lenght) < 200);
console.log(lenght200);

///// Task 4.3 end

///// Task 4.4 (EVERY) Is every character male?

const everyMale = persons.every(person => person.gender === 'male');
console.log(everyMale);

///// Task 4.4 end


////// Task 5.1 (SOME) Is there at least one male character?

const oneMale = persons.some(person => person.gender === 'male');
console.log(oneMale);

////// Task 5.1 end

////// Task 5.2 (SOME) Is there at least one character with blue eyes?

const blueEyes = persons.some(person => person.eye_color === 'blue');
console.log(blueEyes);


////// Task 5.2 end

////// Task 5.3 (SOME) Is there at least one character taller than 210?

const heightMore210 = persons.some(person => parseInt(person.height) > 210);
console.log(heightMore210);


////// Task 5.3 end

////// Task 5.4 (SOME) Is there at least one character that has a mass of less than 50?

const massLess50 = persons.some(person => parseInt(person.mass) < 50);
console.log(massLess50);

////// Task 5.4 end