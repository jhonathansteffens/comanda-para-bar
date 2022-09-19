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
    location.href =  document.location.hostname + '/order';
  }

  onButtonCadastrarItemClick() {
    location.href =  document.location.hostname + '/register';
  }


}
