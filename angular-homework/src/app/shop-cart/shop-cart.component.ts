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
  newItemForm : any = {
    name: ''
  }

  constructor(private shopCartService: ShopCartService) { }

  ngOnInit(): void { }

  changeExpandFlag() {
    this.isExpanded = !this.isExpanded;
  }

  getAllItem(): ShopCartItem[] {
    return this.shopCartService.getShopCart();
  }

  createNewShopItem() {
    if (this.newItemForm.name == ''){
      return;
    }

    let newShopItem: ShopCartItem = {
      name: this.newItemForm.name,
      count: 1
    };
    this.shopCartService.addToShopCart(newShopItem);
    this.newItemForm.name = '';
  }
}
