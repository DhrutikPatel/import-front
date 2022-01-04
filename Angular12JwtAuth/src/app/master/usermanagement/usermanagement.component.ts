import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  
  form : any = {
    firstname: null,
    lastname: null,
    email: null,
    mobilenumber: null,
    role: null,
    department: null,
  }
  constructor() { }

  ngOnInit(): void {
  }
  onsubmitusermanagement(){
   const {firstName, lastName,email,mobilenumber,role,department} = this.form;
   console.log(this.form);
  }
}
