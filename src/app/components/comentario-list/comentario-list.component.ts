import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../model/comentario';
import { ComentarioService } from '../../service/comentario.service';
import { Region } from '../../model/region';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrl: './comentario-list.component.css'
})
export class ComentarioListComponent implements OnInit{

  comentarios : Comentario [] = [];
  comentario!: Comentario;
   
  constructor(private comentarioService : ComentarioService, private router : Router){}


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

  editComentario(comentario : Comentario):void{
    console.log(comentario);
    localStorage.setItem("id", comentario.correo);
    this.router.navigate(["comentario/edit"]);
  }

}
