import { EmployeeReferenceTypes } from "../enums/employee-reference-types.enum";

export class EmployeeReference{
    referenceType: EmployeeReferenceTypes = EmployeeReferenceTypes.primaryFamily;
    name: string = '';
    relationship: string = '';
    contactNumber: string = '';
}
