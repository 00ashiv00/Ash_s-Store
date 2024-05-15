import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../models/user';
import { OfsServiceService } from '../ofs.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  authenticated:boolean=false;
  username:string='';
  phone:string='';
  password:string='';
  email:string='';
  users:User[]=[];
  user:User=new User();

  constructor(private service:OfsServiceService,private router:Router){
    this.service.getUsers().subscribe((data:User[])=>{
      this.users=data;

    })
  }

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email,Validators.required]),
    mnumber: new FormControl('', [Validators.required,Validators.pattern('(?=.*[0-9]).{10,}')]),
  });


  formReset = new FormGroup({
    password: new FormControl('',[
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
    ]),
  });


  checkDetails(){
    for(let item of this.users){
      this.username=this.form.get('userName').value;
      this.phone=this.form.get('mnumber').value;
      this.email=this.form.get('email').value;
      if(item.userName===this.username){
        if(item.mobileNo===this.phone){
          if(item.email===this.email){
            this.user=item;
            this.authenticated=true;
          }
        }
      }
    }
    if(!this.authenticated){
      alert("Invalid details.");
    }
    
  }


  setPassword(){
    this.user.password=this.formReset.get('password').value;
    this.service.updateUser(this.user).subscribe(data=>{
      console.log(data);
    })

    alert("Password has been reset.");
    this.router.navigate(['']);
    
  }

}
