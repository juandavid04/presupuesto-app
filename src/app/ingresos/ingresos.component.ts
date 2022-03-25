import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  constructor() { }

  @Input() descripcion: string = "";
  @Input() valor      : string = "";

  ngOnInit(): void {
  }

}
