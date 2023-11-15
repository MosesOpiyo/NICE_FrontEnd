import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  constructor(){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "../../../../assets/dash-assets/js/main.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {}
}
