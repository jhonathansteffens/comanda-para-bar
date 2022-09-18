import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myImage: String;
  constructor() {
    this.myImage = "../../assets/images/bar-adelar.png"
  }

  ngOnInit(): void {
  }

  onButtonPedidoClick() {
    alert("Clicou em um novo pedido");
  }

  onButtonCadastrarItemClick() {
    alert("Clicou para cadastrar um item");
  }


}
