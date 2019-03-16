import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AuthenticationService } from "../../../services/authentication.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.maxLength(20)]),
    'password': new FormControl('', [Validators.required, Validators.maxLength(20)])
  });

  constructor(private authenticationService: AuthenticationService,
              private router: Router, 
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  login() {
    if (this.loginForm.invalid) {return}
    this.authenticationService.authenticateUser(this.loginForm.get("username").value, this.loginForm.get("password").value)
      .subscribe(response => this.router.navigate(['']),
      error => this.handleError(error));

  }

  handleError(error: any) {

      if (error.status == "401") {
        this.openSnackBar("invalid username or password, please try again", "dismiss");
      }
      else if (error.status == "0") {
        this.openSnackBar("service temporarily unavailable", "dismiss");
      }
      
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 20000,
      panelClass: ['red-snackbar'],
    });
  }
}
