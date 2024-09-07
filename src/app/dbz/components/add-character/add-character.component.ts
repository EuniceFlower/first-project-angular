import { Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  //@Output() newItemEvent = new EventEmitter();
  @Output()
  newItemEvent: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  }


  sendDate(): void {
    if (this.character.name.length === 0) return;
    this.newItemEvent.emit(this.character);
    console.log(this.character);
    this.character = {name: '', power: 0};
  }
}
