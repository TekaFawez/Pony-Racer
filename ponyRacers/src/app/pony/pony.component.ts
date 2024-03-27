import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PonyModel } from '../models/pony-model';

@Component({
  selector: 'fi-pony',
  standalone: true,
  imports: [],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.css'
})
export class PonyComponent {
  @Input() ponyModel!: PonyModel;
  @Output() ponyClicked = new EventEmitter<PonyModel>();


  getPonyImageUrl(){
       return `assets/images/pony-${this.ponyModel.color.toLowerCase()}.gif`;

  }
  
  clicked(){
this.ponyClicked.emit()

  }
}
