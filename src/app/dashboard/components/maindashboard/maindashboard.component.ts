import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  constructor(){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "../../../../assets/dash-assets/js/main.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {}
}
