import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
  <meal-list [mealList]="meals"></meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Vegan burger", 450, "Best vegan burger in town!"),
      new Meal("Macaroni and Cheese", 750, "I walked home after eating this"),
      new Meal("Doughnut peach", 100, "Small snack before dinner")
    ];
  }
}
