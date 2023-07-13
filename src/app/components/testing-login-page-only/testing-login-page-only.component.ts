import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-login-page-only',
  templateUrl: './testing-login-page-only.component.html',
  styleUrls: ['./testing-login-page-only.component.css']
})
export class TestingLoginPageOnlyComponent implements OnInit{

  constructor(){}


  loginObj:any={
    email:'',
    password:''
  }
  signupUsers=[{'email':'shambhu@gmail.com', 'password':'shambhu'},
  {'email':'shambhavi@gmail.com', 'password':'shambhavi'},
  {'email':'sham@gmail.com', 'password':'sham'},
  {'email':'meeshu@gmail.com', 'password':'meeshu'}
]

  ngOnInit(): void {    
  }

  onLogin(){
    const isUserExists = this.signupUsers.find(m=> m.email == this.loginObj.email && m.password == this.loginObj.password);
    if(isUserExists!=undefined){
      alert("User Login Successful");
      console.log(this.loginObj);
    }else
    alert("Wrong Credentials");
    console.log(this.loginObj);

  }

}
