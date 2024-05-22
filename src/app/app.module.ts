import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CreatePropertyComponent } from './pages/create-property/create-property.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatePropertyComponent,
    PropertyListComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
