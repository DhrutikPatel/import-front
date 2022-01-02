import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent implements OnInit {

  form: any = {
     portname: null,
     portcontactname: null,
     portcontactnumber: null,
     portcontactemail: null,
     country: null,
     state: null,
     city: null,
     pincode: null
  }

  constructor() { }
  ngOnInit(): void {
  }

  onSubmitport(): void {
    const {portname, portcontactname, portcontactnumber, portcontactemail,country, state, city}= this.form;
    console.log(this.form);
  }
}
