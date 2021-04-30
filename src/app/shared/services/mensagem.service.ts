import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private snackBar:MatSnackBar) { }

  success(mensagem:string):void{
    this.abrirSnackBar(mensagem,['success'])
  }
   
  error(mensagem:string):void{
    this.abrirSnackBar(mensagem,['error'])
  }

  warning(mensagem:string):void{
    this.abrirSnackBar(mensagem,['warning'])
  }

  info(mensagem:string):void{
    this.abrirSnackBar(mensagem,['info'])
  }

  private abrirSnackBar(mensagem:string,classesExtras:Array<string>):void{
    const snackBarConfig = new MatSnackBarConfig();
    snackBarConfig.politeness="assertive";
    snackBarConfig.duration=5000;
    snackBarConfig.panelClass=classesExtras;
    this.snackBar.open(mensagem,"X",snackBarConfig)
  }
}
