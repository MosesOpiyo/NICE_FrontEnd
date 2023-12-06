import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from '../AuthService/authentication.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  constructor(
    public dialogRef: MatDialogRef<VerificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: AuthenticationService
  ){}
  code:any

  verifyCode(){
    let form = new FormData();
      form.append('email',this.data.email),
      form.append('code',this.code),
      this.service.verification(form)
      this.dialogRef.close()
  }

}
