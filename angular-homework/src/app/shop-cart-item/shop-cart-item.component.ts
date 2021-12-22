import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShopCartService } from 'src/service/shop_cart_service';
import { ShopCartItem } from '../bd/shop-cart';

@Component({
  selector: 'app-shop-cart-item',
  templateUrl: './shop-cart-item.component.html',
  styleUrls: ['./shop-cart-item.component.css']
})
export class ShopCartItemComponent implements OnInit {

  @Input()
  shopCartItem!: ShopCartItem;
  countForm: FormGroup;

  constructor(private shopCartService: ShopCartService) {
    this.countForm = new FormGroup( {
      count: new FormControl(0)
    });
   }

  ngOnInit(): void {
      this.countForm.get("count")?.setValue(this.shopCartItem.count);
    
      this.countForm.get("count")?.valueChanges.subscribe((count) => {
        this.shopCartService.updateCountShopCartItem(this.shopCartItem.name, count);
      });
   }

   deleteThis() {
     this.shopCartService.deleteShopCartItem(this.shopCartItem);
   }
}
