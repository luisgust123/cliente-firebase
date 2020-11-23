import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreaclienteComponent } from './pages/creacliente/creacliente.component';
import { ListaclientesComponent } from './pages/listaclientes/listaclientes.component';
import { KpiclientesComponent } from './pages/kpiclientes/kpiclientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatPaginatorModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    CreaclienteComponent,
    ListaclientesComponent,
    KpiclientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
