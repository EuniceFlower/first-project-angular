import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent implements OnInit {
  constructor(private dbzService:DbzService) {

  }

  ngOnInit() {
    console.log('dentro de dbz page');
  }

  get characters(): Character[] {
    return [ ...this.dbzService.character ];
  }

  ondeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onAddCharacter(item: Character): void {
    this.dbzService.addItem(item);
  }
}
