import { Component,OnInit,Inject,Input,Output,EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from 'src/app/ProductsService/products.service';

@Component({
  selector: 'app-newprocessedproduct',
  templateUrl: './newprocessedproduct.component.html',
  styleUrls: ['./newprocessedproduct.component.css']
})
export class NewprocessedproductComponent {
  @Input() id:number = 0;
  firstFormGroup!: FormGroup;
  img: any;
  quantity: any;
  constructor(public form:FormBuilder,private product:ProductsService,public dialogRef: MatDialogRef<NewprocessedproductComponent>,@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit() {
    this.firstFormGroup = this.form.group({
      img: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  onImageChange(event:any){
    this.img = event.target.files[0]
  }

  @Output() formSubmitEvent = new EventEmitter<FormData>();

  PostProduct(id:any){
    console.log(this.img)
    let form = new FormData();
    form.append('img',this.img),
    form.append('quantity',this.quantity),
    this.product.addPRocessedProduct(form,id)
    this.dialogRef.close();
  }

  postProduct(){
    let form = new FormGroup({
      warehouser:new FormControl(this.firstFormGroup.controls['img'].value),
      quantity: new FormControl(this.firstFormGroup.controls['quantity'].value),
    });
    this.dialogRef.close();
    console.log(form.value)
  }

}
