import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  show1=true;
  clicknew1()
  {
    this.show1=! this.show1;
  }


  show2=true;
  clicknew2()
  {
    this.show2=! this.show2;
  }


  show3=true;
  clicknew3()
  {
    this.show3=! this.show3;
  }
}
