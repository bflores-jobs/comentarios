import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../model/comentario';
import { ComentarioService } from '../../service/comentario.service';
import { Region } from '../../model/region';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrl: './comentario-list.component.css'
})
export class ComentarioListComponent implements OnInit{

  comentarios : Comentario [] = [];
 
  constructor(private comentarioService : ComentarioService){}


  ngOnInit(): void{ 
    this.listComentarios();   
  }

  listComentarios(){
    this.comentarioService.getComentarioList().subscribe(
      data => {
        this.comentarios = data;
        console.log(this.comentarios);
      }
    );
  }

  deleteComentario(id : string){
    console.log(id);
    this.comentarioService.deleteComentarioById(id).subscribe(
      ()=> this.listComentarios()
    )
  }

  editComentario(correo : string){
    console.log(correo);
  }

}
