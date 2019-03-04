import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from "../../../services/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    name: "",
    password: "",
  };
  loginError: boolean = false;
  constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }


  login(){
    if(!this.user.name || !this.user.password){
      alert("Please enter something.");
      return;
    }
    // this.userService.loginUser(this.user).subscribe((response) => {
    //   console.log(response);
    //   localStorage.setItem("user", JSON.stringify(response));
    // });
    this.authenticationService.authenticateUser(this.user.name, this.user.password)
        .subscribe((authenticated: boolean) => {
            if (authenticated) {
                this.router.navigate(['']);
            }
            else {
                this.loginError = true;
            }
        });
  }
}
