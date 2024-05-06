import { Component } from '@angular/core';
import { User } from '../models/user';
import { OfsServiceService } from '../ofs.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  
  constructor(private service:OfsServiceService){}
  
  users:User=new User();
  userName:string=localStorage.getItem('session');
  canUpdate:boolean=true;

  updateToggler(){
    if(this.canUpdate===true){
      this.canUpdate=false;
    }
    else{
      this.canUpdate=true;
    }
  }

  ngOnInit():void{
    this.service.getUserByUserName(this.userName).subscribe((data:User)=>{
      console.log(data);
      this.users=data;
    })
    
  }
  
  updateTheUser() {
    localStorage.setItem('session',this.users.userName);
    this.service.updateUser(this.users).subscribe((data:User)=>{
      console.log(data);
      alert("User details updated.")
    });
    setTimeout(() => {
    window.location.reload();
    }, 1000);
  }


}
