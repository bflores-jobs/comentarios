import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../../service/comentario.service';
import { RegionService } from '../../service/region.service';
import { Comentario } from '../../model/comentario';
import { Region } from '../../model/region';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentario-edit',
  templateUrl: './comentario-edit.component.html',
  styleUrl: './comentario-edit.component.css'
})
export class ComentarioEditComponent {

  constructor(private router : Router, private comentarioService : ComentarioService, private regionService : RegionService ){}
  region :  Region = new Region(0,'');
  comentario : Comentario = new Comentario('', this.region, '');
  regiones : Region[] = [];

  ngOnInit(){
    this.Editar();
  }


  Editar(){
    this.regionService.getRegionList().subscribe(
      data1=>{
        this.regiones=data1;
      }
    )

    let correo = localStorage.getItem("id");
    console.log("en editar" + correo);
    this.comentarioService.getComentarioByid(correo!)
    .subscribe(data=>{
      this.comentario=data;
    });
  }

  addComentario(){
    this.comentarioService.createComentario(this.comentario).subscribe(
      res => console.log(res)
    );
    this.router.navigate([""]);
  }

}
