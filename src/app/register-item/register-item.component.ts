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

  submitted!: boolean;
  isShowMessage: boolean = false;
  success!: boolean;
  message!: string;

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.item = new Item('', 0);
    this.items = this.itemService.getItems();
  }

  onSubmit() {
    this.itemService
      .save(this.item)
      .then(() => {
        this.success = true;
        this.message =
          'Produto Cadastrado Com Sucesso!';
        this.submitted = true;
      })
      .catch((e) => {
        this.success = false;
        this.message = e;
      })
      .finally(() => {
        console.log('A operação foi finalizada!');
      });

    }

}


