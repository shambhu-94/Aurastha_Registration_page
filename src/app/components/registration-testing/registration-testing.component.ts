import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-testing',
  templateUrl: './registration-testing.component.html',
  styleUrls: ['./registration-testing.component.css']
})
export class RegistrationTestingComponent implements OnInit{

  RegistrationObj:any={
    Employee_Id:"",
    Employee_name:'',
    pan_number:'',
    aadhar_number:'',
    primaryContactNumber:'',
    SecondaryContactNumber:'',
    officialContactNumber:'',
    personalEmail:'',
    officialEmail:'',
    addressDetails:{addressType:'',
        address:'',
        city:'',
        pincode:''},
    nomineeName:'',
    nomineeRelation:'',
    nomineeSignature:'',
    amountInRupees:'',
    referenceList:{refType:'',
    refName:'',
    refRelation:'',
    RefContactNum:''},
    bankDetails:{bankName:'',
        accountNumber:'',
        IFSCcode:''},
    Designation:'',
    Responsibilities:'',
    workStartTime:'',
    workEndTime:'',
    joiningDate:'',
    isDeleted:'0',
    CreadtedBy:'HR',
    CreatedDate:''

  }

  constructor(){}

  public ngOnInit(): void {
    
  }
  register(){
    console.log("address: ",this.RegistrationObj.addressDetails);
    console.log("referenceList: ",this.RegistrationObj.referenceList);
    console.log("bankDetails: ",this.RegistrationObj.bankDetails)
    console.log(this.RegistrationObj);
  }
}
