import { Component, OnInit } from '@angular/core';
import { EgresosService } from './egresos.service';
import { IngresosService } from './ingresos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  title = 'presupuesto-app';

  ingresosTotal: number = this.ingresosService.getTotal();
  egresosTotal: number = this.egresosService.getTotal();
  porcentaje: number = +(this.egresosTotal/this.ingresosTotal*100).toFixed(2)

  constructor(private ingresosService: IngresosService,
              private egresosService:  EgresosService) { }

  ingresos = null; 
  egresos  = null;

  ngOnInit(): void {
      this.ingresos = this.ingresosService.getIngresos();
      this.egresos  = this.egresosService.getEgresos();
  }
}
