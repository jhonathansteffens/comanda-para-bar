import { Item } from './../model/item';
import { Constants } from 'src/app/util/constants-util';
import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class RegisterItemService {
  items!: Item[];
  constructor() {
    this.items = WebStorageUtil.get(Constants.ITEMS_KEY);
  }

  save(item: Item) {
    const p = new Promise<Item>((resolve, reject) => {
      setTimeout(() => {
        const items = WebStorageUtil.get(Constants.ITEMS_KEY);
        items.push(item);
        WebStorageUtil.set(Constants.ITEMS_KEY, items);
        resolve(item);
      }, 5000);
    });
    return p;
  }

  update(item: Item) {
    this.items = WebStorageUtil.get(Constants.ITEMS_KEY);
    this.delete(item.name);
    this.save(item);
  }

  delete(name: string): boolean {
    this.items = WebStorageUtil.get(Constants.ITEMS_KEY);
    this.items = this.items.filter((u) => {
      return u.name?.valueOf() != name.valueOf();
    });

    WebStorageUtil.set(Constants.ITEMS_KEY, this.items);
    return true;
  }

  isExist(value: string): boolean {
    this.items = WebStorageUtil.get(Constants.ITEMS_KEY);
    for (let i of this.items) {
      if (i.name?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getItems(): Item[] {
    this.items = WebStorageUtil.get(Constants.ITEMS_KEY);
    return this.items;
  }
}
