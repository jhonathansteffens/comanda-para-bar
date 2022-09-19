import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-item-order',
  templateUrl: './card-item-order.component.html',
  styleUrls: ['./card-item-order.component.css']
})
export class CardItemOrderComponent implements OnInit {

  valor: number;
  quantidade: number;

  @Output() newTask = new EventEmitter<Number> ();
  constructor() {
    this.quantidade = 0;
    this.valor = 10;
   }

  ngOnInit(): void {
  }

  onKeyUp(event: any): void {
    console.log(event);
    this.quantidade = event.target.value * this.valor;
    this.newTask.emit(this.quantidade);
  }

}
