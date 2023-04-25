import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
  titulo:string="Lista de Usuarios"; 

  usuarios: Usuario[] | undefined;
  data!: string;
  
  constructor(private usuarioService:UsuarioService) {}

  ngOnInit(): void{
    this.usuarioService.getAll().subscribe(
      e=>this.usuarios=e
    );
  }

  delete(usuario:Usuario): void{
    this.usuarioService.delete(usuario.id).subscribe(
      res=>this.usuarioService.getAll().subscribe(
        response=>this.usuarios=response
      )
    );
  }

  filtro() {
    this.usuarioService.get(this.data).subscribe(
      usuarios => this.usuarios = usuarios
    );
  }
}