import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";

class CarrylsService {

    constructor(){
        console.log(`hey service`);
    }
//   addValue() {
//     ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
//   }
buy(itemId){
    let item = ProxyState.items.find(i => i.id == itemId)
    if (ProxyState.money >= item.price){
        ProxyState.cart = [...ProxyState.cart, item]
        ProxyState.money-= item.price;} 
    console.log ("cart", ProxyState.cart)
    
}
  
addMoney(){

    ProxyState.money+= 10.00
    console.log(`add`,ProxyState.money)
}
}


export const carrylsService = new CarrylsService();
