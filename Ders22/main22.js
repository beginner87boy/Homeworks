// let promise =new Promise((resolve, reject)=>{});

// function placeOrder(orderDetails, callback){
//     console.log("Placing order");
//     setTimeout(()=>{
//         console.log('Order placed for=$(Order Details)');
//     })
// }
// // cola
// function orderCola  (callback) {
//     SetTime (()=>{
//         console.log("Cola");
//         callback();
//     }, 1500);
// }
  
// // menu
// function orderBigMenu  (callback) {
//     SetTime (()=>{
//         console.log("Big Menu");
//         callback();
//     }, 2500);
// }

// // icecream
// function orderIceCream  (callback) {
//     SetTime (()=>{
//         console.log("Ice cream");
//         callback();
//     }, 2000);
// }

// // Big Tasty
// function orderBigTasty  (callback) {
//     SetTime (()=>{
//         console.log("Big Tasty");
//         callback();
//     }, 4000);
// }

// // fanta
// function orderFanta  (callback) {
//     SetTime (()=>{
//         console.log("Fanta");
//         callback();
//     }, 1500);
// }

// // Naggets
// function orderNaggets  (callback) {
//     SetTime (()=>{
//         console.log("Naggets");
//         callback();
//     }, 4000);
// }

// placeOrder("Prepare 1 big menu", function(){
//     orderCola(function(){
//         orderBigMenu(function(){
//             orderBigTasty(function(){
//                 orderIceCream(function(){
//                     orderBigTasty(function(){
//                         orderIceCream(function() {
//                             orderNaggets(function())
//                             {console.log("end");}); 
//                         });
//                     });
//                 });
//             });
//         });
//     });

// });

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
// let age = 21;
// }

// sayHi();

// for (var i = 0; i<3; i++) {
//     setTimeout(()=> console.log(i), 1);
// }
// for (let i =0; i <3; i++){
//     setTimeout(() => console.log(i), 1);
// }

// const bird = {
//     size: 'small',
// };

// const mouse = {
//     name: 'Mickey',
//     small: true,
// };

// console.log(bird,mouse);

// let a=3;
// let b = new Number (3);
// let c = 3;

// console.log(a == b);

// console.log(a === b);

// console.log(b === c);

// class Chameleon {
//     static colorChange(newColor){
//         this.newColor = newColor;
//         return this.newColor;
//     }

//     constructor({newColor = 'green'}= {}){
//         this.newColor = newColor;
//     }
// }
//     const freddie = new Chameleon({newColor: 'purple'});
//     console.log(freddie.colorChange('orange'));


// function bark() {
//     console.log('Woof!');
//     }
//     bark.animal = 'dog';

//     console.log (animal);

// function Person(firstName, lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
// }

// const member = new Person('Lydia','Hallie');
// Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;

// };

// console.lofg(member.getFullName());

// function sum (a, b) {
//     return a + b;
// }
// sum(1, '2');

// console.log(sum);

// var num = 8;
// var num = 10;

// console.log(num);

// String.prototype.giveLydiaPizza = () =>{
//     return 'Just give Lydia Pizza already!';

// };

// const name= 'Lydia';

// console.log(name.giveLydiaPizza())

// const a = {};
// const b = {key: 'b'};
// const c = {key: 'c'};

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);


// const foo = () => console.log('First');
// const bar = () => setTimeout(()=> console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();

// console.log(typeof typeof 1);

// !!null;
// !!'';
// !!1;

// console.log();


// [...'Lydia'];

// console.log();

// const person= {
//     name: 'Lydia',
//     age: 21,
// };

// let city = person.city;
// city = 'Amsterdam';
// console.log(person);

// [1, 2, 3].map(num => {
//     if (typeof num === 'number') return;
//     return num *2;
// });

// console.log();