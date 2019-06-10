// Описание
// Написать калькулятор выражений в обратной польской нотации.
// Польская нотация
// Выражение состоит из операндов: чисел и знаков операций + - * /
// Выражение читается слева направо
// Операнды в выражении разделяются пробелами
// Когда в выражении встречается знак операции, выполняется соответствующая операция над двумя последними встретившимися перед ним операндами в порядке их записи
// Результатом вычисления выражения становится результат последней вычисленной операции
// Примеры:
// checkExpression('7 2 * 3 +')  => 7 * 2 + 3 = 17
// checkExpression('7 2 3 * -')  => 7 - (2 * 3) = 1
// checkExpression('7 2 3 1 + * -')  => 7 - 2 * (3 + 1) = -1
// checkExpression('3.2 2 * 3 +')  => = 9,4
// checkExpression('1 2 + 4 * 3 +')  => = 15
// checkExpression('3.2 5 * 3 +')  => = 19


// checkExpression('11 -12 -')  => ?
// checkExpression('7 2 3 1 * - - 3 5 + -') => ?

// checkExpression('1 1 + +')   => Error in Syntax
// checkExpression('1 2 2 *')   => Error in Syntax
// checkExpression('1 b + c -')  => Error in Operands
//

function checkExpression(express) {
  var express = express.split(' ');
      num = [];
      sing = [];

  if(express.length < 3){
    return console.log('Error in Syntax');
  }else{

    for(var i = 0; i < express.length; i++) {
      if(!isNaN(parseFloat(express[i])) && isFinite(express[i])){
        num.push(express[i]);
      }else if( '*' === express[i] || '+' === express[i] || '-' === express[i] || '/' === express[i]){
        sing.push(express[i]);
      }else{
        return console.log('Error in Operands');
      }
    }

    if(num.length === (sing.length + 1)) {
      return calc (express);
    }else{
      return console.log('Error in Syntax');
    }
  }
}


 function calc (express) {
  var result,
      a = [];

   for(var i = 0; i < express.length; i++) {
     if(!(isNaN(express[i]))){
       a.push(+express[i]);
     } else {
         result = calculation(a,express[i]);
         a.pop();
         a.pop();

         if(i ===  express.length - 2 || a.length === 1){
           a.unshift(result);
         } else {
           a.push(result);
         }
     }
   }

  return console.log(a);
 }


 function calculation(arr, sing) {
   var a = arr.length -1;

   switch(sing) {
     case '*':
       return arr[a] * arr[a-1];

     case '/':
       return arr[a] / arr[a-1];

     case '+':
       return arr[a] + arr[a-1];

     case '-':
       return arr[a] - arr[a-1];
   }
 }


// const operators = {
//     '+': (x, y) => x + y,
//     '-': (x, y) => x - y,
//     '*': (x, y) => x * y,
//     '/': (x, y) => x / y
// };

// let evaluate = (expr) => {
//     let stack = [];

//     expr.split(' ').forEach((token) => {
//         if (token in operators) {
//             let [y, x] = [stack.pop(), stack.pop()];
//             stack.push(operators[token](x, y));
//         } else {
//             stack.push(parseFloat(token));
//         }
//     });

//     return stack.pop();
// };

























// function sequence(start, step) {
//   var newstep = isNaN(step) ? 1 : step;
//   var newstart = isNaN(start) ? 0 : start - newstep;

//   return function() {
//     return newstart += newstep;
//   }
// }

// function take(gen, x) {
//   var arr = [];

//   for (var i = 0; i < x; i++) {
//     arr.push(gen());
//   }

//   return arr;
// }

// var generator = sequence(10, 3);
// var generator2 = sequence(7, 1);

// console.log(generator()); // 10
// console.log(generator()); // 13

// console.log(generator2()); // 7

// console.log(generator()); // 16

// console.log(generator2()); // 8

// var gen2 = sequence(0, 2);
// console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]






