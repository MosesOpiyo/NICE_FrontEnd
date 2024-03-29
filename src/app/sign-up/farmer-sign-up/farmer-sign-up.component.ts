import { Component,ElementRef,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/AuthService/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPasswordStrengthMeterService } from 'angular-password-strength-meter';
import { LoginComponent } from 'src/app/login/login.component';
import { countryCodes } from './country-dial-codes';

@Component({
  selector: 'app-farmer-sign-up',
  templateUrl: './farmer-sign-up.component.html',
  styleUrls: ['./farmer-sign-up.component.css']
})
export class FarmerSignUpComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FarmerSignUpComponent>,
    private dialog:MatDialog,
    public service: AuthenticationService,
    private snackbar:MatSnackBar,
    private checker:IPasswordStrengthMeterService,
    private el: ElementRef,
  ){}
  username:any;
  email: any;
  phone_number: any;
  dialCode:any
  fullPhoneNumber:any
  countries:any;
  password: any;
  confirm_password:any
  is_estate:any
  is_producer:any;
  is_warehouser:any;
  isPasswordVisible = false;
  showDropdown: boolean = false;
  filteredCountryCodes: any[] = [];
  countryInput:any

  ngOnInit(): void {
    this.countries = countryCodes
  }

  filterCountryCodes(): void {
    this.filteredCountryCodes = this.countries.filter(country =>
      country.name.toLowerCase().includes((this.countryInput.toLowerCase())) ||
      country.code.includes(this.countryInput)
    );
    this.showDropdown = this.filteredCountryCodes.length > 0;
  }

  clearCodeField(){
    this.countryInput = ""
  }
  
  selectCountryCode(country: any): void {
    this.countryInput = country.code + ' (' + country.dial_code + ')';
    this.dialCode = country.dial_code
    this.showDropdown = false;
  }

  registerBuyer(){
    if(this.checker.score(this.password) < 2){
      this.snackbar.open("Password is too weak. Try S Password", 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    }
    if(this.password != this.confirm_password){
      this.snackbar.open("Password confirmation does not match. Try again", 'Close', {
        duration: 3000,
        panelClass: ['blue-snackbar']
      });
    }
    
    if(this.checker.score(this.password) >= 3 && this.password == this.confirm_password){
      this.fullPhoneNumber = this.dialCode + this.phone_number
      let form = new FormData();
      form.append('username',this.username),
      form.append('email',this.email),
      form.append('phone_number',this.fullPhoneNumber),
      form.append('password',this.password),
      form.append('is_estate',this.is_estate)
      console.log(form)
      this.service.farmerRegister(form,this.email)
      this.dialogRef.close()
    }
   
  }
  
  

  togglePasswordVisibility() {
  this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleIsEstateFarmer() {
    this.is_estate = !this.is_estate;
  }

  showLoginDialog(){
    this.dialogRef.close()
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '90vh',
      data: {
        isBuyer: false
      }
    });
  }

}
