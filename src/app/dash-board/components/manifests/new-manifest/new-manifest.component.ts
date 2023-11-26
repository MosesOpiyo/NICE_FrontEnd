import { Component,OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncPipe } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReplaySubject, Subject } from 'rxjs';
import { WarehouseService } from 'src/app/Service/Warehouse/warehouse.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-new-manifest',
  templateUrl: './new-manifest.component.html',
  styleUrls: ['./new-manifest.component.css']
})
export class NewManifestComponent implements OnInit {
  selectedOption: FormGroup;
  filteredOptions;
  warehousers:any
  warehouserFilter:any = []
  warehouser:any
  quantity:any
  product:any
  isLinear = true;
  firstFormGroup!: FormGroup;
  constructor(private warehouse:WarehouseService,public form:FormBuilder,public dialogRef: MatDialogRef<NewManifestComponent>,@Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit() {
    this.firstFormGroup = this.form.group({
      warehouser: ['', Validators.required],
      quantity: ['', Validators.required],
    });
    this.warehouse.getWarehousers().subscribe((res:any)=>{
      this.warehousers = res
    })
    this.firstFormGroup.get('warehouser').valueChanges.subscribe(response => {
      console.log('data is ', response);
      this.filterData(response);
    })
  }

  filterData(enteredData){
    this.filteredOptions = this.warehousers.filter(item => {
      return item.username.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  onKey(value:any) { 
    
    this.warehousers = this.search(value);
    }
  search(value: string) { 
    let filter = value.toLowerCase();
    return this.warehousers.filter((option: any) => option.toLowerCase().startsWith(filter));
  }

  postManifest(){
    let form = new FormGroup({
      warehouser:new FormControl(this.firstFormGroup.controls['warehouser'].value),
      quantity: new FormControl(this.firstFormGroup.controls['quantity'].value),
    });
    this.dialogRef.close();
    this.warehouse.createManifest(this.data.object.id,form.value)
    console.log(form.value)
  }
  

}
