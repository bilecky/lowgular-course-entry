import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {EmployeeFormComponent} from './employee-form.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [ReactiveFormsModule, BrowserModule],
  declarations: [EmployeeFormComponent],
  providers: [],
  exports: [EmployeeFormComponent]
})
export class EmployeeFormComponentModule {
}
