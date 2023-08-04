import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from '../../../models/general.model';
import { FormsService } from '../../../../../core/services/forms.service';

@Component({
  selector: 'list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.scss'],
})
export class ListInputComponent implements OnInit {
  field!: FormFieldConfig;
  group!: FormGroup;

  constructor(private formService: FormsService) {}

  checkAccess(): boolean {
    return this.formService.checkAccess(this.field);
  }

  ngOnInit() {}
}
