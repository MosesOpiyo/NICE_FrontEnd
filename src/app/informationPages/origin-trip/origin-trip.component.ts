import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from 'src/app/login/login.component';
import { AuthenticationService } from 'src/app/AuthService/authentication.service'; 
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-origin-trip',
  templateUrl: './origin-trip.component.html',
  styleUrls: ['./origin-trip.component.css']
})
export class OriginTripComponent implements OnInit {
  // modal
  isModalOpen = false;
  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }

  // modal2
  isModalOpen2 = false;
  toggleModal2(): void {
    this.isModalOpen2 = !this.isModalOpen2;
  }

  // modal2
  isModalOpen3 = false;
  toggleModal3(): void {
    this.isModalOpen3 = !this.isModalOpen3;
  }

  // modal2
  isModalOpen4 = false;
  toggleModal4(): void {
    this.isModalOpen4 = !this.isModalOpen4;
  }

  farmerData = [ 
    {
      id: 1,
      farmName: 'Ndaroini Farmers Plc',
      imageUrl1: '../../../assets/img/Trip/ndaro1.jpg',
      imageUrl2: '../../../assets/img/Trip/ndaro2.jpg',
      rating: [
        'fa-solid fa-star',
        'fa-solid fa-star',
        'fa-solid fa-star',
        'fa-solid fa-star',
        'fa-solid fa-star',
      ],
      story: 'Ndaroini Farmers Plc is one of the most exceptional cooperatives in Kenya having won several excellence awards. The spirit of Ndaroini farmers is expressed by the quality of their coffee. A visit to Ndaroini will give you insights into Certification Systems, Traceability, Harvest, Primary processing and Post harvest management.'
    }
  ]

  farmerData2 = [ 
    {
      id: 1,
      farmName: 'The Geralds',
      imageUrl1: '../../../assets/img/Trip/geralds1.jpg',
      imageUrl2: '../../../assets/img/Trip/geralds2.jpg',
      rating: [
        'fa-solid fa-star',
        'fa-solid fa-star',
        'fa-solid fa-star',
        'fa-solid fa-star',
        'fa-solid fa-star',
      ],
      story: 'The Geralds brothers passion for coffee can not be told in words. You just have to see them at work on the farm and youll get it. They inherited love for coffee from their late father Gerald. Traditionally most siblings divide inherited land. But the Geralds chose to stick together to farm coffee. This jovial family will help you learn what it takes to produce premium coffee for the specialty market. Meet them on the Nyeri Origin Trip.'
    }
  ]

  farmerData3 = [
    {
      id: 1,
      farmName: 'Ragis coffee estate',
      imageUrl1: '../../../assets/img/Trip/ragis1.jpg',
      imageUrl2: '../../../assets/img/Trip/ragis2.jpg',
      rating: [
        'fa-solid fa-star',
        'fa-solid fa-star',
        'fa-solid fa-star',
        'fa-solid fa-star',
        'fa-solid fa-star',
      ],
      story: 'The cup in Stephens coffee keeps roasters coming to his farm for more. Ever learning, Stephen has constantly been improving the quality of his coffee over time through improved farm practices. He has managed to get his whole family hooked on coffee and now they all want to see the Ragis brand grow. He is part of a new breed of Kenyan farmers who are seeking to form direct relationships with roasters globally. Meet him on the Nyeri Origin Trip.'
    }
  ]

  farmerData4 = [ 
    {
      id: 1,
      farmName: 'Jungle coffee estate',
      imageUrl1: '../../../assets/img/Trip/jungle1.jpg',
      imageUrl2: '../../../assets/img/Trip/jungle2.jpg',
      rating: [
        'fa-solid fa-star',
        'fa-solid fa-star',
        'fa-solid fa-star',
        'fa-solid fa-star',
        'fa-solid fa-star',
      ],
      story: 'Jungle coffee estate is one of the best estates in the heart of Nyeri. For Mr Kimondo the manager, being ever experimental and producing coffees to specific requirements of roasters has kept them on top. At Jungle you will find naturals which are rare in Nyeri. You will also get insights into Disease Management and Insect Control, Shade grown coffee, Drought Management, Irrigation and Pruning Practices.'
    }
  ]


  myScriptElement: HTMLScriptElement;
  constructor(private dialog: MatDialog,private service:AuthenticationService,private route:Router){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "../../assets/js/main.js";
     document.body.appendChild(this.myScriptElement);
  }

  user:any | null = null;
  isLoggedIn:any

  showLoginDialog(){
   const dialogRef = this.dialog.open(LoginComponent,{
     width: '25pc'
   });
 }

 logout(){
   this.service.logout()
   this.ngOnInit()
 }

 showSignUpDialog(){
   const dialogRef = this.dialog.open(SignUpComponent,{
     width: '25pc'
   }); 
 }

 ngOnInit(): void {
  }

}
