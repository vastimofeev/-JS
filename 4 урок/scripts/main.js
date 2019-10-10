// Задание 1


var a = +prompt ('Введите число от 0 до 999')

if (a>=0 && a<=999) {
  var aObj = {
    'единицы': units(a),
    'десятки': tens(a),
    'сотни': hundred(a),
  }

  function hundred(x) {
    return Math.floor(x/100)
  }
  function tens(x) {
    return Math.floor(x/10) - (Math.floor(x/100)*10)
  }
  function units(x){
    return x - (Math.floor(x/10)*10)
  }

} else console.log ('Число вне диапазона')


console.log (aObj)
console.log ('')

// Задание 2
console.log ('Задание 2')

const NAMES = ['Хлеб','Молоко','Печенье','Мороженное','Шоколадка','Сыр','Колбаса','Вода']
const PRICES = [44,84,120,52,60,150,165,30]

let store = {
  products: [],
  cart: [],
  summ: 0,

  createDTO: function() {
    for (let i = 0; i < NAMES.length ; i++) {
      this.products.push (this._createProduct(i+1,NAMES[i],PRICES[i]))
    }
    console.log ('В магазине доступны следующие команды: inCart(id) - для добавления товара (по id или названию) в корзину, clear - для сброса корзины')
  },

  inCart: function(id) {
    let fail = true
    for (let el in this.products) {
      if (this.products[el].id === id) {
        this.cart.push(this.products[el])
        console.log ('Вы положили в корзину ' + this.products[el].name)
        this._addSumm()
        fail = false
      }
    }
    for (let el in this.products) {
      if (this.products[el].name === id) {
        this.cart.push(this.products[el])
        console.log ('Вы положили в корзину ' + this.products[el].name)
        this._addSumm()
        fail = false
      }
    }
    if (fail) console.log ('Неверно введен id или название товара')

  },

  clear: function() {
    this.cart = []
    this.summ = 0
    console.log ('Ваша корзина очищена')
  },

  _createProduct: function(id,name,price) {
    return {
      id: id,
      name: name,
      price: price
    }
  },

  _addSumm: function() {
    for (let el in this.cart) {
      this.summ += this.cart[el].price
    }
    console.log ('Стоимость товаров в корзине: ' + this.summ)
  }

}

store.createDTO()
