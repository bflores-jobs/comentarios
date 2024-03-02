import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComentarioListComponent } from './components/comentario-list/comentario-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComentarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ComentarioListComponent]
})
export class AppModule { }
