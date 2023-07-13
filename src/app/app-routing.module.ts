import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestingLoginPageOnlyComponent } from './components/testing-login-page-only/testing-login-page-only.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationTestingComponent } from './components/registration-testing/registration-testing.component';
import { NewRegistrationPageComponent } from './components/new-registration-page/new-registration-page.component';

const routes: Routes = [
  {path:'loginPreviousOne', component: LoginComponent},
  {path:'signup', component:SignupComponent},
  {path: 'login', component:TestingLoginPageOnlyComponent},
  {path: 'registration', component:RegistrationFormComponent},
  {path: 'registrationTesting', component:RegistrationTestingComponent},
  {path: 'newRegistration', component:NewRegistrationPageComponent},
  {path:'', redirectTo: "login", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
