import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmployeeModel} from '../../model/employee.model';
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-faces',
  templateUrl: './employee-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFacesComponent {
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll()

  constructor(private _employeeService: EmployeeService) {
  };
}

// export class EmployeeFacesComponent {
//   constructor(private _httpClient: HttpClient) {}
//
//   data$: Observable<EmployeeModel[] | null> = this._httpClient.get<
//     EmployeeModel[]
//     >('assets/data/employees.json');
// }
