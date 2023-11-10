import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajePageRoutingModule } from './personaje-routing.module';

import { PersonajePage } from './personaje.page';
import { MostrarPersonajeComponent } from './mostrar-personaje/mostrar-personaje.component';
import { PersonajeVivoComponent } from './personaje-vivo/personaje-vivo.component';
import { PersonajeMuertoComponent } from './personaje-muerto/personaje-muerto.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PersonajePageRoutingModule],
  declarations: [
    PersonajePage,
    MostrarPersonajeComponent,
    PersonajeVivoComponent,
    PersonajeMuertoComponent,
  ],
})
export class PersonajePageModule {}
