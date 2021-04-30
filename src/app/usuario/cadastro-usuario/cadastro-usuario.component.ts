import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';
import {Usuario} from '../../shared/model/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario;
  usuarios: Array<Usuario>;
  operacaoCadastro = true;

  constructor(private usuarioService:UsuarioFirestoreService , private rotaAtual:ActivatedRoute, 
    private roteador: Router, private mensagemService:MensagemService) {
    this.usuario = new Usuario();
    if (this.rotaAtual.snapshot.paramMap.has('id')){
      this.operacaoCadastro=false;
      const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
      // pegar do banco usuario id=idParaEdicao
      this.usuarioService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado=>this.usuario=usuarioRetornado
      )
    }
  }

  ngOnInit(): void {
  }

  inserirUsuario(): void {
    if(this.usuario.id){
      this.usuarioService.atualizar(this.usuario).subscribe(
        usuarioAlterado=>{
          this.mensagemService.success("Usuario alterado com sucesso!"); 
          this.roteador.navigate(['listarusuarios'])
        }
      )
    }
    else{
      this.usuarioService.inserir(this.usuario).subscribe(
        usuarioInserido=>{
          this.mensagemService.success("Usuario cadastrado com sucesso!"); 
          this.roteador.navigate(['listarusuarios'])
        }
      );
  }
  
  }
}
