import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url:string="http://localhost:8080/usuarios";

  constructor(private http:HttpClient) { }

  //lista completa de usuarios (get)
  getAll():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }

  //filtro de usuarios (get)
  get(data: string): Observable<Usuario[]> {
    const url = `${this.url}/${data}`;
    return this.http.get<Usuario[]>(url);
  }

  //agregar usuario (post)
  create(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario);
  }

  //eliminar un usuario (delate)
  delete(id:number):Observable<Usuario>{
    return this.http.delete<Usuario>(this.url+'/'+id);
  }
}
