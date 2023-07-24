import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  signupUsers:any[]=[];
  signupObj: any={
    userName:'',
    email:'',
    password:''
  };
  loginObj:any={
    userName:'',
    password:''
  }

  constructor(){}
   
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData!=null){
      this.signupUsers = JSON.parse(localData);
        }
  }

  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName:'',
      email:'',
      password:''
    }
    console.log(this.signupUsers);
  }
  onLogin(){
    const isUserExists = this.signupUsers.find(m=> m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if(isUserExists!=undefined){
      alert("User Login Successful");
      console.log(this.loginObj);
    }else
    alert("Wrong Credentials");
    console.log(this.loginObj);

  }
  



}
