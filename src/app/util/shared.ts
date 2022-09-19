import { Item } from './../model/item';
import { Constants } from './constants-util';

export class Shared {
  constructor() {}

  /**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
  public static initializeWebStorage(): void {

    let item = new Item('Brahma', 10);

    localStorage.setItem(Constants.ITEM_KEY, JSON.stringify(item));
    localStorage.setItem(Constants.ITEMS_KEY, JSON.stringify([]));
  }
}
