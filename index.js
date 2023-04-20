console.log('hello')
let string = 'string';
const number = 10;
const number2 = 15;
const boolean = true
console.log(string, number);
string = 'newString';
console.log(number/number2);
console.log(number2 % number, number + number2, number - number2, number * number2);
console.log(number**3, number2**3);
console.log(number + boolean);
console.log(Boolean('0'))
console.log(boolean && 3)
console.log(boolean || 0 || boolean)
console.log(!false)
console.log(2 < 4)
console.log(10 === 11)
console.log('a' < 'm') 
// for(let i = 0; i < 3; i++) {
    // console.log(i)
// {
// for(let i = 10; i > 3; i--) {
    // console.log(i)
// }
for(let i = 0; i <= 10; i = i + 0.5) {
    console.log(i)
}