import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConfigService } from 'src/services/cep.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [
    ConfigService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
