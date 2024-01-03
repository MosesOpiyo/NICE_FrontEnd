import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-farminfo',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './farminfo.component.html',
  styleUrl: './farminfo.component.css'
})
export class FarminfoComponent {

}
