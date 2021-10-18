import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>{{title}}</h3>
    <label>Enter your height please:
      <input [(ngModel)]="height"> cm
    </label>
    <br>
    <label>Enter your weight please:
      <input [(ngModel)]="weight"> cm
    </label>
    <br><br>
    <button (click)="calculateBMI()">Calculate BMI</button>
    <br><br>
    <div>Your BMI is: {{bmi}}</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Welcome! Calculate your BodyMassIndex.';
  height = 0;
  weight = 0;
  bmi = 0;

  calculateBMI(): void {
    let newBmi: number = this.weight / (this.height / 100) ** 2;
    this.bmi = newBmi;
  }
}
