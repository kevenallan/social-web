import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuarioTabelaComponent } from './usuario/listagem-usuario-tabela/listagem-usuario-tabela.component';
import { ListagemUsuarioComponent } from './usuario/listagem-usuario/listagem-usuario.component';

const routes: Routes = [
  {
    'path':'',
    component:ListagemUsuarioComponent
  },
  {
    'path':'cadastrarusuario',
    component:CadastroUsuarioComponent
  },
  {
  'path':'cadastrarusuario/:id',
  component:CadastroUsuarioComponent
  },
  {
    'path':'listarusuarios',
    component:ListagemUsuarioComponent
  },
  {
    'path':'listarusuariostabela',
    component:ListagemUsuarioTabelaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
