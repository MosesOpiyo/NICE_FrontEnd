import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { CartService } from '../Service/Cart/cart.service';

@Component({
  selector: 'app-productsnavbar',
  templateUrl: './productsnavbar.component.html',
  styleUrls: ['./productsnavbar.component.css']
})
export class ProductsnavbarComponent implements OnInit {
  constructor(private cart: CartService){
    this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "../../assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }
  userCart:any
  data:any
  public totalItem : number = 0;
  myScriptElement: HTMLScriptElement;
  filteredProducts:any
  

  @Output() dataToParent = new EventEmitter<string>();
  
  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
      this.cart.getAuthCart().subscribe((res:any)=>{
        this.userCart = res['products'].length
      })
     }
     else{
       console.log("No token")
     }
   }
   onChange(event:any){
    const dataToSend = event.target.value;;
    this.dataToParent.emit(dataToSend);
   }

}
