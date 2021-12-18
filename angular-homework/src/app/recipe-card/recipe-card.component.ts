import { Component, Input, OnInit } from '@angular/core';

export interface Recipe{
  title: string;
  time_cooking: string;
  description: string;
  steps: string[];
  ingredients: [];
}

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'
]
})
export class RecipeCardComponent implements OnInit {

  @Input()
  recipe!: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
