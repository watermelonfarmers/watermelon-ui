import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public user = {
  "firstName": "",
  "lastName": "",
  "password": "",
  "userName": "",
};
  constructor(private userService: UserService, private router: Router) {

   }

  ngOnInit() {
  }



  registerUser() {
    if(!this.user.firstName || !this.user.lastName || !this.user.userName || !this.user.password){
      alert("Please fill in all the fields.");
      return;
    }
    this.userService.registerUser(this.user).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log("The error is ", error);
      if(error.status === 200 && error.statusText === "OK"){
        this.router.navigate(["/login"]);
        return;
      }
      alert("Something happened, please try again.")
    });
  }
}
