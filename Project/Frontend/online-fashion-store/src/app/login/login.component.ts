import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfsServiceService } from '../ofs.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userName:string='';
  password:string='';
  login=false;
constructor(private service:OfsServiceService,private router:Router){
  if(localStorage.getItem('type')==='user'){
    this.router.navigate(['/homepage']);
  }
}

  users:User[];


  saveData(){
    this.service.getUsers().subscribe((data:User[])=>{
      this.users=data;
    
      if(this.userName==='admin' && this.password==='admin'){
        this.router.navigate(['/admin']);
        localStorage.setItem('session',this.userName);
        localStorage.setItem('type','admin');
        this.login=true;
      }else{
        for(let i=0;i<this.users.length;i++){
          if(this.users[i].userName===this.userName&&this.users[i].password===this.password){
            localStorage.setItem('session',this.userName);
            localStorage.setItem('type','user');
            this.router.navigate(['/homepage']);
            this.login=true;
          }

        }
      }

      if(!this.login){
        alert("Invalid Log In");
      }

    })
    }
  
 
}


