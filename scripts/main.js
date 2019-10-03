// Задание 1
console.log ('Задание 1')
console.log ('префикс-инкремент сперва увеличивает переменную, затем возвращает значение')
console.log ('постфикс-инкремент сперва возвращает значение, затем возвращает значение')
console.log ('Подробнее в комментариях')
console.log ('')
/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
префикс-инкремент сперва увеличивает переменную (a = 1+1 = 2), затем возвращает значение (c = a = 2)
d = b++; alert(d);           // 1
постфикс-инкремент сперва возвращает значение (d = b = 1), затем возвращает значение (b = 1+1 = 2)
c = (2+ ++a); alert(c);      // 5
префикс-инкремент сперва увеличивает переменную (a = 2+1 = 3), затем возвращает значение (c = 2 + a = 2+3 = 5)
d = (2+ b++); alert(d);      // 4
постфик-инкремент сперва возвращает значение (d = 2 + b = 2+2 = 4), затем возвращает значение (b = 2+1 = 3)
alert(a);                    // 3
alert(b);                    // 3
*/


// Задание 2
console.log ('Задание 2')
console.log ('х = 1 + (2*2) = 1 + 4 = 5')

var a = 2;
var x = 1 + (a *= 2);

console.log ('проверка: х = ' + x)
console.log ('')

//Задание 3
console.log ('Задание 3')

var a = +prompt ('Введите число а')
var b = +prompt ('Введите число b')

if (a>=0 && b>=0) console.log ('a и b положительные, разность равна ' + a + ' - ' + b + ' = ' + (a-b))
else if (a<0 && b<0) console.log ('a и b отрицательные, произведение равно ' + a + ' * ' + b + ' = ' + (a*b))
else console.log ('a и b разных знаков, сумма равна ' + a + ' + ' + b + ' = ' + (a + b))
console.log ('')

//Задание 4
console.log ('Задание 4')

 var a = Math.floor(Math.random() * 16 )

 switch (a) {

   case 0 :
   console.log ('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
   break;

   case 1 :
   console.log ('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
   break;

   case 2 :
   console.log ('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
   break;

   case 3 :
   console.log ('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
   break;

   case 4 :
   console.log ('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
   break;

   case 5 :
   console.log ('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
   break;

   case 6 :
   console.log ('6, 7, 8, 9, 10, 11, 12, 13, 14, 15')
   break;

   case 7 :
   console.log ('7, 8, 9, 10, 11, 12, 13, 14, 15')
   break;

   case 8 :
   console.log ('8, 9, 10, 11, 12, 13, 14, 15')
   break;

   case 9 :
   console.log ('9, 10, 11, 12, 13, 14, 15')
   break;

   case 10 :
   console.log ('10, 11, 12, 13, 14, 15')
   break;

   case 11 :
   console.log ('11, 12, 13, 14, 15')
   break;

   case 12 :
   console.log ('12, 13, 14, 15')
   break;

   case 13 :
   console.log ('13, 14, 15')
   break;

   case 14 :
   console.log ('14, 15')
   break;

   case 15 :
   console.log ('15')
   break;
 }

 console.log ('')


//Задание 5
console.log ('Задание 5')

function summ (a, b) {
   let c = a + b
   return c
}

function diff (a, b) {
  let c = a - b
  return c
}

function multi (a, b) {
  let c = a * b
  return c
}

function div (a, b) {
  let c = a / b
  return c
}

console.log ('Функции реализованы. Можно использовать summ, diff, multi, div')
console.log ('')

//Задание 6
console.log ('Задание 6')

var a = +prompt('Введите число a')
var b = +prompt('Введите число b')
var operation = prompt('Выберите операцию: summ, diff, multi, div')

mathOperation(a,b,operation)

function mathOperation (a, b, operation) {
  switch (operation) {
    case 'summ':
      var c = summ(a,b)
      console.log (a + ' + ' + b + ' = ' + c)
      break

    case 'diff':
      var c = diff(a,b)
      console.log (a + ' - ' + b + ' = ' + c)
      break

    case 'multi':
      var c = multi(a,b)
      console.log (a + ' * ' + b + ' = ' + c)
      break

    case 'div':
      var c = div(a,b)
      console.log (a + ' / ' + b + ' = ' + c)
      break

    default:
      console.log('Неизвестная операция')
      break
  }
}
console.log('')
