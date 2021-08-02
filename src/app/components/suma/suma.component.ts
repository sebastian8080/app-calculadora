import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  numero1: number;
  numero2: number;
  total: number;
  @Output() resultado = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  sumar():void{
    this.total = this.numero1 + this.numero2;
    this.resultado.emit(this.total);
  }

}
