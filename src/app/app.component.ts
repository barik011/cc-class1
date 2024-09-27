import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cc-class1';

  //Text Interpolation and Attribute Binding
  buttonText:string = 'Click me!';

  //Attribute Binding
  isDisbaled:boolean = true;
  imgSrc:string = 'https://angular.io/assets/images/logos/angular/angular.svg';

  // Style Binding
  bgColor:string ='lightblue';
  textColor:string = 'orange';
  fz30:string = '30px';
  FZ20:string = '20px';
  multiProperty:string = 'background-color:lightgreen;color:black;font-size:16px;';

   // Class Binding
  addClass:boolean=true;

  addNewClassess:string = 'yes';

  // Event Binding
  count:number=0;
  onIncrementHandler(){
    this.count++;
  }

  // Two way Binding
  inputValue:string='Initial Value';


  // NgClass Binding
  cadrProperty:string='cardProperty border';

  // NgStyle Binding
  redColor:string='lightgreen';

}
