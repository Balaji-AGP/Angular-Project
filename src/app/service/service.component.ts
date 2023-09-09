import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  display=true;
  card1()
  {
      this.display=!this.display;
  }
  card11(){
    this.display=true;
  }


  display2=true;
  card2()
  {
      this.display2=!this.display2;
  }
  card22(){
    this.display2=true;
  }



  display3=true;
  card3()
  {
      this.display3=!this.display3;
  }
  card33(){
    this.display3=true;
  }



  display4=true;
  card4()
  {
      this.display4=!this.display4;
  }
  card44(){
    this.display4=true;
  }


  display5=true;
  card5()
  {
      this.display5=!this.display5;
  }
  card55(){
    this.display5=true;
  }


  display6=true;
  card6()
  {
      this.display6=!this.display6;
  }
  card66(){
    this.display6=true;
  }
}
