import dayjs from 'dayjs/esm';
import { IDepartment } from 'app/entities/employeeManagerMS/department/department.model';

export interface IEmployee {
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  dateOfHiring?: dayjs.Dayjs | null;
  salary?: number | null;
  department?: IDepartment | null;
}

export class Employee implements IEmployee {
  constructor(
    public id?: number,
    public firstName?: string | null,
    public lastName?: string | null,
    public dateOfHiring?: dayjs.Dayjs | null,
    public salary?: number | null,
    public department?: IDepartment | null
  ) {}
}

export function getEmployeeIdentifier(employee: IEmployee): number | undefined {
  return employee.id;
}
