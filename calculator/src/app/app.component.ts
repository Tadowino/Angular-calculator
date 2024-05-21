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
  //concatenation value
  conV: string = 'noValue';
  //calculation values
  firstnumber: number = 0;
  secondnumber: number = 0;
  

  onClickbutton(val:string, type:any){
    //checks if value is a number
    if(type == 'number'){
      this.onNumberClick(val);
    }
    //checks if value is a function
    else if(type == 'function'){
      this.onFunctionClick(val);
    }
  }
  //concatenates calculator values on screen and converts values from string to number
  onNumberClick(val:string){
    if(this.conV != 'noValue'){
    this.conV = this.conV + val;
    }
    else if(this.conV == 'noValue'){
      this.conV = val;
    }
    this.numbV = parseFloat(this.conV);
  }
  //extract firstnumber and secondnumber
  onFunctionClick(val:string){
  if(val == 'c'){
    this.onClear();
  }
  
  else if(this.funcV == 'NoFunction'){
    this.firstnumber = this.numbV;
    this.conV = 'noValue';
    this.numbV = 0;
    this.funcV = val;
  }
  else if(this.funcV != 'NoFunction'){
    this.secondnumber = this.numbV;
    this.calculateValue(val);
  }
  }
  //calculations
  calculateValue(val:string){
    if(this.funcV == '+'){
      const Total = this.firstnumber + this.secondnumber;
      this.numbV = Total;
      this.firstnumber = Total;
      this.secondnumber = 0;
      this.conV = 'noValue';
      this.funcV = 'NoFunction'; 
      if(val == '='){
        this.onEqual();
      }
    }
    else if(this.funcV == '-'){
      const Total = this.firstnumber - this.secondnumber;
      this.numbV = Total;
      this.firstnumber = Total;
      this.secondnumber = 0;
      this.conV = 'noValue';
      this.funcV = 'NoFunction'; 
      if(val == '='){
        this.onEqual();
      }
    }
    else if(this.funcV == '*'){
      const Total = this.firstnumber * this.secondnumber;
      this.numbV = Total;
      this.firstnumber = Total;
      this.secondnumber = 0;
      this.conV = 'noValue';
      this.funcV = 'NoFunction'; 
      if(val == '='){
        this.onEqual();
      }
    }
    else if(this.funcV == '/'){
      const Total = this.firstnumber / this.secondnumber;
      this.numbV = Total;
      this.firstnumber = Total;
      this.secondnumber = 0;
      this.conV = 'noValue';
      this.funcV = 'NoFunction'; 
      if(val == '='){
        this.onEqual();
      }
    }
    else if(this.funcV == '%'){
      const Total = this.firstnumber % this.secondnumber;
      this.numbV = Total;
      this.firstnumber = Total;
      this.secondnumber = 0;
      this.conV = 'noValue';
      this.funcV = 'NoFunction'; 
      if(val == '='){
        this.onEqual();
      }
    }

  }
  onEqual(){
    this.firstnumber = 0;
    this.secondnumber = 0;
    this.conV = 'noValue';
    this.funcV = 'NoFunction'; 
  }
  onClear(){
    this.numbV = 0;
    this.firstnumber = 0;
    this.secondnumber = 0;
    this.conV = 'noValue';
    this.funcV = 'NoFunction';
  }
  
  
}
