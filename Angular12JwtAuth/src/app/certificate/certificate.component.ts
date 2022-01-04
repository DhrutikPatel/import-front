import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  

  form: any = {
     image : null,
     name: null,
     number: null
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  onsubmitcertificate(): void {

    const {image, name, number} = this.form;
    console.log(this.form);
  }
}
