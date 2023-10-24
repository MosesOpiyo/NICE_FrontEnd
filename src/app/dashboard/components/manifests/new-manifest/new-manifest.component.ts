import { Component,OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReplaySubject, Subject } from 'rxjs';
import { WarehouseService } from 'src/app/Service/Warehouse/warehouse.service';

@Component({
  selector: 'app-new-manifest',
  templateUrl: './new-manifest.component.html',
  styleUrls: ['./new-manifest.component.css']
})
export class NewManifestComponent implements OnInit {
  public warehouserCtrl: FormControl = new FormControl();
  public warehouserFilterCtrl: FormControl = new FormControl();
  warehousers:any
  warehouser:any
  quantity:any
  product:any
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
