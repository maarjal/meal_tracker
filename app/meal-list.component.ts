import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';
import { MealInfoComponent } from './meal-info.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [CaloriesPipe],
  directives: [MealDisplayComponent, NewMealComponent],
  template: `
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  <select (change)="onChange($event.target.value)">
    <option selected="selected" value="all">View All</option>
    <option value="high">High Calorie Meals</option>
    <option value="low">Low Calorie Meals</option>
  </select>
  <h2>List of Your Meals</h2>
  <meal-display *ngFor="#meal of mealList | calories:filterCalories" [meal]="meal"></meal-display>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public filterCalories: string = "all";
  createMeal(newMeal: Meal): void {
    this.mealList.push(newMeal);
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
