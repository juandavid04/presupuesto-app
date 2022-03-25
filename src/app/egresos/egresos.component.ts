import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  constructor() { }

  @Input() descripcion: string = "";
  @Input() valor      : string = "";
  @Input() porcentaje : string = "";

  ngOnInit(): void {
  }

}
