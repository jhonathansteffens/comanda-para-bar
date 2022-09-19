import { RegisterItemService } from './register-item-service';
import { Item } from './../model/item';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-register-item',
  templateUrl: './register-item.component.html',
  styleUrls: ['./register-item.component.css']
})
export class RegisterItemComponent implements OnInit {

  constructor(private itemService: RegisterItemService ) { }

  @ViewChild('form') form!: NgForm;

  item!: Item;
  items?: Item[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.item = new Item('', 0);
    this.items = this.itemService.getItems();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.itemService.isExist(this.item.name)) {
      this.itemService.save(this.item);
    } else {
      this.itemService.update(this.item);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.item = new Item('', 0);
    this.items = this.itemService.getItems();
  }

}


