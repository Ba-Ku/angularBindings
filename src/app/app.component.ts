import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>{{title}}</h3>
    <label>Enter your height please:
      <input [(ngModel)]="height" (input)="clearBMI()" appMandatory="2"> cm
    </label>
    <br>
    <label>Enter your weight please:
      <input [(ngModel)]="weight" (input)="clearBMI()" appMandatory="2"> cm
    </label>
    <br><br>
    <button (click)="calculateBMI()" alt="a button to calculate the bmi.">Calculate BMI</button>
    <br><br>
    <div *ngIf="bmi">
      <h2>Your BMI is: {{bmi | number: '.2-2'}}</h2>
      <img [src]="picture" [alt]="altText">
    </div>
  `,
  styles: []
})
export class AppComponent {
  title: string = 'Welcome! Calculate your BodyMassIndex.';
  height: number = 0;
  weight: number = 0;
  bmi: number = 0;
  picture: string;
  altText: string;

  calculateBMI(): void {
    let newBmi: number = this.weight / (this.height / 100) ** 2;
    this.bmi = newBmi;
    if (this.bmi <= 20) {
      this.picture = "assets/giraffe.jpg";
      this.altText='A picture showing a giraffe.';
    } else if (this.bmi <= 26) {
      this.picture = "assets/horse.jpg";
      this.altText='A picture showing a horse.';
    } else {
      this.picture = "assets/elephant.jpg";
      this.altText='A picture showing an elephant.';
    }
  }

  clearBMI(): void {
    this.bmi = 0;
  }
}
