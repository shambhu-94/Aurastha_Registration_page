import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestingLoginPageOnlyComponent } from './components/testing-login-page-only/testing-login-page-only.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationTestingComponent } from './components/registration-testing/registration-testing.component';
import { NewRegistrationPageComponent } from './components/new-registration-page/new-registration-page.component';
<<<<<<< HEAD
import { LatestRegistrationFormComponent } from './components/latest-registration-form/latest-registration-form.component';
=======
>>>>>>> 33cc08e0db1abcf23fcd65e3d911f69e83c6a0cb

const routes: Routes = [
  {path:'loginPreviousOne', component: LoginComponent},
  {path:'signup', component:SignupComponent},
  {path: 'login', component:TestingLoginPageOnlyComponent},
  {path: 'registration', component:RegistrationFormComponent},
  {path: 'registrationTesting', component:RegistrationTestingComponent},
  {path: 'newRegistration', component:NewRegistrationPageComponent},
<<<<<<< HEAD
  {path: 'latest', component:LatestRegistrationFormComponent},
=======
>>>>>>> 33cc08e0db1abcf23fcd65e3d911f69e83c6a0cb
  {path:'', redirectTo: "login", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
