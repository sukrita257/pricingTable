import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDemo';

  cards = [
    {
      title : "FREE",
      price : "$0",
      forBold:{
        user:{single: true, num: "Single User"},
        subdomain : {enable: false, unlimited: false}
      },
      storage : "5GB Storage",
      pub_prj : true,
      comm_acc : true,
      prv_prj : false,
      ph_support : false,
      reports : false
    },
    {
      title : "PLUS",
      price : "$9",
      forBold:{
        user:{single: false, num: "5 Users"},
        subdomain : {enable: true, unlimited: false}
      },
      storage : "50GB Storage",
      pub_prj : true,
      comm_acc : true,
      prv_prj : true,
      ph_support : true,
      subdomain : true,
      reports : false
    },
    {
      title : "PRO",
      price : "$49",
      forBold:{
        user:{single: false, num: "Unlimited Users"},
        subdomain : {enable: true,unlimited: true}
      },
      storage : "150GB Storage",
      pub_prj : true,
      comm_acc : true,
      prv_prj : true,
      ph_support : true,
      subdomain : true,
      reports : true
    }
  ]

}
