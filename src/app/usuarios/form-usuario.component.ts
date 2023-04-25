import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  usuario:Usuario=new Usuario();
  titulo: string="Registro de usuario"

  constructor(private usuarioService:UsuarioService, private router:Router) {}

    ngOnInit(): void{
    }

    create():void{
      this.usuarioService.create(this.usuario).subscribe(
        res=>this.router.navigate(['/usuarios'])
      );
    }
}