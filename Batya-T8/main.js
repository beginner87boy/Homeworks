
///  1. Verilən arraydə aşağıda qeyd olunan taspşırıqları həll etmək lazımdır.

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


//////////////////////////////////----------Tapsiriq-1---------------////////////////////////



/////// 1.***MAP***

// 1. Bütün adların arrayini əldə edin

// const allNames = persons.map(person => person.name);
// console.log(allNames);



// 2. Bütün yüksəkliklər arrayini əldə edin

// const allHeights = persons.map(person => person.height);
// console.log(allHeights);



// 3. Yalnız ad və hündürlük xassələri olan obyektlər massivini əldə edin

// const nameAndHeightArray = persons.map(person => ({ name: person.name, height: person.height }));
// console.log(nameAndHeightArray);




// 4. Bütün adların massivini əldə edin

// const allNames = persons.map(person => person.name);
// console.log(allNames);



//////////////////////////////////----------Tapsiriq-2---------------////////////////////////




////////// 2. ***Filter* **

// 1. Kütləsi 100-dən çox olan simvolları əldə edin


// const massGreaterThan100 = persons.filter(person => parseInt(person.mass) > 100);
// console.log(massGreaterThan100);





// 2. Hündürlüyü 200-dən az olan simvolları əldə edin


// const heightLessThan200 = persons.filter(person => parseInt(person.height) < 200);
// console.log(heightLessThan200);



// 3. Bütün kişi simvolları əldə edin

// const maleCharacters = persons.filter(person => person.gender === 'male');
// console.log(maleCharacters);





// 4. Bütün qadın simvolları əldə edin

// const femaleCharacters = persons.filter(person => person. gender === 'female');
// console.log(femaleCharacters);






//////////////////////////////////----------Tapsiriq-3---------------////////////////////////




// 3. ***SORT***////

// 1. Kütləsinə görə çeşidləyin

// const sortByMass = persons.sort((a, b) => parseInt(a.mass) - parseInt(b.mass));
// console.log(sortByMass);




// 2. Sıralayın hündürlüyə görə

// const sortByHeight = persons.sort((a,b) => parseInt (a.height)- parseInt(b.height) );
// console.log(sortByHeight);


// 3. Ada görə sırala

// const sortByName = persons.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortByName);




// 4. Cinsə görə sırala

// const sortByGender = persons.sort((a,b) => a.gender.localeCompare(b.gender));
// console.log(sortByGender);










//////////////////////////////////----------Tapsiriq-4---------------////////////////////////


// /// 4.  ***Every (HƏR)***/////

// 1. Hər personajın mavi gözləri varmı?

// const everyBlueEyes = persons.every(person => person.eye_color === 'blue');
// console.log(everyBlueEyes);




// 2. Hər personajın kütləsi 40-dan çox olurmu?


// const everyMassMoreThan40 = persons.every(person => parseInt(person.mass) > 40);
// console.log(everyMassMoreThan40);




// 3. Hər simvol 200-dən qısadır?

// const everyHeightLessThan200 = persons.every(person => parseInt(person.height) < 200);
// console.log(everyHeightLessThan200);


// 4. Hər bir xarakter kişidir?

// const everyAllCharacterMale = persons.every(person => person.gender === 'male');
// console.log(everyAllCharacterMale);



// const everyMale = persons.every(person => person.gender === 'male');
// console.log(everyMale);









//////////////////////////////////----------Tapsiriq-5---------------////////////////////////






// ///// 5. ***SOME (BƏZİ) ***//////

// 1. Ən azı bir kişi xarakter varmı?

// const atLeastOneMale = persons.some(person => person.gender === 'male');
// console.log(atLeastOneMale);








// 2. Mavi gözlü ən azı bir personaj varmı?

// const atLeastBlueEyesOneCharacter = persons.some(person => person.eye_color === 'blue');
// console.log(atLeastBlueEyesOneCharacter);


// const atLeastOneBlueEyes = persons.some(person => person.eye_color === 'blue');
// console.log(atLeastOneBlueEyes);





// 3. 210-dan yüksək olan ən azı bir simvol varmı?

// const atleastHeightMoreThan210 = persons.some(person => parseInt(person.height) > 210);
// console.log(atleastHeightMoreThan210);


// const atLeastOneTallerThan210 = persons.some(person => parseInt(person.height) > 210);
// console.log(atLeastOneTallerThan210);





// 4. Kütləsi 50-dən az olan ən azı bir simvol varmı?


// const atLeastOneMassLessThan50 = persons.some(person => parseInt(person.mass) < 50);
// console.log(atLeastOneMassLessThan50);