import { Shared } from './../util/shared';
import { RegisterItemService } from './../register-item/register-item-service';
import { Constants } from 'src/app/util/constants-util';
import { WebStorageUtil } from './../util/web-storage-util';
import { Item } from './../model/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  item!: Item;
  items?: Item[];

  total: Number;
  constructor(private itemService: RegisterItemService) {
    this.total = 0.0;
   }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.item = new Item('', 0);
    this.items = this.itemService.getItems();
  }

  onChangeValor(valor: Number): void {
    this.total = valor;
  }

}
