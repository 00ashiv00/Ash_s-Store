import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfsServiceService } from '../ofs.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

bToLogin() {
  this.router.navigate([''])
}


  user:User=new User();

  constructor(private service:OfsServiceService,private router:Router){}

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mnumber: new FormControl('', Validators.required),
  });

  newUser() {
    this.service.createNewUser(this.user).subscribe(data=>{
      console.log(data);
    })

    this.router.navigate(['']);
  }
  

  

}
