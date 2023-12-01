import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dashboardsidebar',
  templateUrl: './dashboardsidebar.component.html',
  styleUrls: ['./dashboardsidebar.component.css']
})
export class DashboardsidebarComponent implements OnInit {

  farmerList = [
    {
      id: 1,
      link: 'dash-board',
      listName: 'Profile',
      icon: 'fa-solid fa-user'
    },

    {
      id: 2,
      link: 'dash-board/table',
      listName: 'Products',
      icon: 'fa-solid fa-boxes-packing'
    },

    {
      id: 4,
      link: 'dash-board/orders',
      listName: 'Orders',
      icon: 'fa-solid fa-clipboard-list'
    },

    {
      id: 5,
      link: 'dash-board/payments',
      listName: 'Payments',
      icon: 'fa-solid fa-money-check-dollar'
    },

    {
      id: 6,
      link: 'dash-board/messages',
      listName: 'Notifications',
      icon: 'fa-solid fa-bell'
    },

    {
      id: 7,
      link: 'dash-board/timeline',
      listName: 'Timeline',
      icon: 'fa-solid fa-image'
    }
  ] 
  
  warehouserList = [
    {
      id: 1,
      link: 'dash-board',
      listName: 'Profile',
      icon: 'fa-solid fa-user'
    },

    {
      id: 2,
      link: 'dash-board/table',
      listName: 'Inventory',
      icon: 'fa-solid fa-boxes-packing'
    },

    {
      id: 3,
      link: 'dash-board/orders',
      listName: 'Orders',
      icon: 'fa-solid fa-clipboard-list'
    },

    {
      id: 4,
      link: 'dash-board/manifests',
      listName: 'Manifest',
      icon: 'fa-solid fa-list-check'
    },

    {
      id: 5,
      link: 'dash-board/messages',
      listName: 'Notifications',
      icon: 'fa-solid fa-bell'
    }

  ]

  originWarehouserList = [
    {
      id: 1,
      link: 'dash-board',
      listName: 'Profile',
      icon: 'fa-solid fa-user'
    },

    {
      id: 2,
      link: 'dash-board/table',
      listName: 'Inventory',
      icon: 'fa-solid fa-boxes-packing'
    },

    {
      id: 3,
      link: 'dash-board/orders',
      listName: 'Orders',
      icon: 'fa-solid fa-clipboard-list'
    },

    {
      id: 4,
      link: 'dash-board/manifests',
      listName: 'Manifest',
      icon: 'fa-solid fa-list-check'
    },

    {
      id: 5,
      link: 'dash-board/messages',
      listName: 'Notifications',
      icon: 'fa-solid fa-bell'
    }

  ]

  buyerList = [
    {
      id: 1,
      link: 'dash-board',
      listName: 'Profile',
      icon: 'fa-solid fa-user'
    },

    {
      id: 2,
      link: 'dash-board/orders',
      listName: 'Orders',
      icon: 'fa-solid fa-clipboard-list'
    },

    {
      id: 3,
      link: 'dash-board/table',
      listName: 'Wishlist',
      icon: 'fa-solid fa-heart'
    },

    {
      id: 4,
      link: 'dash-board/table',
      listName: 'Cart',
      icon: 'fa-solid fa-bag-shopping'
    },

    {
      id: 5,
      link: 'dash-board/table',
      listName: 'Events',
      icon: 'fa-solid fa-calendar'
    }

  ]

  adminList = [
    {
      id: 1,
      link: 'dash-board',
      listName: 'Profile',
      icon: 'fa-solid fa-user'
    },

    {
      id: 2,
      link: 'dash-board/table',
      listName: 'Users',
      icon: 'fa-solid fa-users'
    },

    {
      id: 3,
      link: 'dash-board/pending_accounts',
      listName: 'Pending Accounts',
      icon: 'fa-solid fa-file-circle-question'
    },

    {
      id: 4,
      link: 'dash-board/processed_products',
      listName: 'Products',
      icon: 'fa-solid fa-boxes-packing'
    },

    {
      id: 4,
      link: 'dash-board/orders',
      listName: 'Orders',
      icon: 'fa-solid fa-clipboard-list'
    }

  ]

  constructor(private service:AuthenticationService, private route:Router){}
  user:any
  cloudinaryUrl = environment.CLOUDINARY_URL
  pic:any
  data:any;

  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
      this.service.getProfile().subscribe((res:any)=>{
        this.user = res
      })
    }
    else{
      this.route.navigate([''])
    }
  }

}

