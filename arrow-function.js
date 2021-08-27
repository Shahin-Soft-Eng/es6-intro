// // function declaration
// function add(num1, num2) {
//     return num1 + num2;
// }
// // function expression 
// const add2 = function add2(num1, num2) {
//     return num1 + num2;
// }
// // function expression (anonymous)
// const add3 = function (num1, num2) {
//     return num1 + num2;
// }
// //arrow function
// const add4 = (num1, num2) => num1 + num2;

// const sum1 = add(15, 17);
// const sum2 = add2(15, 17);
// const sum3 = add3(15, 17);
// const sum4 = add4(15, 17);
// console.log(sum1, sum2, sum3, sum4);
// document.getElementById('my-btn').onclick = function handleEvent(){

// }

// function declaration-2
// function add2 (num1, num2){
//     return num1+num2;
// }
// const numbers =[24,36];
// console.log(numbers);
// function expression
// const add3 = function add4(num1,num2){
//     return num1 + num2;
// }
// add3();
// console.log(add3);

// function expression (anonymous)
// const add3 = function (num1, num2) {
//     return num1 + num2;
// }
/* arrow function */

// function modhuBhai(nam1,nam2){
//     const fullName=`${nam1} ${nam2}`
//     return fullName;
// }
// // annonymous function
// const modhu = (nam1,nam2)=> {
//     const fullName=`${nam1} ${nam2}`
//     return fullName;
// }

// const modhu = (nam1,nam2)=> result =nam1 + nam2;
// console.log(modhu('Modhu','Bhai'));

function Product(name, price) {
    name = name;
    totalPrice = price;
  }
  
  function Food(name, price) {
    Product(totalPrice, name, price);
    category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"