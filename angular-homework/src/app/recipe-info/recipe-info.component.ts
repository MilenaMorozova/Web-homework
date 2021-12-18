import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  recipe!: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
