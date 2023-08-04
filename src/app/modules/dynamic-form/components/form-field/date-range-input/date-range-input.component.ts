import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from '../../../models/general.model';

@Component({
  selector: 'date-range-input',
  templateUrl: './date-range-input.component.html',
  styleUrls: ['./date-range-input.component.scss'],
})
export class DateRangeInputComponent implements OnInit {
  field!: FormFieldConfig;
  group!: FormGroup;

  constructor() {}

  ngOnInit() {}
}
