import { Component, Input } from '@angular/core';
import { RaceModel } from '../models/race.model';
import { PonyComponent } from '../pony/pony.component';

@Component({
  selector: 'fi-race',
  standalone: true,
  imports: [PonyComponent],
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent {
  @Input ({required : true}) raceModel !:RaceModel ;

  constructor(){ }

 clicked(value:any){
  console.log(this.raceModel.name);
  
  }
 
}
