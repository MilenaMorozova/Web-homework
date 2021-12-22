import { Component, OnInit } from '@angular/core';
import { Recipe, recipeBook } from '../bd/recipe_book';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = recipeBook;

  constructor() { }

  ngOnInit(): void { }

}
