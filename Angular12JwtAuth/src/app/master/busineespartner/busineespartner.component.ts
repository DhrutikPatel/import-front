import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busineespartner',
  templateUrl: './busineespartner.component.html',
  styleUrls: ['./busineespartner.component.css']
})
export class BusineespartnerComponent implements OnInit {

  customer = true;

  form: any = {
    name : null,
    email: null,
    mobilenumber: null
  }

  addVendor : any = {
    companyName: null,
    companyEmail: null,
    companyMobile: null,
    website: null,
    address1: null,
    address2: null,
    vendorCountry: null,
    vendorState: null,
    vendorCity: null,
    vendorZipCode: null,
    hsmItem: null,
    hsmCode: null,
    gstNumber: null,
    ieCode: null,
    bankName: null,
    bankCode: null,
    vendorName: null,
    vendorEmail: null,
    vendorMobile: null,
    gstDocument: null
  };

  constructor() { }
  ngOnInit(): void {
  }

  toggleCustomer(){
    this.customer = true;
  }

  toggleVendor(){
    this.customer = false;
  }

  onCountryChange(event: any){
    console.log(event);
  }
  
  onSubmit(): void{
    const {name,email,mobilenumber} = this.form;
    console.log(this.form);  
  }

  onSubmitVendor(){
    console.log(this.addVendor);
  } 

}
