import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
=======
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 33cc08e0db1abcf23fcd65e3d911f69e83c6a0cb

@Component({
  selector: 'app-registration-testing',
  templateUrl: './registration-testing.component.html',
  styleUrls: ['./registration-testing.component.css']
})
export class RegistrationTestingComponent implements OnInit{

  RegistrationObj:any={
<<<<<<< HEAD
    Employee_Id:"",
=======
    Employee_Id:'',
>>>>>>> 33cc08e0db1abcf23fcd65e3d911f69e83c6a0cb
    Employee_name:'',
    pan_number:'',
    aadhar_number:'',
    primaryContactNumber:'',
    SecondaryContactNumber:'',
    officialContactNumber:'',
    personalEmail:'',
    officialEmail:'',
<<<<<<< HEAD
    addressDetails:{addressType:'',
        address:'',
        city:'',
        pincode:''},
=======
    address:[{addressType:'',
        address:'',
        city:'',
        pincode:''}],
>>>>>>> 33cc08e0db1abcf23fcd65e3d911f69e83c6a0cb
    nomineeName:'',
    nomineeRelation:'',
    nomineeSignature:'',
    amountInRupees:'',
<<<<<<< HEAD
    referenceList:{refType:'',
    refName:'',
    refRelation:'',
    RefContactNum:''},
    bankDetails:{bankName:'',
        accountNumber:'',
        IFSCcode:''},
=======
    referenceList:[{refType:'',
    refName:'',
    refRelation:'',
    RefContactNum:''}],
    bankDetails:[{bankName:'',
        accountNumber:'',
        IFSCcode:''}],
>>>>>>> 33cc08e0db1abcf23fcd65e3d911f69e83c6a0cb
    Designation:'',
    Responsibilities:'',
    workStartTime:'',
    workEndTime:'',
    joiningDate:'',
<<<<<<< HEAD
    isDeleted:'0',
    CreadtedBy:'HR',
=======
    isDeleted:'',
    CreadtedBy:'',
>>>>>>> 33cc08e0db1abcf23fcd65e3d911f69e83c6a0cb
    CreatedDate:''

  }

  constructor(){}

  public ngOnInit(): void {
    
  }
  register(){
<<<<<<< HEAD
    console.log("address: ",this.RegistrationObj.addressDetails);
    console.log("referenceList: ",this.RegistrationObj.referenceList);
    console.log("bankDetails: ",this.RegistrationObj.bankDetails)
=======
>>>>>>> 33cc08e0db1abcf23fcd65e3d911f69e83c6a0cb
    console.log(this.RegistrationObj);
  }
}
