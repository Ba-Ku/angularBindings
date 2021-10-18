import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMandatory]'
})
export class MandatoryDirective {

  constructor() {
  }

  @Input('appMandatory') minLengthForHeightOrWeightInput = 2;

  @HostBinding('style.backgroundColor') inputBackground: string;

  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent) {
    const inputElement = event.target as HTMLInputElement;
    const inputElementLength = inputElement.value.trim().length;
    if (inputElementLength < this.minLengthForHeightOrWeightInput) {
      this.inputBackground = "red";
    } else {
      this.inputBackground = null;
    }
  }

}
