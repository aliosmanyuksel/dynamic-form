import { Directive, Input, OnInit, ViewContainerRef, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from '../models/general.model';
import { TextInputComponent } from '../components/form-field/text-input/text-input.component';
import { NumberInputComponent } from '../components/form-field/number-input/number-input.component';
import { TextAreaInputComponent } from '../components/form-field/text-area-input/text-area-input.component';
import { DateInputComponent } from '../components/form-field/date-input/date-input.component';
import { DateRangeInputComponent } from '../components/form-field/date-range-input/date-range-input.component';
import { ListInputComponent } from '../components/form-field/list-input/list-input.component';
import { RadioInputComponent } from '../components/form-field/radio-input/radio-input.component';
import { CheckboxInputComponent } from '../components/form-field/checkbox-input/checkbox-input.component';

const componentMapper: { [key: string]: any } = {
  'text': TextInputComponent,
  'number': NumberInputComponent,
  'textarea': TextAreaInputComponent,
  'date': DateInputComponent,
  'daterange': DateRangeInputComponent,
  'list': ListInputComponent,
  'radio': RadioInputComponent,
  'checkbox': CheckboxInputComponent,
};

@Directive({
  selector: '[appDynamicField]',
})
export class DynamicFieldDirective implements OnInit {
  @Input() field!: FormFieldConfig;
  @Input() group!: FormGroup;
  componentRef!: ComponentRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.componentRef = this.viewContainerRef.createComponent(componentMapper[this.field.type]);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
