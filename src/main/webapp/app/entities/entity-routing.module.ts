import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'department',
        data: { pageTitle: 'employeeManagerMsApp.employeeManagerMsDepartment.home.title' },
        loadChildren: () => import('./employeeManagerMS/department/department.module').then(m => m.EmployeeManagerMsDepartmentModule),
      },
      {
        path: 'employee',
        data: { pageTitle: 'employeeManagerMsApp.employeeManagerMsEmployee.home.title' },
        loadChildren: () => import('./employeeManagerMS/employee/employee.module').then(m => m.EmployeeManagerMsEmployeeModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
