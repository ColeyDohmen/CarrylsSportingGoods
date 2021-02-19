import Item from "./Models/Carryls.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  money = 0

  items = [new Item({name:"flashlight", price: 10 ,description: "Lights up", stock: 3}),
  new Item({name:"marshmallows", price:2 ,description: "Marshing it up", stock: 50}),
]

cart = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
