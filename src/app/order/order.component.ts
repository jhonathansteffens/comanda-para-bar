import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  total: Number;
  constructor() {
    this.total = 0.0;
   }

  ngOnInit(): void {
  }

  onChangeValor(valor: Number): void {
    this.total = valor;
  }

}
