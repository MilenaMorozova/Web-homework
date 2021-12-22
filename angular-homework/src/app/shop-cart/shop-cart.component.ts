import { Component, OnInit } from '@angular/core';
import { ShopCartService } from 'src/service/shop_cart_service';
import { ShopCartItem } from '../bd/shop-cart';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  isExpanded: boolean = false;

  constructor(private shopCartService: ShopCartService) { }

  ngOnInit(): void { }

  changeExpandFlag() {
    this.isExpanded = !this.isExpanded;
  }

  getAllItem(): ShopCartItem[] {
    return this.shopCartService.getShopCart();
  }

}
