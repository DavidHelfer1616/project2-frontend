import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: {
    class: "page flex"
  }
})
export class LoginComponent implements OnInit {
  
  errorTextClass : string = "errorText login-white";
  errMessage : string = "Please Login";
  usernameInput : string="";  // It can also be the email
  passwordInput : string="";
  usernameErr:boolean = false;
  passErr:boolean = false;
  user : User = <User> {    
    email: "",
    username: "",
    password: ""    
  };
  
  constructor(private apiServ: ApiService, private dataServ: DataService) { }

  ngOnInit(): void {
    this.errorTextClass = "errorText login-white";
    this.errMessage = "Please Login";
    this.usernameErr = false;
    this.passErr=false;
    this.user.email="";
    this.user.username="";
    this.user.password="";
  }

  isValidEmail(email:string) : boolean
  {
      let success : boolean;

      let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      success = regexp.test(email);
      
      return success;
  }

  loginUserCallback(data:any) {
    console.log("loginUserCallback() entered")
    console.log("data.data="+data.data.id + " "+data.data.firstName)
    this.dataServ.user = <User>{  // Our session GET returns User
      firstName: data.data.firstName,
		  lastName: data.data.lastName,
		  username: data.data.username,
		  profileImageUrl: data.data.profileImageUrl
    };
    console.log("dataServ.user="+this.dataServ.user);
    this.dataServ.users[data.data.id] = <User>{
      firstName: data.data.firstName,
		  lastName: data.data.lastName,
		  username: data.data.username,
		  profileImageUrl: data.data.profileImageUrl
    };
    console.log("loginUserCallback() exited")
  }

  loginUser() {
    // Validate fields
    this.errorTextClass = "errorText";
    if (this.usernameInput.length<1) {
      this.errorTextClass = "errorText";
      this.errMessage = "Invalid Username."
      this.usernameErr = true;
      return;
    }

    if (this.passwordInput.length<8) {
      this.errorTextClass = "errorText";
      this.errMessage = "Invalid password, must be at least 8 characters."
      this.passErr = true;
      return;
    }

    this.errorTextClass = "errorText login-white";
    this.errMessage = "Please Login";
    this.usernameErr = false;
    this.passErr = false;

    if (this.isValidEmail(this.usernameInput)) {  // The username is an email so fill in user.email
      this.user.email = this.usernameInput;
    } else {
      this.user.username = this.usernameInput;
    }
    this.user.password = this.passwordInput;
    //this.apiServ.login(this.user, this.loginUserCallback);
    this.apiServ.login(this.user, (data : any) : void => {
      console.log("(data : any) : void => entered")
      console.log("data.data="+data.data.id + " "+data.data.firstName)
      this.dataServ.user = <User>{  // Our session GET returns User
        firstName: data.data.firstName,
        lastName: data.data.lastName,
        username: data.data.username,
        profileImageUrl: data.data.profileImageUrl
      };
      console.log("(data : any) : void =>...dataServ.user="+this.dataServ.user);
      this.dataServ.users[data.data.id] = <User>{
        firstName: data.data.firstName,
        lastName: data.data.lastName,
        username: data.data.username,
        profileImageUrl: data.data.profileImageUrl
      };
      console.log("(data : any) : void => exited")      
    });
  }
}
