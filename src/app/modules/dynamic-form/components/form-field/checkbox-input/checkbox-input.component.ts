import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from '../../../models/general.model';

@Component({
  selector: 'checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
})
export class CheckboxInputComponent implements OnInit {
  field!: FormFieldConfig;
  group!: FormGroup;

  constructor() {}

  ngOnInit() {}
}
