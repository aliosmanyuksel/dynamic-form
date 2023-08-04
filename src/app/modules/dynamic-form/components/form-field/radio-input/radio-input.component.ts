import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from '../../../models/general.model';

@Component({
  selector: 'radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
})
export class RadioInputComponent implements OnInit {
  field!: FormFieldConfig;
  group!: FormGroup;

  constructor() {}

  ngOnInit() {}
}
