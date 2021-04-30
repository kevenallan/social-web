import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';


@Component({
  selector: 'app-listagem-usuario-tabela',
  templateUrl: './listagem-usuario-tabela.component.html',
  styleUrls: ['./listagem-usuario-tabela.component.scss']
})
export class ListagemUsuarioTabelaComponent implements OnInit {
  usuarios:MatTableDataSource<Usuario>;
  mostrarColunas=['id','nome','cpf','idade','telefone','acoes'];
  constructor(private usuarioService:UsuarioFirestoreService, private roteador:Router) { }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuariosServer=>this.usuarios=new MatTableDataSource<Usuario>(usuariosServer)
    )
  }
  filtrar(value:string):void{
    this.usuarios.filter=value.trim().toLowerCase();
  }
  apagar(id:string):void{
    this.usuarioService.remover(id).subscribe(
      apagado=>{
        const indice = this.usuarios.data.findIndex(u=>u.id===id);
        if (indice>-1){
          this.usuarios.data.splice(indice,1);
          this.usuarios=new MatTableDataSource(this.usuarios.data);
        }
      }
    );
  }
  editar(usuario: Usuario): void {
    this.roteador.navigate(['cadastrarusuario',usuario.id])
  }
}
