import { Injectable } from '@angular/core';
import { IngresosService } from './ingresos.service';

@Injectable()
export class EgresosService {
  egresos: string[][] = new Array();

  constructor(private ingresosService: IngresosService) {}

  agregarEgresos(descripcion: string, valor: number) {
    let valorS = '' + valor;
    let totalIngresos = this.ingresosService.getTotal();
    let porcentaje = '0';
    if (totalIngresos > 0) {
      let num = (valor / totalIngresos) * 100;
      porcentaje = '' + num.toFixed(2);
    }

    this.egresos.push([descripcion, valorS, porcentaje]);
  }

  getEgresos() {
    console.log('Egreso Service');
    console.log(this.egresos);
    return this.egresos;
  }

  getTotal() {
    let total = 0;
    this.egresos.forEach((element) => {
      total += +element[1];
    });
    return total;
  }

  actualizar() {
    let totalIngresos = this.ingresosService.getTotal();

    for (let index = 0; index < this.egresos.length; index++) {
      let valor = +this.egresos[index][1];
    
      let porcentaje = '0';
      if (totalIngresos > 0) {
        let num = (valor / totalIngresos) * 100;
        porcentaje = '' + num.toFixed(2);
        this.egresos[index][2] = porcentaje;
      }
     
    }
  }
}
