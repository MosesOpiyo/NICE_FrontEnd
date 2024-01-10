import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  number_value:number = 1;
  number_value2:number = 1;
  isShowDiv: boolean  = false;
  isShowDiv2: boolean  = false;
  quantityPrice:any = "";
  grind:any = "";
  roast_type:any = "";

  // for roasted
  checkStatus1(event:any){
    // Check if radio button is checked
    if(event.target.checked == true){
      this.isShowDiv = false
    }
    else {
      this.isShowDiv = true
    }
  }

  checkStatus2(event:any){
    // Check if radio button is checked
    if(event.target.checked == true){
      this.isShowDiv = true
    }
    else {
      this.isShowDiv = false
    }
  }

  // for green
  checkStatus3(event:any){
    // Check if radio button is checked
    if(event.target.checked == true){
      this.isShowDiv2 = false
    }
    else {
      this.isShowDiv2 = true
    }
  }

  checkStatus4(event:any){
    // Check if radio button is checked
    if(event.target.checked == true){
      this.isShowDiv2 = true
    }
    else {
      this.isShowDiv2 = false
    }
  }

  constructor(){}

  ngOnInit(): void {
  }

   // addtocart dialog tabs
   tabs: string [] = ['Roasted', 'Green'];
   activatedTabIndex: number = 0;

   // addtocart dialog tab index
   tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
    this.isShowDiv = false;
    this.isShowDiv2 = false;
    this.quantityPrice = "";
    this.grind = "";
    this.roast_type = "";
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
