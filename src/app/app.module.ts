import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TestingLoginPageOnlyComponent } from './components/testing-login-page-only/testing-login-page-only.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationTestingComponent } from './components/registration-testing/registration-testing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewRegistrationPageComponent } from './components/new-registration-page/new-registration-page.component';
import { TrailComponent } from './components/trail/trail.component';
<<<<<<< HEAD
import { LatestRegistrationFormComponent } from './components/latest-registration-form/latest-registration-form.component';
import {HttpClientModule} from '@angular/common/http'
import { AuthService } from './services/auth.service';
=======
>>>>>>> 33cc08e0db1abcf23fcd65e3d911f69e83c6a0cb

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TestingLoginPageOnlyComponent,
    RegistrationFormComponent,
    RegistrationTestingComponent,
    NewRegistrationPageComponent,
<<<<<<< HEAD
    TrailComponent,
    LatestRegistrationFormComponent
=======
    TrailComponent
>>>>>>> 33cc08e0db1abcf23fcd65e3d911f69e83c6a0cb
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
=======
    FormsModule
  ],
  providers: [],
>>>>>>> 33cc08e0db1abcf23fcd65e3d911f69e83c6a0cb
  bootstrap: [AppComponent]
})
export class AppModule { }
