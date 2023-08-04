import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from '../../../models/general.model';

@Component({
  selector: 'date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements OnInit {
  field!: FormFieldConfig;
  group!: FormGroup;

  constructor() {}

  ngOnInit() {}
}
