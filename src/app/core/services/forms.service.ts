import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormFieldConfig, UserInfo } from '../../modules/dynamic-form/models/general.model';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  private listItems: any[] = [];
  private user: UserInfo = {
    username: 'alios',
    access: ['create', 'delete', 'view', 'edit'],
  };
  public formData = new BehaviorSubject<any[]>(this.listItems);
  public formConfig = new BehaviorSubject<FormFieldConfig[]>([
    {
      fieldName: 'name',
      displayName: 'Name',
      type: 'text',
      mandatory: true,
      beforeSubmitService: (value: any) => {
        console.log(`Before submit for 'name' field. Value: ${value}`);
        // Add your logic here for the service call before form submission
      },
      afterSubmitService: (value: any) => {
        console.log(`After submit for 'name' field. Value: ${value}`);
        // Add your logic here for the service call after form submission
      },
      order: 1
    },
    {
      fieldName: 'phone',
      displayName: 'Phone Number',
      type: 'text',
      mandatory: true,
      validation: '^\\+?\\d{0,2}\\s?[.-]?\\d{3}\\s?[.-]?\\d{3}\\s?[.-]?\\d{4}$',
      description: 'Please enter a 10-digit number',
      format: 'dashSeparated',
      order: 0
    },
    {
      fieldName: 'age',
      displayName: 'Age',
      type: 'number',
      order: 4
    },
    {
      fieldName: 'dob',
      displayName: 'Date of Birth',
      type: 'date',
      description: 'please enter a valid date',
      order: 2
    },
    {
      fieldName: 'dor',
      displayName: 'Date of Registration',
      type: 'date',
      value: new Date(),
      access: ['view'],
      order: 3
    },
    {
      fieldName: 'marital',
      displayName: 'Marital Status',
      type: 'radio',
      options: ['Single', 'Married', 'Rather not to say'],
      order: 6
    },
    {
      fieldName: 'email',
      displayName: 'Email',
      type: 'text',
      mandatory: true,
      validation: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      order: 7
    },
    {
      fieldName: 'newsletter',
      displayName: 'Subscribe to Newsletter',
      type: 'checkbox',
      mandatory: true,
      order: 5
    },
  ]);

  constructor() {}

  initializeFormConfig(config: FormFieldConfig[]): void {
    this.formConfig.next(config);
  }

  addNew(newData: any): void {
    this.listItems.push(newData);
    this.formData.next(this.listItems);
  }

  deleteRow(index: number): void {
    this.listItems.splice(index, 1);
    this.formData.next(this.listItems);
  }

  updateRow(index: number, newData: any): void {
    this.listItems[index] = newData;
    this.formData.next(this.listItems);
  }

  checkAccess(field: FormFieldConfig): boolean {
    if (field.access?.includes('view') && !field.access?.includes('create')) {
      return true;
    } else return false;
  }

  isAllowedToEdit(): boolean {
    if (this.user.access?.includes('edit')) {
      return true;
    } else return false;
  }

  isAllowedToDelete(): boolean {
    if (this.user.access?.includes('delete')) {
      return true;
    } else return false;
  }

  afterSubmitService(formData: any): void {
    console.log('After Submit:', formData);
  }

}
