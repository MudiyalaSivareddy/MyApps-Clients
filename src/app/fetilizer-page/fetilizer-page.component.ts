import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FetilizersService } from '../services/Fetilizers/fetilizers.service';
import { Fertilizer } from '../shared/models/fetilizer';

@Component({
  selector: 'app-fetilizer-page',
  templateUrl: './fetilizer-page.component.html',
  styleUrls: ['./fetilizer-page.component.css']
})
export class FetilizerPageComponent implements OnInit {
 fetilizers!: Fertilizer;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private fetilizerService:FetilizersService, private cartService:CartService) { 
  activatedRoute.params.subscribe((params)=>{
    if(params.id)
    this.fetilizers=fetilizerService.getFetilizersById(params.id);
  })
}
  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.fetilizers);
    this.router.navigateByUrl('/cart-page');
  }

}
