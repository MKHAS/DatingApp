import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() type = 'text';

  constructor(
    @Self() public ngControl: NgControl
    // this makes sure that angular doesn't wrap this injector
  ) {
    this.ngControl.valueAccessor = this;
    // by adding 'this' we now have access to our control inside this component when we use it inside our register form
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}
}
