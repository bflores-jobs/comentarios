import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../model/comentario';
import { ComentarioService } from '../../service/comentario.service';
import { Region } from '../../model/region';
import { RegionService } from '../../service/region.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-comentario-add',
  templateUrl: './comentario-add.component.html',
  styleUrl: './comentario-add.component.css'
})
export class ComentarioAddComponent implements OnInit{
  //correo : string = '';
  //region : Region = new Region(0,'');
  //comentario : string = '';
  regiones : Region [] = [];
  resultado!: string;

  comentario : Comentario = new Comentario('', new Region(0,''), '');

  constructor(
    private router : Router,
    private comentarioService : ComentarioService,
    private regionService: RegionService
    ){    

      this.regionService.getRegionList().subscribe({
        next:(data)=>{
          this.regiones = data;
        },error:(e)=>{}
      })
  }

  ngOnInit(): void{
  }

  addComentario(){
        
    //let comentario = new Comentario(this.correo, this.region, this.comentario);
    console.log(this.comentario);
    if(this.comentario.region.id != 0){
      this.comentarioService.createComentario(this.comentario).subscribe(
        res => console.log(res)
      );
    }
    this.router.navigate([""]);    
  }

 

  

}
