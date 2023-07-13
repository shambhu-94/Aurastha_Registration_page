import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-testing',
  templateUrl: './registration-testing.component.html',
  styleUrls: ['./registration-testing.component.css']
})
export class RegistrationTestingComponent implements OnInit{

  RegistrationObj:any={
    Employee_Id:'',
    Employee_name:'',
    pan_number:'',
    aadhar_number:'',
    primaryContactNumber:'',
    SecondaryContactNumber:'',
    officialContactNumber:'',
    personalEmail:'',
    officialEmail:'',
    address:[{addressType:'',
        address:'',
        city:'',
        pincode:''}],
    nomineeName:'',
    nomineeRelation:'',
    nomineeSignature:'',
    amountInRupees:'',
    referenceList:[{refType:'',
    refName:'',
    refRelation:'',
    RefContactNum:''}],
    bankDetails:[{bankName:'',
        accountNumber:'',
        IFSCcode:''}],
    Designation:'',
    Responsibilities:'',
    workStartTime:'',
    workEndTime:'',
    joiningDate:'',
    isDeleted:'',
    CreadtedBy:'',
    CreatedDate:''

  }

  constructor(){}

  public ngOnInit(): void {
    
  }
  register(){
    console.log(this.RegistrationObj);
  }
}
