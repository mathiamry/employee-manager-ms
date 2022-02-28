export interface IDepartment {
  id?: number;
  name?: string | null;
  address?: string | null;
}

export class Department implements IDepartment {
  constructor(public id?: number, public name?: string | null, public address?: string | null) {}
}

export function getDepartmentIdentifier(department: IDepartment): number | undefined {
  return department.id;
}
