import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponentComponent } from '../registration-component/registration-component.component';
import { LoginComponentComponent } from '../login-component/login-component.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RegistrationComponentComponent,LoginComponentComponent
  ],
  exports:[RegistrationComponentComponent,LoginComponentComponent]
})
export class ComponentsModule { }
