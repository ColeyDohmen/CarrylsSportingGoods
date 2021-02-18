import { generateId } from "../Utils/GenerateId.js"

export default class Item{
    constructor({name,price, description, stock, id = generateId() }){
        this.name=name 
        this.price = price 
        this.description = description
        this.stock = stock
        this.id = id
    }


    get Template(){
        return /*html*/`
        <h4 class="card-title">${this.name} ${this.price}</h4>
        <p>Description: ${this.description}</p>
        <p>Stock: ${this.stock}</p>
        <button class="btn btn-primary" onclick="app.carrylsController.buy('${this.id}')">BUY</button>
        </div>
        `
    }


}