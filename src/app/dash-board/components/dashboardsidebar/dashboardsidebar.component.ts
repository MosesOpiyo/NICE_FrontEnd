import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { AuthenticationStoreService } from 'src/app/AuthServiceStore/authentication-store.service';
import { Profile } from 'src/app/Classes/ProfileClass/profile';

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
      icon: 'fa-solid fa-user',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8647/8647311.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 2,
      link: 'dash-board/table',
      listName: 'Products',
      icon: 'fa-solid fa-boxes-packing',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/13368/13368825.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 4,
      link: 'dash-board/orders',
      listName: 'Orders',
      icon: 'fa-solid fa-clipboard-list',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8484/8484966.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 5,
      link: 'dash-board/payments',
      listName: 'Payments',
      icon: 'fa-solid fa-money-check-dollar',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/11612/11612845.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 6,
      link: 'dash-board/messages',
      listName: 'Notifications',
      icon: 'fa-solid fa-bell',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8567/8567809.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 7,
      link: 'dash-board/timeline',
      listName: 'Timeline',
      icon: 'fa-solid fa-image',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/2838/2838794.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 8,
      link: 'dash-board/settings',
      listName: 'Settings',
      icon: 'fa-solid fa-gear',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/3524/3524636.png?ga=GA1.1.113623340.1706293126&semt=ais'
    }
  ] 
  
  warehouserList = [
    {
      id: 1,
      link: 'dash-board',
      listName: 'Profile',
      icon: 'fa-solid fa-user',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8647/8647311.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 2,
      link: 'dash-board/table',
      listName: 'Inventory',
      icon: 'fa-solid fa-boxes-packing',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/13368/13368825.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 3,
      link: 'dash-board/orders',
      listName: 'Orders',
      icon: 'fa-solid fa-clipboard-list',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8484/8484966.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 4,
      link: 'dash-board/manifests',
      listName: 'Manifest',
      icon: 'fa-solid fa-list-check',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/929/929393.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 5,
      link: 'dash-board/messages',
      listName: 'Notifications',
      icon: 'fa-solid fa-bell',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8567/8567809.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 6,
      link: 'dash-board/settings',
      listName: 'Settings',
      icon: 'fa-solid fa-gear',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/3524/3524636.png?ga=GA1.1.113623340.1706293126&semt=ais'
    }

  ]

  originWarehouserList = [
    {
      id: 1,
      link: 'dash-board',
      listName: 'Profile',
      icon: 'fa-solid fa-user',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8647/8647311.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 2,
      link: 'dash-board/table',
      listName: 'Inventory',
      icon: 'fa-solid fa-boxes-packing',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/13368/13368825.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 3,
      link: 'dash-board/orders',
      listName: 'Orders',
      icon: 'fa-solid fa-clipboard-list',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8484/8484966.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 4,
      link: 'dash-board/manifests',
      listName: 'Manifest',
      icon: 'fa-solid fa-list-check',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/929/929393.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 5,
      link: 'dash-board/messages',
      listName: 'Notifications',
      icon: 'fa-solid fa-bell',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8567/8567809.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 6,
      link: 'dash-board/settings',
      listName: 'Settings',
      icon: 'fa-solid fa-gear',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/3524/3524636.png?ga=GA1.1.113623340.1706293126&semt=ais'
    }

  ]

  buyerList = [
    {
      id: 1,
      link: 'dash-board',
      listName: 'Profile',
      icon: 'fa-solid fa-user',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8647/8647311.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 2,
      link: 'dash-board/buyer_orders',
      listName: 'Orders',
      icon: 'fa-solid fa-clipboard-list',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8484/8484966.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 3,
      link: 'dash-board/wishlist',
      listName: 'Wishlist',
      icon: 'fa-solid fa-heart',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/7475/7475529.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    // {
    //   id: 4,
    //   link: 'dash-board/cart',
    //   listName: 'Orders',
    //   icon: 'fa-solid fa-bag-shopping'
    // },

    {
      id: 4,
      link: 'dash-board/table',
      listName: 'Events',
      icon: 'fa-solid fa-calendar',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/497/497200.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 5,
      link: 'dash-board/settings',
      listName: 'Settings',
      icon: 'fa-solid fa-gear',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/3524/3524636.png?ga=GA1.1.113623340.1706293126&semt=ais'
    }

  ]

  adminList = [
    {
      id: 1,
      link: 'dash-board',
      listName: 'Profile',
      icon: 'fa-solid fa-user',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8647/8647311.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 2,
      link: 'dash-board/table',
      listName: 'Users',
      icon: 'fa-solid fa-users',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/681/681443.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 3,
      link: 'dash-board/pending_accounts',
      listName: 'Pending Accounts',
      icon: 'fa-solid fa-file-circle-question',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8763/8763837.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 4,
      link: 'dash-board/processed_products',
      listName: 'Products',
      icon: 'fa-solid fa-boxes-packing',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/13368/13368825.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 4,
      link: 'dash-board/orders',
      listName: 'Orders',
      icon: 'fa-solid fa-clipboard-list',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/8484/8484966.png?ga=GA1.1.113623340.1706293126&semt=ais'
    },

    {
      id: 5,
      link: 'dash-board/settings',
      listName: 'Settings',
      icon: 'fa-solid fa-gear',
      imgSrc: 'https://cdn-icons-png.freepik.com/256/3524/3524636.png?ga=GA1.1.113623340.1706293126&semt=ais'
    }

  ]

  constructor(private service:AuthenticationService,private store:AuthenticationStoreService, private route:Router){}
  user:Profile
  cloudinaryUrl = environment.CLOUDINARY_URL
  pic:any
  data:any;

  ngOnInit(): void {
    if(sessionStorage.getItem('Token')){
        this.store.storeProfileData()
        this.store.data$.subscribe((data:any) => {
          this.user = data
      })
    }
    else{
      this.route.navigate([''])
    }
  }

}

