import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../comentario';
import { ComentarioService } from '../../service/comentario.service';

@Component({
  selector: 'app-comentario-add',
  templateUrl: './comentario-add.component.html',
  styleUrl: './comentario-add.component.css'
})
export class ComentarioAddComponent implements OnInit{
  correo : string = '';
  region : string = '';
  comentario : string = '';

  constructor(private comentarioService : ComentarioService){    
  }

  ngOnInit(): void{
  }

  addComentario(){
    let comentario = new Comentario(this.correo, this.region, this.comentario);
    console.log(comentario);
    this.comentarioService.createComentario(comentario).subscribe(
      res => console.log(res)
    );
  }

}
