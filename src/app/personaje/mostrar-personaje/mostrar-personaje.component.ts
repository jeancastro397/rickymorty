import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPersonaje } from './../personajes/IPersonaje';

@Component({
  selector: 'app-mostrar-personaje',
  templateUrl: './mostrar-personaje.component.html',
  styleUrls: ['./mostrar-personaje.component.scss'],
})
export class MostrarPersonajeComponent implements OnInit {
  @Input() public personaje!: IPersonaje;

  @Output()
  public personajeAsesinado = new EventEmitter();

  @Output()
  public personajeRevivido = new EventEmitter();

  constructor() {}

  public matarPersonaje() {
    this.personajeAsesinado.emit(this.personaje.id);
  }

  public revivirPersonaje() {
    this.personajeRevivido.emit(this.personaje.id);
  }

  ngOnInit() {}
}
