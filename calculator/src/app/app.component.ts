import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  //default values of calc screen
  funcV: any = 'NoFunction';
  numbV: number = 0;

  onClickbutton(val:string, type:any){
    console.log(val, type);
  }
  
}
