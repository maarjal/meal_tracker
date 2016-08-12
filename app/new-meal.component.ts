import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Log a New Meal</h3>
    <form class="newMeal">
      <input placeholder="Enter meal"
      #newMeal>
      <input placeholder="Amount of Calories"
      #mealCalories>
      <input placeholder="Details"
      #mealDetails>
      <button (click)="addMeal(newMeal, mealCalories, mealDetails)">Submit</button>
    </form>
  </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newMeal: HTMLInputElement, mealCalories: HTMLInputElement, mealDetails: HTMLInputElement) {
    var inputValues = [newMeal.value, mealCalories.value, mealDetails.value];
    this.onSubmitNewMeal.emit(inputValues);
    console.log(inputValues);
    newMeal.value = "";
    mealCalories.value = "";
    mealDetails.value = "";
  }
}
