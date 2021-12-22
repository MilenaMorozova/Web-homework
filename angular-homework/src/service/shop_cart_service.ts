import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ShopCartItem } from "src/app/bd/shop-cart";

@Injectable({
    providedIn: 'root'
})
export class ShopCartService {
    private shopCartSubject = new BehaviorSubject<ShopCartItem[]>([]);
    shopCartChanged = this.shopCartSubject.asObservable()

    constructor () {}

    updateShopCart(shopItem: ShopCartItem) {
        let shopCart = this.getShopCart();
        for (let item of shopCart) {
            if (item.name == shopItem.name) {
                item.count += shopItem.count;
                this.shopCartSubject.next(shopCart);
                return;
            }
        }
        shopCart.push(shopItem);
        this.shopCartSubject.next(shopCart);
    }

    getShopCart(): ShopCartItem[] {
        return this.shopCartSubject.getValue();
    }

}