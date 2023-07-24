import { EmployeeAddress } from "./employee-address.model";
import { EmployeeBankAccount } from "./employee-bank-account.model";
import { EmployeeReference } from "./employee-reference.model";

export class EmployeeAttribute{
    employee_Id: string = '';
    employeeName: string = '';
    panNumber: string = '';
    adhaarNumber: string = '';
    primaryContactNumber: string = '';
    secondaryContactNumber: string = '';
    officialContactNumber: string = '';
    personalEmailID: string= '';
    officialEmailID: string= '';
    addresses: EmployeeAddress[];
    nomineeName: string = '';
    nomineeRelation: string = '';
    nomineeSignature: string = '';
    amountToNomineeInRs: string = '';
    referenceList: EmployeeReference[];
    bankAccountDetails: EmployeeBankAccount[];
    designation: string = '';
    responsibilities: string = '';
    workStartTime: string = '';
    workEndTime: string = '';
    joiningDate: string = '';
    isDeleted: boolean = false;    
    createdBy: string = '';
    constructor(){
        this.addresses = [];
        this.referenceList = [];
        this.bankAccountDetails = [];
    }
}