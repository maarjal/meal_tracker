import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';
import { MealInfoComponent } from './meal-info.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealDisplayComponent],
  template: `
  <h2>List of Your Meals</h2>
  <meal-display *ngFor="#meal of mealList" [meal]="meal"></meal-display>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  createMeal(newMeal: Meal): void {
    this.mealList.push(newMeal);
  }
}
