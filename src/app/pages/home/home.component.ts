import { DatePipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../../highlight.directive';
import { CardListComponent } from "../../ui/card-list/card-list.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, SlicePipe, DatePipe, HighlightDirective, CardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
time:number=Date.now();
isActive = false
}
