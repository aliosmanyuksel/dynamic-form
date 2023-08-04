import { Component } from '@angular/core';
import { FormsService } from './core/services/forms.service';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './modules/dynamic-form/components/form/form.component';
import { FormFieldConfig } from './modules/dynamic-form/models/general.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private dialog: MatDialog,
    private formsService: FormsService
  ){
    this.formsService.formData.subscribe(res => {
      this.formData = res
    })
    this.formsService.formConfig.subscribe(res => {
      this.formConfig = res
    })
  }

  formData!: any[];
  formConfig!: FormFieldConfig[]

  addNew(){
    let formDialog = this.dialog.open(FormComponent, {
      height: '600px',
      width: '100%',
      data: {
        config: this.formConfig
      }
    })

    formDialog.afterClosed().subscribe(res => {
      if(res) {
        this.formsService.addNew(res.data)
      }
    })
  }
}
