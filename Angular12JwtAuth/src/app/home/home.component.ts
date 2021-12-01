import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

import { User } from '../objectClass/user';
import { Transaction} from '../objectClass/transaction';

import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;


  user: User = new User("","",0,"");
 
  transaction : Transaction =new Transaction(0,"","","");

  constructor(private userService: UserService) { }

 
  ngOnInit(): void {
    // this.userService.getPublicContent().subscribe(
    //   data => {
    //     this.content = data;
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );
  }



}