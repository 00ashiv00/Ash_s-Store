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
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}')
    ]),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email,Validators.required]),
    mnumber: new FormControl('', [Validators.required,Validators.pattern('(?=.*[0-9]).{10,}')]),
  });

  newUser() {
    this.user.fullName=this.form.get('name').value;
    this.user.userName=this.form.get('userName').value;
    this.user.password=this.form.get('password').value;
    this.user.gender=this.form.get('gender').value;
    this.user.address=this.form.get('address').value; 
    this.user.email=this.form.get('email').value; 
    this.user.mobileNo=this.form.get('mnumber').value; 
    this.service.createNewUser(this.user).subscribe(data=>{
      console.log(data);
    })

    this.router.navigate(['']);
  }
  

  

}
