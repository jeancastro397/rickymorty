import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IPersonaje } from '../personajes/IPersonaje';

@Component({
  selector: 'app-personaje-muerto',
  templateUrl: './personaje-muerto.component.html',
  styleUrls: ['./personaje-muerto.component.scss'],
})
export class PersonajeMuertoComponent implements OnInit {
  @Input()
  public muertos: IPersonaje[] = [];

  @Output()
  public idPersonajeRevivido = new EventEmitter();

  public escucharPerRevivido(idPersonaje: any) {
    this.idPersonajeRevivido.emit(idPersonaje);
  }

  constructor() {}

  ngOnInit() {}
}
