import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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
  constructor(private userService: UserService) { }

  ngOnInit() {
  }


  login(){
    if(!this.user.name || !this.user.password){
      alert("Please enter something.");
      return;
    }
    this.userService.loginUser(this.user).subscribe((response) => {
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response));
    });
  }
}
