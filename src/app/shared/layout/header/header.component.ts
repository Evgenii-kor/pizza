import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/auth/auth.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public cartService: CartService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  logIn(){
    this.authService.logIn();
  }

  logOut(){
    this.authService.logOut();
  }
}
