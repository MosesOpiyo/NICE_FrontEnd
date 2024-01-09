import { Component,ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../AuthService/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';
import { IPasswordStrengthMeterService } from 'angular-password-strength-meter';
import { countryCodes } from './farmer-sign-up/country-dial-codes';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(
    public dialogRef: MatDialogRef<SignUpComponent>,
    private dialog:MatDialog,
    public service: AuthenticationService,
    private snackbar:MatSnackBar,
    private checker:IPasswordStrengthMeterService,
    private el: ElementRef
  ){
    
  }
  username:any;
  email: any;
  phone_number: any;
  dialCode:any
  fullPhoneNumber:any
  password: any;
  confirm_password:any
  is_producer:any;
  is_warehouser:any;
  isPasswordVisible = false;
  countries:any;
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
      this.snackbar.open("Password is too weak. Try Another Password", 'Close', {
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
      form.append('session',localStorage.getItem('session'))
      this.service.Register(form)
      this.dialogRef.close()
    }
   
  }
  

  togglePasswordVisibility() {
  this.isPasswordVisible = !this.isPasswordVisible;
  }
  
  showLoginDialog(){
    this.dialogRef.close()
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '25pc',
      maxWidth: '90vw',
      autoFocus: false,
      maxHeight: '90vh',
      data: {
        isBuyer: true
      }
    });
  }

}
