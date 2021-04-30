export class Usuario {
  id?: string;
  nome?: string;
  cpf?: string;
  idade?: number;
  telefone?:string;

  constructor(id?:string, usuario:Usuario={}){
    this.id = id;
    this.cpf = usuario.cpf;
    this.nome = usuario.nome;
    this.idade = usuario.idade;
    this.telefone = usuario.telefone;

  }
}
