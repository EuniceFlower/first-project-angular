import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  constructor() { }


  public character: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Gokú',
    power: 50000
  },{
    id: uuid(),
    name: 'vegeta',
    power: 40000
  },{
    id: uuid(),
    name: 'Priscila',
    power: 500
  }];

  addItem(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character};
    this.character.push(newCharacter);
    console.log(this.character);

  }

  //onDeleteItem(index: number) {
    //console.log("hola qe", index)
    //this.character.splice(index, 1);
  //}
  deleteCharacterById(id: string) {
    console.log(this.character);
    console.log(id);
    this.character = this.character.filter( character => character.id !== id);
  }

}
