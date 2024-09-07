import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //llama ngif ngfor
import { FormsModule } from '@angular/forms'; // para usar ngModel

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
  declarations: [
    ListComponent,
    AddCharacterComponent,
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
