import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComentarioListComponent } from './components/comentario-list/comentario-list.component';
import { ComentarioAddComponent } from './components/comentario-add/comentario-add.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:'', component:ComentarioListComponent}, //http://localhost:4200
  {path:'comentario/add', component:ComentarioAddComponent}, //http://localhost:4200/comentario/add
];

@NgModule({
  declarations: [
    AppComponent,
    ComentarioListComponent,
    ComentarioAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
