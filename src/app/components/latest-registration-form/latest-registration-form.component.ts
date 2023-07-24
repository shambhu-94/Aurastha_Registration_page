import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AddressType } from 'src/app/enums/address-type.enum';
import { EmployeeReferenceTypes } from 'src/app/enums/employee-reference-types.enum';
import { EmployeeAddress } from 'src/app/models/employee-address.model';
import { EmployeeAttribute } from 'src/app/models/employee-attribute.model';
import { EmployeeBankAccount } from 'src/app/models/employee-bank-account.model';
import { EmployeeReference } from 'src/app/models/employee-reference.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-latest-registration-form',
  templateUrl: './latest-registration-form.component.html',
  styleUrls: ['./latest-registration-form.component.css']
})
export class LatestRegistrationFormComponent implements OnInit {

  employeeInfo = new EmployeeAttribute;
  constructor(private formBuilder: FormBuilder, private authService:AuthService){  }

  ngOnInit(): void {
    this.authService.getEmployees().subscribe((res: any) =>{console.log(res)});
  }

  registerForm = new FormGroup({
    employee_Id: new FormControl(''),
    employeeName: new FormControl(''),
    addresses: this.formBuilder.group({    
      addressType: [""],
      address: [""],
      city: [""],
      postalCode: [""]}),
    panNumber: new FormControl(''),
    adhaarNumber: new FormControl(''),
    primaryContactNumber: new FormControl(''),
    secondaryContactNumber: new FormControl(''),
    officialContactNumber: new FormControl(''),
    personalEmailID: new FormControl(''),
    officialEmailID: new FormControl(''),
    nomineeName: new FormControl(''),
    nomineeRelation: new FormControl(''),
    nomineeSignature: new FormControl(''),
    amountToNomineeInRs: new FormControl(''),
    designation: new FormControl(''),
    responsibilities: new FormControl(''),
    workStartTime: new FormControl(''),
    workEndTime: new FormControl(''),
    joiningDate: new FormControl(''),
    isDeleted: new FormControl('true'),
    createdBy: new FormControl(''),
    createdDate: new FormControl(''),
    referenceList: this.formBuilder.group({
      referenceTypes: [""],
      name: [""],
      relationship: [""],
      contactNumber: [""],
    }),
    bankAccountDetails: this.formBuilder.group({
      bankName: [""],
      AccountNumber: [""],
      ifscCode: [""],
    }),
    addressType: new FormControl(""),
    address: new FormControl(""),
    city: new FormControl(""),
    postalCode: new FormControl(""),
    referenceTypes: new FormControl(""),
    name: new FormControl(""),
    relationship: new FormControl(""),
    contactNumber: new FormControl(""),
    bankName: new FormControl(""),
    accountNumber: new FormControl(""),
    ifscCode: new FormControl(""),

  });


  
  register(){
    //this.preview = JSON.stringify(this.registerForm.get("Employee_Id")?.value);
    console.log("u r in console" ,this.registerForm.value);
    console.log("u r in console without values" ,this.registerForm);
    const formValues = this.registerForm.value;
    console.log(formValues);
    const data = {
      Employee_Id: formValues.employee_Id,
      EmployeeName: formValues.employeeName,
      PANNumber: formValues.panNumber,
      AdhaarNumber: formValues.adhaarNumber,
      PrimaryContactNumber: formValues.primaryContactNumber,
      SecondaryContactNumber: formValues.secondaryContactNumber,
      OfficialContactNumber: formValues.officialContactNumber,
      PersonalEmailID: formValues.personalEmailID,
      OfficialEmailID: formValues.officialEmailID,
      Addresses: {
        AddressType: formValues.addresses?.addressType,
        Address:formValues.addresses?.address,
        City:formValues.addresses?.city,
        PostalCode:formValues.addresses?.postalCode,
      },
      NomineeName:formValues.nomineeName,
      NomineeRelation: formValues.nomineeRelation,
      NomineeSignature: formValues.nomineeSignature,
      AmountToNomineeInRs: formValues.amountToNomineeInRs,
      Designation: formValues.designation,
      Responsibilities: formValues.responsibilities,
      WorkStartTime: formValues.workStartTime,
      WorkEndTime: formValues.workEndTime,
      JoiningDate: formValues.joiningDate,
      CreatedDate: formValues.createdDate,
      CreatedBy: formValues.createdBy,
      ReferenceList: {
        ReferenceTypes: formValues.referenceList?.referenceTypes,
        Name: formValues.referenceList?.name,
        Relationship: formValues.referenceList?.relationship,
        ContactNumber: formValues.referenceList?.contactNumber,
      },
      BankAccountDetails: {
        BankName:formValues.bankAccountDetails?.bankName,
        AccountNumber:formValues.bankAccountDetails?.AccountNumber,
        IFSCCode:formValues.bankAccountDetails?.ifscCode,
      }

    }


console.log("data: ",data);

   /* this.authService.registerEmployee(data).subscribe((res: any) =>{
        console.log(res);
      })*/

  }
  

  addEmployee(){
    //Employee object creation
    const formValues = this.registerForm.value;

    this.employeeInfo.createdBy = formValues.createdBy as string;
    this.employeeInfo.employee_Id = formValues.employee_Id as string;
    this.employeeInfo.employeeName = formValues.employeeName as string;
    this.employeeInfo.panNumber = formValues.panNumber as string;
    this.employeeInfo.adhaarNumber =formValues.adhaarNumber as string;
    this.employeeInfo.primaryContactNumber = formValues.primaryContactNumber as string;
    this.employeeInfo.secondaryContactNumber = formValues.secondaryContactNumber as string;
    this.employeeInfo.officialContactNumber = formValues.officialContactNumber as string;
    this.employeeInfo.personalEmailID = formValues.personalEmailID as string;
    this.employeeInfo.officialEmailID = formValues.officialEmailID as string;  
    let currentAddress = new EmployeeAddress();
    currentAddress.address = 'address';
    currentAddress.city = 'city';
    currentAddress.postalCode = 'postalCode';
    currentAddress.addressType = AddressType.currentAddress;   
    let permanentAddress = new EmployeeAddress();
    permanentAddress.address = 'address';
    permanentAddress.city = 'city';
    permanentAddress.postalCode = 'postalCode';
    permanentAddress.addressType = AddressType.permanentAddress; 
    this.employeeInfo.addresses.push(currentAddress);
    this.employeeInfo.addresses.push(permanentAddress);
    this.employeeInfo.nomineeName = formValues.nomineeName as string;
    this.employeeInfo.nomineeRelation = formValues.nomineeRelation as string;
    this.employeeInfo.nomineeSignature = formValues.nomineeSignature as string;
    this.employeeInfo.amountToNomineeInRs = formValues.amountToNomineeInRs as string;   
    let reference = new EmployeeReference();
    reference.contactNumber = formValues.contactNumber as string;
    reference.name = formValues.referenceTypes as string;
    reference.referenceType = EmployeeReferenceTypes.primaryFamily;
    reference.relationship = formValues.relationship as string;
    this.employeeInfo.referenceList.push(reference);
    let bankAccount = new EmployeeBankAccount();
    bankAccount.accountNumber = formValues.bankAccountDetails?.AccountNumber as string;
    bankAccount.bankName = formValues.bankAccountDetails?.bankName as string;
    bankAccount.ifscCode = formValues.bankAccountDetails?.ifscCode as string;
    this.employeeInfo.bankAccountDetails.push(bankAccount);
    this.employeeInfo.designation = formValues.designation as string;
    this.employeeInfo.responsibilities = formValues.responsibilities as string;
    this.employeeInfo.workStartTime = formValues.workStartTime as string;
    this.employeeInfo.workEndTime = formValues.workEndTime as string;
    this.employeeInfo.joiningDate = formValues.joiningDate as string;
    this.employeeInfo.isDeleted = false;
    
    //Saving Employee Info
    this.authService.createEmployee(this.employeeInfo).subscribe((res: any)=>{
      console.log(res);
    });
  }
 
 }
