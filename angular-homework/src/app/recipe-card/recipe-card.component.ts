import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/service/recipe_service';
import { Recipe } from '../bd/recipe_book';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input()
  recipe!: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void { }

  selected() {
    this.recipeService.updateSelectedRecipe(this.recipe);
  }

}
