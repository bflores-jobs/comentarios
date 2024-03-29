import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../model/comentario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private api : string = 'http://localhost:8080/api/comentarios';

  constructor(private http:HttpClient) { }

  getComentarioList():Observable<Comentario []>{
    return this.http.get<Comentario[]>(this.api);
  }

  createComentario(comentario : Comentario):Observable<Comentario>{
    return this.http.post<Comentario>(this.api, comentario);
  }

  deleteComentarioById(id : string):Observable<any>{
    return this.http.delete(this.api + '/' + id);
  }

  getComentarioByid(id : string):Observable<Comentario>{
    return this.http.get<Comentario>(this.api + '/' + id);
  }

  updateComentario(comentario : Comentario):Observable<Comentario>{
    return this.http.put<Comentario>(this.api,comentario);
  }

}
