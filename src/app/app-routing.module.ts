import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'service',component:ServiceComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'booking',component:BookingComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
