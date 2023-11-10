import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPersonaje } from '../personajes/IPersonaje';

@Component({
  selector: 'app-personaje-vivo',
  templateUrl: './personaje-vivo.component.html',
  styleUrls: ['./personaje-vivo.component.scss'],
})
export class PersonajeVivoComponent implements OnInit {
  @Input()
  public vivos: IPersonaje[] = [];

  @Output()
  public idPersonajeAsesinado = new EventEmitter();

  public escucharPerAsesinado(idPersonaje: number){
    this.idPersonajeAsesinado.emit(idPersonaje);
  };

  constructor() {}

  ngOnInit() {}
}
