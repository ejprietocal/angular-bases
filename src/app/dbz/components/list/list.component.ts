import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 1000
    }
  ]

  onDeleteCharacter(id?: string): void {

    if (!id) {
      return;
    }

    console.log(id)

    this.onDelete.emit(id);
  }

}
