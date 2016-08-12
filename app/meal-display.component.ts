import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [NewMealComponent],
  template: `
  <h3>{{ meal.name }}</h3>
  <p>{{ meal.calories }}</p>
  <p>{{ meal.details }}</p>
  `
})

export class MealDisplayComponent {
  public meal: Meal;

}
