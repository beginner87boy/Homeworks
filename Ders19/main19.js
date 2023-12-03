

const obj = {
    name: "Omer",
    f_name: "Hasanov",
    age: 36,
}
const fullObj = {
    ...obj,
    adress: "Baku",
    sex: "man",
}

console.log(fullObj);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, fullObj, ...arr1];

console.log (arr2);



