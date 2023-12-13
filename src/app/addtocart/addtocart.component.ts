import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  number_value:number = 1;
  number_value2:number = 1;
  isShowDiv = false;
  isShowDiv2 = false;

  constructor(){}

  ngOnInit(): void {
  }

   // addtocart dialog tabs
   tabs: string [] = ['Roasted', 'Green'];
   activatedTabIndex: number = 0;

   // addtocart dialog tab index
   tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
  }

  // for roasted section
  toggleDivOff() {
    this.isShowDiv = false;
  }

  toggleDivOn() {
    this.isShowDiv = true;
  }

  // for green tab section
  toggleDivOff2() {
    this.isShowDiv2 = false;
  }

  toggleDivOn2() {
    this.isShowDiv2 = true;
  }

  // increment button for roasted section
  increment(){
    this.number_value++;
    }
    
  //decrements item for roasted section
  decrement(){
    if(this.number_value-1 < 1){
      this.number_value = 1;
    }
    else{
      this.number_value -= 1;
    }
  }

  // increment button for green section
  increment2(){
    this.number_value2++;
    }
    
  //decrements item for green section
  decrement2(){
    if(this.number_value2-1 < 1){
      this.number_value2 = 1;
    }
    else{
      this.number_value2 -= 1;
    }
  }

  //roasted
  check(value: any) {
    this.number_value = value.target.value;
  }

  //green
  check2(value: any) {
    this.number_value2 = value.target.value;
  }

}
