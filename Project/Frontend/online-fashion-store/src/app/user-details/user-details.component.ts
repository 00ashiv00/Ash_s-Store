import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { OfsServiceService } from '../ofs.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {




  constructor(private service: OfsServiceService) { }

  ngOnInit(): void {
    this.service.getUserByUserName(this.userName).subscribe((data: User) => {
      console.log(data);
      this.users = data;

      this.form.setValue({
        name: this.users.fullName,
        userId:this.users.userId,
        userName:this.users.userName,
        password:this.users.password,
        gender:this.users.gender,
        address:this.users.address,
        email:this.users.email,
        mnumber:this.users.mobileNo
        
      });

      this.form.get('name')?.disable();
      this.form.get('userId')?.disable();
      this.form.get('userName')?.disable();
      this.form.get('address')?.disable();
      this.form.get('password')?.disable();
      this.form.get('email')?.disable();
      this.form.get('mnumber')?.disable();
      this.form.get('gender')?.disable();

    })


  }

  users: User = new User();
  userName: string = localStorage.getItem('session');
  canUpdate: boolean = true;


  form: FormGroup = new FormGroup({
    name: new FormControl(this.users.userName, Validators.required),
    userId: new FormControl(this.users.userId, Validators.required),
    userName: new FormControl(this.users.userName, Validators.required),
    password: new FormControl(this.users.password, [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
    ]),
    gender: new FormControl(this.users.gender, Validators.required),
    address: new FormControl(this.users.address, Validators.required),
    email: new FormControl(this.users.email, [Validators.email, Validators.required]),
    mnumber: new FormControl(this.users.mobileNo, [Validators.required, Validators.pattern('(?=.*[0-9]).{10,}')]),
  });

  updateToggler() {
    if (this.canUpdate === true) {
      this.canUpdate = false;
      this.form.get('name')?.enable();
      this.form.get('userName')?.enable();
      this.form.get('address')?.enable();
      this.form.get('password')?.enable();
      this.form.get('email')?.enable();
      this.form.get('mnumber')?.enable();
      this.form.get('gender')?.enable();
    }
    else {
      this.ngOnInit();
      this.canUpdate = true;
      this.form.get('name')?.disable();
      this.form.get('userName')?.disable();
      this.form.get('address')?.disable();
      this.form.get('password')?.disable();
      this.form.get('email')?.disable();
      this.form.get('mnumber')?.disable();
      this.form.get('gender')?.disable();

    }
  }






  updateTheUser() {
    this.users.fullName = this.form.get('name').value;
    this.users.userName = this.form.get('userName').value;
    this.users.address = this.form.get('address').value;
    this.users.password = this.form.get('password').value;
    this.users.email = this.form.get('email').value;
    this.users.mobileNo = this.form.get('mnumber').value;
    this.users.gender = this.form.get('gender').value;
    localStorage.setItem('session', this.users.userName);
    this.service.updateUser(this.users).subscribe((data: User) => {
      console.log(data);
      alert("User details updated.")
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }


}
