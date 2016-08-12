import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
    <h3>Edit Meal Name: {{ meal.name }}</h3>
    <input [(ngModel)]="meal.name" class="meal-form"/>
    <h3>Edit Amout on Calories: {{ meal.calories }}</h3>
    <input [(ngModel)]="meal.calories" class="meal-form"/>
    <h3>Edit Details: {{ meal.details }}</h3>
    <input [(ngModel)]="meal.details" class="meal-form"/>
  </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
