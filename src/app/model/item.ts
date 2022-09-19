export class Item {
  name: string;
  value: Number;
  constructor(name: string, value: Number) {
    this.name = name;
    this.value = value;
  }

  public static clone(item: Item) {
    let i: Item = new Item(item.name, item.value);
    i.name = item.name;
    i.value = item.value;
    return i;
  }
}
