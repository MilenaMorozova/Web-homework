import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Recipe, recipeBook } from "../app/bd/recipe_book";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    
    private recipeSubject = new BehaviorSubject<Recipe>(recipeBook[0]) 
    recipeChanged = this.recipeSubject.asObservable()

    constructor () {}

    updateSelectedRecipe(recipe: Recipe) {
        this.recipeSubject.next(recipe);
    }

    getSelectedRecipe(): Recipe {
        return this.recipeSubject.getValue();
    }

}