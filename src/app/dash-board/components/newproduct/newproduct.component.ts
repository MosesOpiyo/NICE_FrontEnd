import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/ProductsService/products.service';

interface Profile {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder,private product:ProductsService,private dialog:MatDialog){}
  title = 'newMat';
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  name:any
  quantity:any
  grade:any
  origin:any
  lot_type:any
  cup_score:any
  cup_notes:any
  cupped_by:any
  processing:any
  drying:any
  caffeine:any
  acidity:any
  level:any
  email:any


  profiles: Profile[] = [
    {value: 'acidity-0', viewValue: 'Bright acidity'},
    {value: 'lemon-1', viewValue: 'Lemon'},
    {value: 'blackcurrant-2', viewValue: 'Blackcurrant'},
    {value: 'chocolatey-3', viewValue: 'Chocolatey'},
    {value: 'raspberry-4', viewValue: 'Raspberry'},
    {value: 'fruity-5', viewValue: 'Fruity'},
  ];

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      grade: ['', Validators.required],
      origin: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      lot_type: ['', Validators.required],
      cup_score: ['', Validators.required],
      cupped_by: ['', Validators.required],
      cup_notes: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      processing: ['', Validators.required],
      drying: ['', Validators.required],
      caffeine: ['', Validators.required],
      acidity: ['', Validators.required],
      level: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  submit(){
    let form = new FormGroup({
      name:new FormControl(this.firstFormGroup.controls['name'].value),
      quantity: new FormControl(this.firstFormGroup.controls['quantity'].value),
      grade: new FormControl(this.firstFormGroup.controls['grade'].value),
      origin: new FormControl(this.firstFormGroup.controls['origin'].value),
      lot_type: new FormControl(this.secondFormGroup.controls['lot_type'].value),
      cup_score:new FormControl(this.secondFormGroup.controls['cup_score'].value),
      cup_notes: new FormControl(this.secondFormGroup.controls['cup_notes'].value),
      cupped_by: new FormControl(this.secondFormGroup.controls['cupped_by'].value),
      processing: new FormControl(this.thirdFormGroup.controls['processing'].value),
      drying: new FormControl(this.thirdFormGroup.controls['drying'].value),
      caffeine: new FormControl(this.thirdFormGroup.controls['caffeine'].value),
      acidity: new FormControl(this.thirdFormGroup.controls['acidity'].value),
      level: new FormControl(this.thirdFormGroup.controls['level'].value),
      email: new FormControl(this.thirdFormGroup.controls['email'].value),
    });
    this.dialog.closeAll
    this.product.addProduct(form.value)
  }

}

