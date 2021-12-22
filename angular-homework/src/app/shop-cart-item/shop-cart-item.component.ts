import { Component, Input, OnInit } from '@angular/core';
import { ShopCartItem } from '../bd/shop-cart';

@Component({
  selector: 'app-shop-cart-item',
  templateUrl: './shop-cart-item.component.html',
  styleUrls: ['./shop-cart-item.component.css']
})
export class ShopCartItemComponent implements OnInit {

  @Input()
  shopCartItem!: ShopCartItem;

  constructor() { }

  ngOnInit(): void { }

}
