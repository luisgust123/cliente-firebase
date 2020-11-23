import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Cliente } from 'src/app/model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private dbPath = '/clientes';

  clienteList: AngularFireList<Cliente> = null;
  selectedProduct: Cliente = new Cliente();

  constructor(private firebase: AngularFireDatabase) {

    this.clienteList = firebase.list(this.dbPath);
   }

  getlients(): AngularFireList<Cliente> {
    return this.clienteList;
  }

  createClient(cliente: Cliente) {
    this.clienteList.push(cliente);
  }

}
