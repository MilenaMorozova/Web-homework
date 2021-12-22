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

    addToShopCart(shopItem: ShopCartItem) {
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

    updateCountShopCartItem(name: string, count: number) {
        let shopCart = this.getShopCart();
        for (let item of shopCart) {
            if (item.name == name) {
                item.count = count;
                this.shopCartSubject.next(shopCart);
                return;
            }
        }
        console.log(this.getShopCart());
    }

    getShopCart(): ShopCartItem[] {
        return this.shopCartSubject.getValue();
    }

    deleteShopCartItem(shopItem: ShopCartItem) {
        let shopCartWithoutItem = this.getShopCart().filter((item) => item.name != shopItem.name);
        this.shopCartSubject.next(shopCartWithoutItem);
    }

}