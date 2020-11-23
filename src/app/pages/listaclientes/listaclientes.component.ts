import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/service/cliente/cliente.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.css']
})
export class ListaclientesComponent implements OnInit {


  displayedColumns = ['nombres', 'apellidos', 'edad', 'fechaNacimiento', 'fechaprobMuerte'];
  dataSource: MatTableDataSource<any>;

  promedioEdad: number;
  desviacionestandarEdad: any;


  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.clienteService.getlients().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      let edades = []
      data.forEach(e => {
        edades.push(e.edad);
      })



      data.map(function (obj) {

        var date = new Date(obj.fechaNacimiento)
        date.setFullYear(date.getFullYear() + 74);
        date.setMonth(date.getMonth() + randonNumber(1, 12));
        date.setDate(date.getDate() + randonNumber(1, 28));
        obj['fechaprobMuerte'] = date;
        return obj;
      });
      console.log(data)

      this.dataSource = new MatTableDataSource(data)


      this.promedioEdad = this.ObtenerPromedio(edades);
      this.desviacionestandarEdad = this.ObtenerDesviacionestandar(edades);
    })



  }


  ObtenerPromedio(edades: number[]) {
    let suma = 0;
    edades.forEach(e => {
      suma = suma + e;
    });
    return suma / edades.length;
  }


  ObtenerDesviacionestandar(edades: number[]) {

    const promedio = this.ObtenerPromedio(edades);

    const squareDiffs = edades.map(function (value) {
      const diff = value - promedio;
      const sqrDiff = diff * diff;
      return sqrDiff;
    });

    const avgSquareDiff = this.ObtenerPromedio(squareDiffs);
    return (Math.sqrt(avgSquareDiff)).toFixed(2);
  }


}

function randonNumber(n1: number, n2: number) {
  return Math.floor(Math.random() * n2) + n1
}

