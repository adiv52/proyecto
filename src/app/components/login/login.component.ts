import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../user/auth.service';
import { User } from '../../../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {login: "", passwd:"", token:""};
  recordar = false;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('login')){
      this.user.login = localStorage.getItem('login') || "" ;
      this.recordar = true;
    }
  }

  login(){
    
    this.auth.authUser(this.user, this.recordar).subscribe(
      u => {
        console.log(u);
        this.user = u;
      },
      e => console.log(e)
    );
  }
}
