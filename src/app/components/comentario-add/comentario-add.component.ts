import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../model/comentario';
import { ComentarioService } from '../../service/comentario.service';
import { Region } from '../../model/region';
import { RegionService } from '../../service/region.service';

@Component({
  selector: 'app-comentario-add',
  templateUrl: './comentario-add.component.html',
  styleUrl: './comentario-add.component.css'
})
export class ComentarioAddComponent implements OnInit{
  correo : string = '';
  region : Region = new Region(0,'');
  comentario : string = '';

  regiones : Region [] = [];

  constructor(
    private comentarioService : ComentarioService,
    private regionService: RegionService
    ){    

      this.regionService.getRegionList().subscribe({
        next:(data)=>{
          this.regiones = data;
        },error:(e)=>{}
      })
  }

  addEditComentario(correo : string){

    console.log(this.comentario)

  }

  ngOnInit(): void{
  }

  addComentario(){

    let comentario = new Comentario(this.correo, this.region, this.comentario);
    console.log(comentario);
    if(this.region.id != 0){
      this.comentarioService.createComentario(comentario).subscribe(
        res => console.log(res)
      );
    }
    
  }

}
