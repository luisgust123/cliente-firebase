import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/service/cliente/cliente.service';

@Component({
  selector: 'app-creacliente',
  templateUrl: './creacliente.component.html',
  styleUrls: ['./creacliente.component.css']
})
export class CreaclienteComponent implements OnInit {

  cliente: Cliente;
  form: FormGroup;
  value = 'Clear me';
    constructor(private clienteService: ClienteService) { }

  ngOnInit() {


    this.cliente = new Cliente();

    this.cliente.nombre = "";
    this.cliente.apellido = "";
    this.cliente.edad = 0;
    this.cliente.fechaNacimiento = new Date("2000-01-01");



  }

  crearCliente(){

    this.clienteService.createClient(this.cliente)


  }




}
