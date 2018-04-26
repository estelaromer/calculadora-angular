import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],

})
export class CalculadoraComponent implements OnInit {
  operacion: string;
  resultado: string;
  botones: Array<string>;
  constructor() {
    this.operacion = '';
    this.resultado = '';
    this.botones = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '=', '%', '/'];
  }


  recogerOperacion(pDato: string) {
    this.resultado = '';
    if (pDato !== ' = ') {
      this.operacion += pDato;
    } else {
      this.calcularResultado(this.operacion);
      this.operacion = '';
    }
  }

  calcularResultado(pOperacion) {
    let resultado: number;
    const res = pOperacion.split(' ');
    switch (res[1]) {
      case '+':
        resultado = Number(res[0]) + Number(res[2]);
        break;
      case '-':
        resultado = Number(res[0]) - Number(res[2]);
        break;
      case '*':
        resultado = Number(res[0]) * Number(res[2]);
        break;
      case '/':
        resultado = Number(res[0]) / Number(res[2]);
        break;
      case '%':
        resultado = Number(res[0]) * Number(res[2]) / 100;
        break;
      default:
        break;
    }

    this.resultado = String(resultado);
  }
  ngOnInit() {
  }

}
