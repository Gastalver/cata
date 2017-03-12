// Despliegue
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChisteComponent } from './chiste/chiste.component';
import { ListachistesComponent } from './listachistes/listachistes.component';

@NgModule({
  declarations: [
    AppComponent,
    ChisteComponent,
    ListachistesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
