import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredigent.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Puff Pastry', 1),
    new Ingredient('Ground Beef', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

  onAdded(newIngredient:{amount:number, name: string}){
    this.ingredients.push(new Ingredient(newIngredient.name, newIngredient.amount));
  }
}
