import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {EmployeeService} from '../../services/employee.service';
import {CreateEmployeeModel} from '../../model/create-employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEmployeeComponent {
  readonly addEmployeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0), Validators.required]),
    salary: new FormControl(null, [Validators.min(0), Validators.required])
  });

  constructor(private _employeeService: EmployeeService, private _httpClient: HttpClient) {
  }

  onAddEmployeeFormSubmitted(addEmployeeForm: CreateEmployeeModel) {
    return this._employeeService.create({
      name: addEmployeeForm.name,
      age: addEmployeeForm.age,
      salary: addEmployeeForm.salary
    }).subscribe(() => {
      alert(`User was successfully added to the database. Email: ${addEmployeeForm.name}, age: ${addEmployeeForm.age}, salary: ${addEmployeeForm.salary} `);
    })

  }

  resetForm() {
    this.addEmployeeForm.reset()
  }
}

