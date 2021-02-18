import { ProxyState } from "../AppState.js";
import { carrylsService } from "../Services/CarrylsService.js";



//Private

function _drawMoney() {
    document.getElementById("total").innerText = ProxyState.money.toString();
}
function _draw() {
  let items = ProxyState.items;
  let template = ''
  items.forEach(i => template += i.Template)
  document.getElementById("item").innerHTML = template
}

//Public
export default class CarrylsController {
  constructor() {
    ProxyState.on("money", _drawMoney);
    _draw()
        console.log(`hey controller`);
  }

//   addValue() {
//     carrylsService.addValue()
//   }

  addMoney(){
    carrylsService.addMoney()
  }

  create(event){
      event.preventDefault()

  }
  buy(itemId){
      carrylsService.buy(itemId)
  }

}
