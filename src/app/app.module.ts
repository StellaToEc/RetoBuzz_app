import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormUsuarioComponent } from './usuarios/form-usuario.component';

const routes:Routes=[
  { path:'', redirectTo:'/usuarios',pathMatch:'full' },
  { path:'usuarios', component:UsuariosComponent },
  { path:'usuarios/form', component:FormUsuarioComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }