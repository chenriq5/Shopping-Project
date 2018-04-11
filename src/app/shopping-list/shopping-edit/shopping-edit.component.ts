import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredigent.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output()addIngredient = new EventEmitter<Ingredient>();
  @ViewChild('amountInput') amountInput:ElementRef;
  @ViewChild('nameInput') nameInput:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(){
    this.addIngredient.emit({
      amount:this.amountInput.nativeElement.value,
      name: this.nameInput.nativeElement.value
    });
  }

}
