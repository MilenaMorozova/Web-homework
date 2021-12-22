import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/service/recipe_service';
import { ShopCartService } from 'src/service/shop_cart_service';
import { Recipe } from '../bd/recipe_book';
import { ShopCartItem } from '../bd/shop-cart';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  recipe!: Recipe;

  constructor(private recipeService: RecipeService, private shopCartService: ShopCartService) {  }

  ngOnInit(): void {
    this.recipeService.recipeChanged.subscribe((recipe) => this.recipe=recipe);
  }

  addIngredientsToShopCart() {
    for (let ingredient of this.recipe.ingredients) {
      let shopCartItem: ShopCartItem = {
        name: ingredient.name,
        count: ingredient.count
      }
      this.shopCartService.updateShopCart(shopCartItem);
    }
  }

}
