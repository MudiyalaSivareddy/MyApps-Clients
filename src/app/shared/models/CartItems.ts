import { Fertilizer } from "./fetilizer";

export class CartItem{
    fetilizers: Fertilizer;
    constructor(fetilizer:Fertilizer){
      this.fetilizers = fetilizer;  
    }
    
    quantity:number = 1;

    get price():number{
        return this.fetilizers.price * this.quantity;
    }
}