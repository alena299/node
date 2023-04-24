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

    /*function someThing(a, b) {
        if (a === b) {
            return a**b;
        } else {
            return a + b;
        }
    }
    const result = someThing(2, 4);
    console.log(result)*/
  
  /*  let str = "Привет";

console.log( str.toUpperCase() ); 
let num = 2.76543;

console.log( num.toFixed(2) );*/
/*console.log(8 % 6);
console.log(16 ** (1/2))
let apples = 3;
let carots = 5;
console.log(+apples + +carots);
let x = 3;
x++;
console.log(x)
let y = 3;
++y;
console.log(y)*/
/*for (a = 1, b = 3, c = a * b; a < 10; a++) {
    console.log(c)
   }
   let x = 5;
   while(x < 10) {
    console.log(x);
    x++;
   }*/
  /*let num = 0;
   for(; num < 5; num++) {
    console.log(num);
    if(num == 2) break;
   }
   console.log(`The end, num = ${num}`);*/

   /*let num = 0;
   for (; num < 5; num++) {
    if (num == 2) continue;
    console.log(num);
   }*/

// firstFor: for (let num = 0; num < 2; num++) {

//     for (let size = 0; size < 3; size++) {
 
//         if (size == 1) {
//         break firstFor;
//     }
//     console.log(size);
// }
   
// }

// let color = 'yellow';

// // switch (color) {
// //     case 'yellow':
// //         console.log( 'color is yellow' );
// //         break;
// //     case 'red':
// //         console.log( 'color is red' );
// //         break;
// //     default :
// //     console.log( 'o' );
// }

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//   case 4:
//     alert( 'В точку!' );
//   case 5:
//     alert( 'Перебор' );
//   default:
//     alert( "Нет таких значений" );
// }

// function sum(num1, num2) {
//     return num1 + num2;
// }
//     let result = sum(85, 55);
    
//     console.log(result)

// showMessage();
// showMessage();
// function showMessage() {
//     console.log('hello');
// }
// showMessage();

// function calcSum(num1, num2) {
//     let calcSum = num1 + num2;
//     console.log(`num1:${num1}`);
//     console.log(`num2:${num2}`);
//     let numSumm = num1 + num2;
//     console.log(`sum:${numSumm}`);
// }
// calcSum(7, 9);

// function calcSumm(n1, n2, more, less) {
//     let numSumm = n1 + n2;
//     if (numSumm > 3) {
//         more();        
//     } else {
//         less();
//     }
// }

// function showMoreMessage() {
//     console.log('more than 3');    
// }
// function showLessMessage() {
// console.log('less than 3');
// }

// calcSumm(1, 1, showMoreMessage, showLessMessage);

// function calcSumm(n1, n2) {
//     let numSumm = n1 + n2;
//     return numSumm;
// }
// let funcResult = calcSumm(4, 8);
// console.log(`summ:${funcResult}`)

// function getSumm(n1, n2) {
//     let numSumm = calcSumm(n1, n2);
//     console.log(numSumm);
// }
// function calcSumm(n1, n2) {
//     return n1 + n2;
// }
// getSumm(4, 7);

// function calcSumm(n1, n2) {
//     if (n2 === 1) {
//         return n1;
//     } else {
//         return n1 * calcSumm(n1, n2 -1);
//     }
// }
// console.log(calcSumm(3, 4));

// let showMessage = function () {
//     console.log('hi');
// };
// showMessage();

// let getName = (text, name) => text + ', ' + name + '!';
// console.log(getName('hi', 'John'));

// let getMessage = (text, name) => {
// let message = text + ', ' + name + '!';
// return message;
// };
// console.log(getMessage('hi', 'John'));

// function showMessage(text, name) {
//     console.log(`${text}, ${name}!`);   
// }
    
// setTimeout(showMessage, 3000, 'Hi', 'John');

// function showMessage(text, name) {
//         console.log(`${text}, ${name}!`);   
//     }
        
//     setInterval(showMessage, 500, 'Hi', 'John');

// function showNumber(num) {
//         console.log(num);  
//         if(num < 5) {
//             setTimeout(showNumber, 1000, ++num);  
//         }
          
//     }
        
//     setTimeout(showNumber, 1000, 1);

// function showNumber(num) {
//     console.log(num);  
//     let timeId = setTimeout(showNumber, 1000, ++num);
//     if(num === 7) {
//         clearTimeout(timeId);
          
//     }
//  }
   
// setTimeout(showNumber, 1000, 1);

// let result = 0;
// function showNumber(num) {
//     result += num;
//     console.log(result);  
//     if(result === 7) {
//         clearInterval(timeId);          
//     }
//  }
//  let timeId = setInterval(showNumber, 1000, 1);  


// function showName() {
//     console.log('V');
// }
// setTimeout(showName, 0);
// console.log('K');


function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('А родители разрешили?');
    }
  }
  
  let age = prompt('Сколько вам лет?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Доступ получен' );
  } else {
    alert( 'Доступ закрыт' );
  }