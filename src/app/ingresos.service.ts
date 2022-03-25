import { Injectable } from "@angular/core";
import { EgresosService } from "./egresos.service";


export class IngresosService{
    ingresos :string[][]  = new Array()

    //constructor(private egresosServive: EgresosService){}

    agregarIngresos(descripcion: string, valor: number){
        let valorS  = ''+valor
        this.ingresos.push([descripcion,valorS]);
        //this.egresosServive.actualizar()
    }

    getIngresos(){
        console.log("Ingreso Service")
        console.log(this.ingresos)
        return this.ingresos;
    }

    getTotal(){
        let total = 0;
        this.ingresos.forEach(element => {
            total += +element[1];
        });
        return total;
    }
}