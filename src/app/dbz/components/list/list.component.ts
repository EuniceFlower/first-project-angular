import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'Eunice',
    power: 1000
  },{
    id: '',
    name: 'Priscila',
    power: 50000
  }];

  @Output() newItemEvent: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.characterList.sort();
  }

  onDeleteId(index: string) {
    this.newItemEvent.emit(index);
  }

  onDeleteCharacter(item: string):void {
    console.log({item});
    this.onDeleteId(item);
    //this.characterList.splice(item, 1);
    //this.characterList.sort();
  }
}
