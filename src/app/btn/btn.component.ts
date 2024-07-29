import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
@Input()  text: string | undefined;
@Output() MyEvent = new EventEmitter<string>();

emitEvent(){
  this.MyEvent.emit("HelloWorld");
}
}
