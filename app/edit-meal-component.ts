import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form">
    <h3>Edit Meal Information:</h3>
    <input [(ngModel)]="meal.name" class="meal-form"/>
    <input [(ngModel)]="meal.calories" class="meal-form"/>
    <textarea [(ngModel)]="meal.details" class="meal-form"></textarea>
  </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
