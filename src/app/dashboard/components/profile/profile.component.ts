import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit { 
constructor(private _formBuilder: FormBuilder,public dialog: MatDialogRef<ProfileComponent>,){}
  title = 'Farmer Profile';
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;


county:any
wet_mill_name:any
society_name:any
factory_chairman:any
factory_manager:any
no_of_farmers:any
total_acreage:any
no_of_trees:any
altitude:any
harvest_season:any
annual_rainfall_amount:any
coffee_variety:any
certification_type:any
availability:any
location:any
farm_area:any

ngOnInit(): void {
  this.firstFormGroup = this._formBuilder.group({
    county: ['', Validators.required],
    wet_mill_name: ['', Validators.required],
    society_name: ['', Validators.required],
    factory_chairman: ['', Validators.required],
    factory_manager: ['', Validators.required],
    no_of_farmers: ['', Validators.required],
  });
  this.secondFormGroup = this._formBuilder.group({
    total_acreage: ['', Validators.required],
    no_of_trees: ['', Validators.required],
    altitude: ['', Validators.required],
    harvest_season: ['', Validators.required],
    annual_rainfall_amount: ['', Validators.required],
    coffee_variety: ['', Validators.required],
    certification_type: ['', Validators.required],
    availability: ['', Validators.required],
    location: ['', Validators.required],
    farm_area: ['', Validators.required],
  });
}
submit(){
  let form = new FormGroup({
    county:new FormControl(this.firstFormGroup.controls['county'].value),
    wet_mill_name: new FormControl(this.firstFormGroup.controls['wet_mill_name'].value),
    society_name: new FormControl(this.firstFormGroup.controls['society_name'].value),
    factory_chairman: new FormControl(this.firstFormGroup.controls['factory_chairman'].value),
    factory_manager: new FormControl(this.secondFormGroup.controls['factory_manager'].value),
    no_of_farmers:new FormControl(this.secondFormGroup.controls['no_of_farmers'].value),
    total_acreage: new FormControl(this.secondFormGroup.controls['total_acreage'].value),
    no_of_trees: new FormControl(this.secondFormGroup.controls['no_of_trees'].value),
    altitude: new FormControl(this.secondFormGroup.controls['altitude'].value),
    harvest_season: new FormControl(this.secondFormGroup.controls['harvest_season'].value),
    annual_rainfall_amount: new FormControl(this.secondFormGroup.controls['annual_rainfall_amount'].value),
    coffee_variety: new FormControl(this.secondFormGroup.controls['coffee_variety'].value),
    certification_type: new FormControl(this.secondFormGroup.controls['certification_type'].value),
    availability: new FormControl(this.secondFormGroup.controls['availability'].value),
    location: new FormControl(this.secondFormGroup.controls['location'].value),
    farm_area: new FormControl(this.secondFormGroup.controls['farm_area'].value),
  });
  this.dialog.close()
}


}
