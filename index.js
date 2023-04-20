// console.log('hello')
// let string = 'string';
// const number = 10;
// const number2 = 15;
// const boolean = true
// console.log(string, number);
// string = 'newString';
/*console.log(number/number2);
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
}*/
/*for(let i = 1; i < 4; i++) {
console.log(i)
}
*/
/*for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}*/
/*let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log( i ); // простое число
}*/
/*for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
  }*/
/*let i = 0
while (i < 3) {
    console.log( `number ${i}!` );
    i++
}*/

/*let num;
do {
    num = prompt('input number more 100', 0)
} while (num <= 100 && num);*/

/*let i = prompt('put number','');

if (i > 100) {
    alert('ok')
} else {
    alert('nok')
}*/
/*let i = -1
if (i < 0) {
    console.log(i);

} else if (i===0) {
    console.log('zero')
} else {
    console.log('nok')
}
let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);*/

/*let age = prompt('Сколько вам лет?', '');

let accessAllowed = (age > 18) ? true : false;
alert(accessAllowed);*/
/*let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'hi!' :
  (age < 18) ? 'hello!' :
  (age < 100) ? 'rrr' :
  'fff';

alert( message );*/

/*let i = prompt('put number','');
if (i > 0) {
    alert(1)
} else if (i < 0) {
    alert(-1)
} else {
    alert(0)
}*/

/*let i = prompt('put number','');
let message = (i > 0) ? '1' :
(i < 0) ? '-1' : '0';
alert(message);*/

/*let login = prompt('put number','')
let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' : 'Нет логина';
alert(message);*/
/*let a = 1;
let b = 2;
result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result);*/
/*function showMessage() {
    console.log( 'Всем привет!' );
  }
  showMessage()*/

  /*function addNumber(number1, number2) {
    if (number1 > number2) {
        console.log(number1 + number2)
    }
    else if (number1 < number2) {
console.log(number1 / number2)
    } else {
        console.log(0)
    }
}
    addNumber(18, 20);
    addNumber(3, 5)
    addNumber(9,30)
    addNumber(90,1)
    addNumber(2,2)*/

    function someThing(a, b) {
        if (a === b) {
            return a**b;
        } else {
            return a + b;
        }
    }
    const result = someThing(2, 4);
    console.log(result)
    