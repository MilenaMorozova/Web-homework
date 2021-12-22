import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/service/recipe_service';
import { ShopCartService } from 'src/service/shop_cart_service';
import { Recipe } from '../bd/recipe_book';
import { ShopCartItem } from '../bd/shop-cart';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit, OnDestroy {

  recipe!: Recipe;
  recipeServiceSubscription: Subscription | undefined;

  constructor(private recipeService: RecipeService, private shopCartService: ShopCartService) {  }

  ngOnDestroy(): void {
    this.recipeServiceSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.recipeServiceSubscription = this.recipeService.recipeChanged.subscribe((recipe) => this.recipe=recipe);
  }

  addIngredientsToShopCart() {
    for (let ingredient of this.recipe.ingredients) {
      let shopCartItem: ShopCartItem = {
        name: ingredient.name,
        count: ingredient.count
      }
      this.shopCartService.addToShopCart(shopCartItem);
    }
  }

}
