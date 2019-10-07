// Задание 1
console.log ('Задание 1')

var simple = [2]
var j = 2
var i = 2

for (var j = 2; j <= 99; j++) {
  while (j < i) {
    if (j % i == 0) break
    i++
  }
  if (j % i != 0) simple.push(j)
}

console.log ('Простые числа: ' + simple)
console.log ('')

// Задание 2
console.log ('Задание 2')

var productName = ['хлеб', 'молоко', 'сыр', 'конфеты', 'сок']
var productPrice = [44, 84, 138, 62, 102]
var cart = []
var cartprice = 0
var command = ''

 while (command != 'к оплате') {
  command = prompt('Добро пожаловать в наш  магазин. Для покупки доступны следующие продукты: 1 - хлеб (44 рубля), 2 - молоко (84 рубля), 3 - сыр (138 рублей), 4 - конфеты (62 рубля), 5 - сок (102 рубля). Что положить в корзину? (Для перехода к оплате введите "к оплате")')
  if (command >= 1 && command <= productName.length) {
    cart.push(productName[command-1])
    console.log ('В корзине: ' + cart)
  } else if (command === 'к оплате') {
    for (let i = 0; i < cart.length; i++) {
      var index2 = productName.indexOf(cart[i])
      cartprice += productPrice[index2]
    }
  } else {
      console.log ('Неверная команда')
  }
}

console.log ('К оплате: ' + cartprice + ' рублей')
console.log ('')

//Задание 3
console.log ('Задание 3')
console.log('')

var a = Math.floor(Math.random() * 8999 + 1000)
var b = +prompt ('Приветствую, игрок! Я загадал число от 1000 до 9999. Сумеешь ли ты угадать его?')
var count = 0;
pow(a, b)

function pow(x, y) {
  count++
  if (x == y) {
    console.log ('Вы угадали! Попыток: ' + count)
  }
  else {
    if (x > y) {
      console.log ('Вы загадали: ' + y + '.Загаданное число больше Вашего. Попробуйте ещё')
    }
    else {
      console.log ('Вы загадали: ' + y + '.Загаданное число меньше Вашего. Попробуйте ещё')
    }
    return pow (x, prompt('Попробуйте ещё'))
  }


console.log ('')
}

//Задание 4
console.log ('Задание 4')
console.log('')

for (let i = 0; i < 10; i = counter(i)) {

}

function counter (x) {
  console.log (x)
  return x + 1
}


console.log ('')


//Задание 5
console.log ('Задание 5')

var x = ''
var row = 20

for (let i = 0; i < row; i++) {
  x = x + 'x'
  console.log (x)
}
