import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Haitian Meal", "How to make rice and beans, the basic Haitian meal", "../../../../images/rice-and-beans.jpg"),
    new Recipe("Haitian Boulette (meatball)", "How to make Haitian meatballs", "../../../../images/meat-balls.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
