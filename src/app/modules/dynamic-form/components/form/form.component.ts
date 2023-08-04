import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormFieldConfig } from '../../models/general.model';
import { FormsService } from '../../../../core/services/forms.service';

interface DialogData {
  config: FormFieldConfig[],
  formData: {[key: string]: string}
}

@Component({
  selector: 'app-form',
  exportAs: 'dynamicForm',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  fields!: FormFieldConfig[];
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formService: FormsService
  ) {
    if (data.formData) {
      this.fields = data.config;
      this.fields.forEach(field => field.value = data.formData[field.fieldName])
      this.form = this.createControl();
    } else {
      this.fields = data.config;
      this.form = this.createControl();
    }
  }

  ngOnInit() {
    this.sortFields();
  }

  sortFields() {
    this.fields.map(item => item.order ? item : {...item, order: -1});
    return this.fields.sort((a, b) => a.order! > b.order! ? 1 : a.order === b.order ? 0 : -1);
  }

  onSubmit($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    if (this.form.valid) {
      const formData = this.form.value;
      // Trigger before submit services for each field
      this.fields.forEach((field: any) => {
        if (field.beforeSubmitService && typeof field.beforeSubmitService === 'function') {
          field.beforeSubmitService(formData[field.fieldName]);
        }
      });

      // Trigger after submit services for each field
      this.fields.forEach((field: any) => {
        if (field.afterSubmitService && typeof field.afterSubmitService === 'function') {
          field.afterSubmitService(formData[field.fieldName]);
        }
      });

      this.dialogRef.close({
        data: this.form.value,
        index: this.data.formData?.['index']
      });
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createControl() {
    let formControls: {[key: string]: FormControl} = {};
    this.fields.forEach((field) => {
      const control = new FormControl(field.value);
      if (field.validation) control.addValidators(Validators.pattern(field.validation));
      if (field.mandatory) control.addValidators(Validators.required);
      if (this.formService.checkAccess(field)) control.disable();

      formControls[field.fieldName] = control;
    });
    const formGroup: FormGroup = new FormGroup(formControls);
    return formGroup;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control!.markAsTouched({ onlySelf: true });
    });
  }
}
