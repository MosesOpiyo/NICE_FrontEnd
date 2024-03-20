import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FarmerprofileService } from '../../FarmerProfile/farmerprofile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit { 

  // farmer type tabs
  tabs: string [] = ['Cooperative Society', 'Estate Farmer'];
  activatedTabIndex: number = 0;

   // farmer type tab index
   tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
    console.log(this.activatedTabIndex)
    this.toggleIsEstateFarmer() 
  }


constructor(private _formBuilder: FormBuilder,private farmer:FarmerprofileService,public dialog: MatDialogRef<ProfileComponent>,){}
  title = 'Farmer Profile';
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

county:any
country:any
wet_mill_name:any
society_name:any
estate_name:any
factory_chairman:any
factory_manager:any
no_of_farmers:any
men:any
women:any
total_acreage:any
no_of_trees:any
altitude:any
harvest_season:any
annual_rainfall_amount:any
coffee_variety:any
farming_method:any
certification_type:any
soil_type:any
processing_method:any
cupping_notes:any
availability:any
grower_history:any
location:any
farm_area:any
selectedSpecies:  string[] = [];
selectedVarieties: string[] = [];
selectedFarmingMethods: string[] = [];
selectedProcessingMethods: string[] = [];
selectedDryingMethods: string[] = [];
selectedCertificationTypes: string[] = [];

speciesOptions: string[] = ['arabica','robusta'];
varieties: string[] = ['Ruiru II', 'SL-28', 'SL-34', 'Grafted', 'Batian', 'Blue Mountain', 'Geisha'];
farmingMethods: string[] = ['Organic', 'Inorganic'];
processingMethods: string[] = ['Fully', 'washed', 'partially washed', 'Natural', 'Anaerobic', 'Fermentation', 'Carbonic Maceration'];
dryingMethods: string[] = ['Sun drying', 'Mechanical drying'];
certificationTypes: string[] = ['Fairtrade','Rainforest Alliance','UTZ','4C','Organic','Bird Friendly','Cafe Practices'];
isEstateFarmer: boolean

ngOnInit(): void {
  this.firstFormGroup = this._formBuilder.group({
    county: ['', Validators.required],
    country:['',Validators.required],
    wet_mill_name: ['', Validators.required],
    society_name: ['', Validators.required],
    factory_chairman: ['', Validators.required],
    factory_manager: ['', Validators.required],
    no_of_farmers: ['', Validators.required],
    men:['',Validators.required],
    women:['',Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    total_acreage: ['', Validators.required],
    no_of_trees: ['', Validators.required],
    altitude: ['', Validators.required],
    harvest_season: ['', Validators.required],
    annual_rainfall_amount: ['', Validators.required],
    coffee_variety: ['', Validators.required],
    farming_method:['',Validators.required],
    soil_type: ['',Validators.required],
    processing_method: ['',Validators.required],
    cupping_notes: ['',Validators.required],
    availability: ['', Validators.required],
    grower_history:['',Validators.required],
    location: ['', Validators.required],
    farm_area: ['', Validators.required],
  });
}

submit(){
  if(!this.isEstateFarmer){
    let form = new FormGroup({
      county:new FormControl(this.firstFormGroup.controls['county'].value),
      country:new FormControl(this.firstFormGroup.controls['country'].value),
      estate_name:new FormControl("None"),
      wet_mill_name: new FormControl(this.firstFormGroup.controls['wet_mill_name'].value),
      society_name: new FormControl(this.firstFormGroup.controls['society_name'].value),
      factory_chairman: new FormControl(this.firstFormGroup.controls['factory_chairman'].value),
      factory_manager: new FormControl(this.firstFormGroup.controls['factory_manager'].value),
      no_of_farmers:new FormControl(this.firstFormGroup.controls['no_of_farmers'].value),
      men:new FormControl(this.firstFormGroup.controls['men'].value),
      women:new FormControl(this.firstFormGroup.controls['women'].value),
      total_acreage: new FormControl(this.secondFormGroup.controls['total_acreage'].value),
      no_of_trees: new FormControl(this.secondFormGroup.controls['no_of_trees'].value),
      altitude: new FormControl(this.secondFormGroup.controls['altitude'].value),
      harvest_season: new FormControl(this.secondFormGroup.controls['harvest_season'].value),
      annual_rainfall_amount: new FormControl(this.secondFormGroup.controls['annual_rainfall_amount'].value),
      soil_type: new FormControl(this.secondFormGroup.controls['soil_type'].value),
      cupping_notes: new FormControl(this.secondFormGroup.controls['cupping_notes'].value),
      availability: new FormControl(this.secondFormGroup.controls['availability'].value),
      grower_history: new FormControl(this.secondFormGroup.controls['grower_history'].value),
      location: new FormControl(this.firstFormGroup.controls['county'].value),
      farm_area: new FormControl(this.secondFormGroup.controls['total_acreage'].value),
      species: new FormControl(this.selectedSpecies.toString()),
      varieties: new FormControl(this.selectedVarieties.toString()),
      farming_method: new FormControl(this.selectedFarmingMethods.toString()),
      processing_method: new FormControl(this.selectedProcessingMethods.toString()),
      drying_method: new FormControl(this.selectedDryingMethods.toString()),
      certification_type: new FormControl(this.selectedCertificationTypes.toString()),
    });
    console.log(form.value)
    this.dialog.close()
    this.farmer.addProfileDetails(form.value)
  }
  else{
    let form = new FormGroup({
      county:new FormControl(this.firstFormGroup.controls['county'].value),
      country:new FormControl(this.firstFormGroup.controls['country'].value),
      estate_name:new FormControl(this.firstFormGroup.controls['estate_name'].value),
      wet_mill_name: new FormControl("None"),
      society_name: new FormControl("None"),
      factory_chairman: new FormControl("None"),
      factory_manager: new FormControl(this.firstFormGroup.controls['factory_manager'].value),
      no_of_farmers:new FormControl("None"),
      men:new FormControl("None"),
      women:new FormControl("None"),
      total_acreage: new FormControl(this.secondFormGroup.controls['total_acreage'].value),
      no_of_trees: new FormControl(this.secondFormGroup.controls['no_of_trees'].value),
      altitude: new FormControl(this.secondFormGroup.controls['altitude'].value),
      harvest_season: new FormControl(this.secondFormGroup.controls['harvest_season'].value),
      annual_rainfall_amount: new FormControl(this.secondFormGroup.controls['annual_rainfall_amount'].value),
      soil_type: new FormControl(this.secondFormGroup.controls['soil_type'].value),
      cupping_notes: new FormControl(this.secondFormGroup.controls['cupping_notes'].value),
      availability: new FormControl(this.secondFormGroup.controls['availability'].value),
      grower_history: new FormControl(this.secondFormGroup.controls['grower_history'].value),
      location: new FormControl(this.secondFormGroup.controls['location'].value),
      farm_area: new FormControl(this.secondFormGroup.controls['farm_area'].value),
      species: new FormControl(this.selectedSpecies.toString()),
      varieties: new FormControl(this.selectedVarieties.toString()),
      farming_method: new FormControl(this.selectedFarmingMethods.toString()),
      processing_method: new FormControl(this.selectedProcessingMethods.toString()),
      drying_method: new FormControl(this.selectedDryingMethods.toString()),
      certification_type: new FormControl(this.selectedCertificationTypes.toString()),
    });
    console.log(form.value)
    this.dialog.close()
    this.farmer.addProfileDetails(form.value)
  }
}

selectSpecies(species:string){
  if(!this.selectedSpecies.includes(species)){
    this.selectedSpecies.push(species)
    console.log(this.selectedSpecies)
  }else{
    const index = this.selectedSpecies.indexOf(species);
      if (index > -1) {
        this.selectedSpecies.splice(index, 1);
      }
    console.log(this.selectedSpecies)
  }
}

selectVarieties(variety:string){
  if(!this.selectedVarieties.includes(variety)){
    this.selectedVarieties.push(variety)
    console.log(this.selectedVarieties)
  }else{
    const index = this.selectedVarieties.indexOf(variety);
      if (index > -1) {
        this.selectedVarieties.splice(index, 1);
      }
    console.log(this.selectedVarieties)
  }
}

selectFarmingMethods(method:string){
  if(!this.selectedFarmingMethods.includes(method)){
    this.selectedFarmingMethods.push(method)
    console.log(this.selectedFarmingMethods)
  }else{
    const index = this.selectedFarmingMethods.indexOf(method);
      if (index > -1) {
        this.selectedFarmingMethods.splice(index, 1);
      }
    console.log(this.selectedFarmingMethods)
  }
}

selectProcessingMethods(method:string){
  if(!this.selectedProcessingMethods.includes(method)){
    this.selectedProcessingMethods.push(method)
    console.log(this.selectedProcessingMethods)
  }else{
    const index = this.selectedProcessingMethods.indexOf(method);
      if (index > -1) {
        this.selectedProcessingMethods.splice(index, 1);
      }
    console.log(this.selectedProcessingMethods)
  }
}

selectDryingMethods(method:string){
  if(!this.selectedDryingMethods.includes(method)){
    this.selectedDryingMethods.push(method)
    console.log(this.selectedDryingMethods)
  }else{
    const index = this.selectedDryingMethods.indexOf(method);
      if (index > -1) {
        this.selectedDryingMethods.splice(index, 1);
      }
    console.log(this.selectedDryingMethods)
  }
}

selectCertificationType(method:string){
  if(!this.selectedCertificationTypes.includes(method)){
    this.selectedCertificationTypes.push(method)
    console.log(this.selectedCertificationTypes)
  }else{
    const index = this.selectedCertificationTypes.indexOf(method);
      if (index > -1) {
        this.selectedCertificationTypes.splice(index, 1);
      }
    console.log(this.selectedCertificationTypes)
  }
}


toggleIsEstateFarmer() {
  if (this.activatedTabIndex == 0) {
    this.isEstateFarmer = false;
  }
  else {
    this.isEstateFarmer = true;
  }
  
  console.log(this.isEstateFarmer)
  if(!this.isEstateFarmer){
    this.firstFormGroup = this._formBuilder.group({
      county: ['', Validators.required],
      country:['',Validators.required],
      wet_mill_name: ['', Validators.required],
      society_name: ['', Validators.required],
      factory_chairman: ['', Validators.required],
      factory_manager: ['', Validators.required],
      no_of_farmers: ['', Validators.required],
      men:['',Validators.required],
      women:['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      total_acreage: ['', Validators.required],
      no_of_trees: ['', Validators.required],
      altitude: ['', Validators.required],
      harvest_season: ['', Validators.required],
      annual_rainfall_amount: ['', Validators.required],
      coffee_variety: ['', Validators.required],
      farming_method:['',Validators.required],
      certification_type: ['', Validators.required],
      soil_type: ['',Validators.required],
      processing_method: ['',Validators.required],
      cupping_notes: ['',Validators.required],
      availability: ['', Validators.required],
      grower_history:['',Validators.required],
      location: ['', Validators.required],
      farm_area: ['', Validators.required],
    });
  }else{
    this.firstFormGroup = this._formBuilder.group({
      county: ['', Validators.required],
      country:['',Validators.required],
      estate_name: ['', Validators.required],
      factory_manager: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      total_acreage: ['', Validators.required],
      no_of_trees: ['', Validators.required],
      altitude: ['', Validators.required],
      harvest_season: ['', Validators.required],
      annual_rainfall_amount: ['', Validators.required],
      coffee_variety: ['', Validators.required],
      farming_method:['',Validators.required],
      certification_type: ['', Validators.required],
      soil_type: ['',Validators.required],
      processing_method: ['',Validators.required],
      cupping_notes: ['',Validators.required],
      availability: ['', Validators.required],
      grower_history:['',Validators.required],
      location: ['', Validators.required],
      farm_area: ['', Validators.required],
    });
  }
  }


}
