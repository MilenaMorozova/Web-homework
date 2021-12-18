import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    {
      title: 'Картошка с котлеткой',
      time_cooking: "45 минут",
      description: "Очень вкусно!",
      steps: ["Свари картошку", "пожарь котлету"],
      ingredients: []
    },
    {
      title: 'Пельмени',
      time_cooking: "10-15 минут",
      description: "Со сметанкой вкуснее!",
      steps: ["Возьми пельмени", "кинь в кипящую воду и вари 5 миинут", "Добавь соль, перец по вкусу"],
      ingredients: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
