import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItems';
import { Fertilizer } from 'src/app/shared/models/fetilizer';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  constructor() { }
  addToCart(fetilizer: Fertilizer):void{
    let cartItem = this.cart.items.find(item => item.fetilizers.id === fetilizer.id);
    if(cartItem){
      this.changeQuantity(fetilizer.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(fetilizer));
    
  }
  
  removeFromCart(fetilizerId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.fetilizers.id != fetilizerId);
  }
  changeQuantity(fetilizerId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.fetilizers.id === fetilizerId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
