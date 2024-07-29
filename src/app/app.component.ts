import { Component, OnInit } from '@angular/core';
import { CardsComponent } from './ui/cards/cards.component';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from './ui/card-list/card-list.component';
import { BtnComponent } from "./btn/btn.component";
import { NavbarComponent } from "./ui/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, CardListComponent, BtnComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'prodcut-app'
  handleEvent(){
    alert("Login");
  }
}
 