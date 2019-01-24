import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userClaims: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;

    });
  }

  Logout(uid) {    
    this.userService.userLogout(uid).subscribe((data : any)=>{
      localStorage.removeItem('userToken');
      this.router.navigate(['/login']);
    },
    (err : HttpErrorResponse)=>{
      //this.isLoginError = true;
    });
  }
  UpdatePassword(){    
    this.router.navigate(['/updatePass']);
  }


}
