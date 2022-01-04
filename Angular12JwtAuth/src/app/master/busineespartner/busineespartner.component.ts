import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busineespartner',
  templateUrl: './busineespartner.component.html',
  styleUrls: ['./busineespartner.component.css']
})
export class BusineespartnerComponent implements OnInit {

  customer = true;

  form1: any = {
    name : null,
    email: null,
    mobile: null 
  } 
 
  form: any = {
   category: null,
   subcategory: null,
   name: null,
   type:null,
   state: null,
   city: null,
   zipcode: null,
   currency: null,
   quantity: null,
   date: null
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


  onSubmitcustomer(): void{
    const {name,email,mobilenumber} = this.form1;
    console.log(this.form1);  
  }

  onSubmitVendor(){
    console.log(this.addVendor);
  } 
  
  onSubmitvendor(): void{
    const { category,subcategory,name,type,state,city,zipcode,currency,quantity,date} = this.form;
    console.log(this.form);  
  }

  nonNeg(value : Number){
    console.log(value);
    return (value > 0);
  }
  
}
