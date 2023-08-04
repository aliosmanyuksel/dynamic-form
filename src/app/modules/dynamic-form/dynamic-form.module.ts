import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormatPipe } from './pipes/format.pipe';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { CheckboxInputComponent } from './components/form-field/checkbox-input/checkbox-input.component';
import { DateInputComponent } from './components/form-field/date-input/date-input.component';
import { DateRangeInputComponent } from './components/form-field/date-range-input/date-range-input.component';
import { ListInputComponent } from './components/form-field/list-input/list-input.component';
import { NumberInputComponent } from './components/form-field/number-input/number-input.component';
import { RadioInputComponent } from './components/form-field/radio-input/radio-input.component';
import { TextAreaInputComponent } from './components/form-field/text-area-input/text-area-input.component';
import { TextInputComponent } from './components/form-field/text-input/text-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

@NgModule({
  declarations: [
    DynamicFieldDirective,
    FormatPipe,
    FormComponent,
    ListComponent,
    CheckboxInputComponent,
    DateInputComponent,
    DateRangeInputComponent,
    ListInputComponent,
    NumberInputComponent,
    RadioInputComponent,
    TextAreaInputComponent,
    TextInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    FormComponent,
    ListComponent
  ]
})
export class DynamicFormModule { }
