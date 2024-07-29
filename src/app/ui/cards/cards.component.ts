import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interface/productinterface';
import { NgOptimizedImage } from '@angular/common';

 
 
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() product: Product = {
    id: 0,
    title: " ",
    description: "",
    thumbnail:"",
    category: ""
  };
  // clickMe():void{
  //   alert("clicked");
  // }
  @Output() myEvent=new EventEmitter<number>()
 
emitEvent(){
  this.myEvent.emit(this.product.id)
 
}
}