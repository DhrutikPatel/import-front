import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencysettings',
  templateUrl: './currencysettings.component.html',
  styleUrls: ['./currencysettings.component.css']
})
export class CurrencysettingsComponent implements OnInit {

  form: any = {
    countryname: null,
    currenyname: null,
    currencyfullnumber: null,
    currencyshortcode: null,
    currencysymbol : null
  }  
 
  onsubmitcurrencysettings(){
    const {countryname, currenyname, currencyfullnumber,currencyshortcode, currencysymbol} = this.form;
    console.log(this.form);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
