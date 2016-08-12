import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealInfoComponent } from './meal-info.component';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [MealInfoComponent, NewMealComponent],
  template: `
  <h3>{{ meal.name }}</h3>
  <h3>{{ meal.calories }}</h3>
  <h3>{{ meal.details }}</h3>
  `
})

export class MealDisplayComponent {
  public meal: Meal;

}
