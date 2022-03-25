import { Component, OnInit } from '@angular/core';
import { EgresosService } from '../egresos.service';
import { IngresosService } from '../ingresos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  constructor(private ingresosService: IngresosService,
              private egresosService:  EgresosService) { }

  tipo:        string = "ing";
  descripcion: string = "";
  valor:       number = 0 ;
  
  agregar(){
    if(this.tipo == "ing"){
      this.ingresosService.agregarIngresos(this.descripcion,this.valor);
      console.log("Agrego un Ingreso");
      this.egresosService.actualizar();
    }else if(this.tipo == "egr"){
      this.egresosService.agregarEgresos(this.descripcion,this.valor)
      console.log("Agrego un Egreso");
    }
    console.log(this.ingresosService.ingresos);
    console.log(this.descripcion)
    console.log(this.valor)
    console.log(this.tipo)
  }

}
